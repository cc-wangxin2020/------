/**
 * 只读与浅只读
 *  通过isReadonly标记来判断一个对象是否只读
 *  只读的对象不能被修改和删除；需要修改代理对象的set和deleteProperty拦截函数
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
const obj3 = { foo: { bar: 1 } }
const obj4 = { foo: { bar: 1 } }
const p = reactive(obj1)
const ps = shallowReactive(obj2)
const ro = readonly(obj3)
const ros = shallowReadonly(obj4)
const ITERATE_KEY = Symbol()
// 深响应函数
function reactive(obj) {
  return createReactive(obj)
}
// 浅响应函数
function shallowReactive(obj) {
  return createReactive(obj, true)
}
// 深只读
function readonly(obj) {
  return createReactive(obj, false, true)
}
// 浅只读
function shallowReadonly(obj) {
  return createReactive(obj, true, true)
}
function createReactive(obj, isShallow = false, isReadonly = false) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (key === 'raw') {
        return target
      }
      if (!isReadonly) {
        track(target, key)
      }
      const res = Reflect.get(target, key, receiver)
      if (isShallow) {
        return res
      }
      if (typeof res === 'object' && res !== null) {
        return isReadonly ? readonly(res) : reactive(res)
      }
      return res
    },
    set(target, key, newValue, receiver) {
      if (isReadonly) {
        console.warn(`属性${key}是只读的`)
        return true
      }
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
      if (isReadonly) {
        console.warn(`属性${key}是只读的`)
        return true
      }
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
effect(() => {
  ro.foo.bar
  console.log('run==================');
})
effect(() => {
  ros.foo.bar
  console.log('run==================');
})
// console.log(child.raw);
// effect(() => {
//   'name' in p
//   console.log('run===============in');
// })