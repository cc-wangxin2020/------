/**
 * watch函数监听响应式数据变化，参数为source、cb和options，当监听数据发生变化时执行传入的回调函数
 * 本质上是对efftct函数的二次封装
 *  1. source 可以是getter或者响应式数据
 *  2. cd中有两个参数，分别是改变前的值和改变后的值，通过options中的lazy来懒执行effect函数，从而得到新值和旧值
 *  3. 通过scheduler函数控制cb()的执行
 */
const bucket = new WeakMap()
let activeEffect
// 定义副作用栈
let effectStack = []

const data = {
  count: 0,
  text: 'hhhhhhh',
  name: '你好'
}

const obj = new Proxy(data, {
  get(target, key) {
    track(target, key)
    return target[key]
  },
  set(target, key, newValue) {
    target[key] = newValue
    trigger(target, key)
  }
})
// 依赖收集
function track(target, key) {
  if (!activeEffect) return
  let depsMap = bucket.get(target)
  if (!depsMap) {
    depsMap = new Map()
    bucket.set(target, depsMap)
  }
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
    depsMap.set(key, deps)
  }
  deps.add(activeEffect)
  activeEffect.deps.push(deps)
}
// 依赖触发
function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  const effectsToRun = new Set()
  effects && effects.forEach(fn => {
    if (fn !== activeEffect) {
      effectsToRun.add(fn)
    }
  });
  effectsToRun.forEach(fn => {
    if (fn.options.scheduler) {
      fn.options.scheduler(fn)
    } else {
      fn()
    }
  });
}
function effect(fn, options = {}) {
  // 副作用函数
  const effectFn = () => {
    // 运行之前先清除遗留的副作用函数
    cleanup(effectFn)
    activeEffect = effectFn
    effectStack.push(effectFn)
    const res = fn()
    effectStack.pop(effectFn)
    activeEffect = effectStack[effectStack.length - 1]
    return res
  }
  effectFn.options = options
  effectFn.deps = []  // 收集相关的依赖集合,每项是此副作用函数相关联的依赖集合(Set)
  if (!options.lazy) {
    effectFn()
  }
  return effectFn
}
function cleanup(effectFn) {
  // 遍历副作用函数相关联的依赖集合数组，将此副作用函数从相关联的依赖集合数组中去除
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i]
    deps.delete(effectFn)
  }
  effectFn.deps.length = 0
}
// 定义一个任务队列
const jobQueue = new Set()
const p = Promise.resolve()

let isFlushing = false
function flushJob() {
  if (isFlushing) return
  isFlushing = true
  p.then((value) => {
    jobQueue.forEach(fn => fn())
  }).finally(() => {
    isFlushing = false
  })
}
function traverse(value, seen = new Set()) {
  if (typeof value !== 'object' || value === null || seen.has(value)) return
  seen.add(value)
  for (const k in value) {
    traverse(value[k], seen)
  }
  return value
}
function watch(source, cb, options) {
  let getter
  if (typeof source === 'function') {
    getter = source
  } else {
    getter = () => traverse(source)
  }
  let oldValue, newValue
  // 存储用户注册的过期回调
  let cleanup
  function onInvalidate(fn) {
    cleanup = fn
  }
  const job = () => {
    newValue = effectFn()
    // 判断是否有过期回调函数
    if (cleanup) {
      cleanup()
    }
    cb(oldValue, newValue, onInvalidate)
    oldValue = newValue
  }
  const effectFn = effect(
    () => getter(),
    {
      lazy: true,
      scheduler: job
    }
  )
  if (options.immediate) {
    job()
  } else {
    oldValue = effectFn()
  }
}
watch(() => obj.name, (oldValue, newValue, onInvalidate) => {
  // 定义一个标志，表示当前副作用函数是否过期
  let expired = false
  onInvalidate(() => {
    expired = true
  })
  setTimeout(() => {
    if (!expired) {
      console.log(obj.name);
    }
  }, 2000)
}, {
  immediate: true
})

setTimeout(() => {
  obj.name = 'tom'
}, 500)
setTimeout(() => {
  obj.name = 'jerry'
}, 200)
// watch(() => obj.name, (oldValue, newValue, onInvalidate) => {
//   // 定义一个标志，表示当前副作用函数是否过期
//   let expired = false
//   onInvalidate(() => {
//     expired = true
//   })
//   setTimeout(() => {
//     if (!expired) {
//       console.log('2');
//     }
//   }, 2000)
// }, {
//   immediate: true
// })