const bucket = new Set()
let activeEffect

const data = {
  text: 'vue'
}

const obj = new Proxy(data, {
  get(target, key) {
    if (activeEffect) {
      bucket.add(activeEffect)
    }
    return target[key]
  },
  set(target, key, newValue) {
    target[key] = newValue
    bucket.forEach(fn => fn());
    return true
  }
})

function effect(fn) {
  activeEffect = fn
  fn()
}

effect(() => {
  console.log('run=======')
  document.querySelector('#app').innerHTML = obj.text
})