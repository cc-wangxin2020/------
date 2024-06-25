// 手写new方法

function Person(name, age) {
  this.name = name
  this.age = age
  return '1'
}
Person.prototype.sayHello = function () {
  console.log('hello');
}

const obj = new Person('tom', 18)
console.log(obj);

// 自定义new方法

function myNew() {
  const obj = new Object()
  Constructor = Array.prototype.shift.call(arguments)
  Object.setPrototypeOf(obj, Constructor.prototype)
  // 判断构造函数的返回结果是否为对象
  const res = Constructor.apply(obj, arguments)
  return typeof res === 'object' ? res : obj
}

const myObj = myNew(Person, 'tom', 18)
console.log(myObj); 