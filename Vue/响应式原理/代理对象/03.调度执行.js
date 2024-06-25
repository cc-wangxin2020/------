/**
 * 问题：之前的代码按顺序执行副作用函数，不能控制执行函数的时机和次数
 * 解决：指定调度器并根据调度器控制副作用函数的执行，调度器——一个options对象
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
    fn()
    effectStack.pop(effectFn)
    activeEffect = effectStack[effectStack.length - 1]
  }
  effectFn.options = options
  effectFn.deps = []  // 收集相关的依赖集合,每项是此副作用函数相关联的依赖集合(Set)
  effectFn()
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
effect(function fn1() {
  console.log(obj.count, obj.name);
}, {
  scheduler(fn) {
    jobQueue.add(fn)
    flushJob()
  } 
})

obj.count++
obj.count++
obj.name = 'tom'
obj.name = 'ok'
obj.text = 'hhhhhhhhhhh'

console.log('运行结束');
// effect(() => {
//   console.log('run=======name')
//   console.log(obj.name);
// })

// effect(() => {
//   console.log('run=======address')s
//   console.log(obj.address);
// })

// effect(() => {
//   console.log('run=======privence')
//   console.log(obj.address.privence);
// })