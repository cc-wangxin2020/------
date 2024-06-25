/**
 * 浅响应与深响应
 *  只在第一层是响应式的和所有层都是响应式的
 * 实现方式：将get拦截函数中返回的数据包装成响应式的数据（递归方式实现）
 */
const bucket = new WeakMap()
let activeEffect
// 定义副作用栈
let effectStack = []
// 定义触发操作类型
const TriggerType = {
  SET: 'SET',
  ADD: 'ADD',
  DELETE: 'DELETE'
}

const obj1 = { foo: { bar: 1 } }
const obj2 = { foo: { bar: 1 } }
const p = reactive(obj1)
const ps = shallowReactive(obj2)

const ITERATE_KEY = Symbol()
function reactive(obj) {
  return createReactive(obj)
}
function shallowReactive(obj) {
  return createReactive(obj, true)
}
function createReactive(obj, isShallow = false) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (key === 'raw') {
        return target
      }
      track(target, key)
      const res = Reflect.get(target, key, receiver)
      if (isShallow) {
        return res
      }
      if (typeof res === 'object' && res !== null) {
        return reactive(res)
      }
      return res
    },
    set(target, key, newValue, receiver) {
      // 判断属性key是否在对象中，如果在则为修改操作，否则为添加操作
      const type = Object.prototype.hasOwnProperty.call(target, key) ? TriggerType.SET : TriggerType.ADD
      const oldValue = target[key]
      const res = Reflect.set(target, key, newValue, receiver)
      // oldValue和newValue都不为空
      if (target === receiver.raw) {
        if (oldValue !== newValue && (oldValue === oldValue || newValue === newValue)) {
          trigger(target, key, type)
        }
      }
      return res
    },
    has(target, key) {
      track(target, key)
      return Reflect.has(target, key)
    },
    ownKeys(target) {
      track(target, ITERATE_KEY)
      return Reflect.ownKeys(target)
    },
    deleteProperty(target, key) {
      const hadKey = Object.prototype.hasOwnProperty.call(target, key)
      const res = Reflect.deleteProperty(target, key)
      if (res && hadKey) {
        trigger(target, key, TriggerType.DELETE)
      }
      return res
    }
  })
}
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
function trigger(target, key, type) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  // 获取与属性相关的依赖
  const effects = depsMap.get(key)

  const effectsToRun = new Set()
  // 将与key相关的属性添加到effectsToRun
  effects && effects.forEach(fn => {
    if (fn !== activeEffect) {
      effectsToRun.add(fn)
    }
  });
  // 将与ITERATE_KEY相关的属性添加到effectsToRun
  if (type === TriggerType.ADD || type === TriggerType.DELETE) {
    // 获取与ITERATE_KEY相关的依赖函数
    const iteratEeffects = depsMap.get(ITERATE_KEY)
    iteratEeffects && iteratEeffects.forEach(fn => {
      if (fn !== activeEffect) {
        effectsToRun.add(fn)
      }
    });
  }
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


effect(() => {
  p.foo.bar
  console.log('run==================');
})
effect(() => {
  ps.foo.bar
  console.log('run==================');
})

// console.log(child.raw);
// effect(() => {
//   'name' in p
//   console.log('run===============in');
// })