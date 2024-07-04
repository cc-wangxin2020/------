function newObject(constructor) {
  const args = Array.prototype.slice.call(arguments, 1)
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  const res = constructor.apply(obj, args)
  return res instanceof Object ? res : obj
}

function MyObj(name, age) {
  this.name = name
  this.age = age
  return undefined
}

console.log(newObject(MyObj, 'tom', 18));