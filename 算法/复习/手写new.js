function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.sayHi = function () {
  console.log('hhhhhh');
}
const obj = new Person('tom', 18)
console.log(obj);

function myNew(ctx) {
  if (typeof ctx !== 'function') {
    new Error('出错了')
  }
  const obj = new Object()
  const args = [...arguments].slice(1)
  Object.setPrototypeOf(obj, ctx.prototype)
  ctx.call(obj, ...args)
  return obj
}
const obj1 = myNew(Person, 'tom', 18)
console.log(obj1);