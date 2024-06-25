/**
 * in操作符也会进行读取操作，且使用的内部方法为[[HasProperty]]
 * 实现：通过拦截Proxy代理对象的has方法实现对in操作符的拦截
 */
const bucket = new WeakMap()
let activeEffect

const data = {
  count: 1,
  get bar() {
    return this.count
  }
}

const p = new Proxy(data, {
  get(target, key, receiver) {
    track(target, key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    const res = Reflect.set(target, key, newValue, receiver)
    trigger(target, key)
    return res
  },
  has(target, key) {
    track(target, key)
    return Reflect.has(target, key)
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
  const newEffects = new Set(effects)
  // effects && effects.forEach(fn => fn());
  newEffects.forEach(fn => fn());
}
function effect(fn) {
  // 副作用函数
  const effectFn = () => {
    // 运行之前先清除遗留的副作用函数
    cleanup(effectFn)
    activeEffect = effectFn
    fn()
  }
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
  'name' in p
  console.log('run===============');
})