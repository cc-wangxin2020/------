/**
 * a instanceof B
 * 判断a的原型链上是否能找到构造函数B的原型对象
 * 原理：遍历链表
 */

const myInstanceof = (A, B) => {
  let p = A
  while (p) {
    if (p.__proto__ === B.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}
const arr = []
const obj = {}
const func = ()=>{}
console.log(myInstanceof(arr, Array));
console.log(myInstanceof(obj, Object));
console.log(myInstanceof(func, Function));
console.log(myInstanceof(func, Object));
