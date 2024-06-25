/**
 * bind特点：
 *  1. 调用bind后返回一个绑定函数
 *  2. 为绑定函数绑定this上下文
 *  3. 传入的参数会位于调用时传入参数的前面（可以创建一个具有预设初始参数的函数）
 *      ——函数的柯里化
 *  4. 绑定函数作为构造函数使用时，忽略绑定函数的thisArg
 *     实现：通过instance of判断绑定函数的原型对象是否在this所指向实例的原型链上
 *           绑定函数的原型对象指向目标函数的原型对象
 *           ！！！不能直接指向目标函数的原型对象，需要一个临时对象保存绑定函数的原型对象，防止污染原型对象
 */
this.name = 'tom'
const obj = {
  name: "jerry"
}
function fn(name, age) {
  this.name = 'tom'
  console.log(this);
}
fn.prototype.friend = 'hhhhh'

const fnBind = fn.bind(obj)
const objFn1 = new fnBind()
console.log(objFn1);

Function.prototype.bind2 = function (ctx) {
  if (typeof this !== 'function') {
    new Error('目标必须为一个函数')
  }
  const self = this
  const args = [...arguments].slice(1)
  // 创建一个临时构造函数，其原型对象指向实例的原型
  const FNOP = function () { }
  const fBound = function () {
    return self.apply(this instanceof FNOP ? this : ctx, args.concat([...arguments]))
  }
  // 绑定函数的原型对象指向目标函数的原型对象
  // 使绑定函数也拥有自己的原型而不指向目标函数的原型，防止污染实例的原型对象
  FNOP.prototype = self.prototype
  fBound.prototype = new FNOP()
  return fBound
}
const fnBind1 = fn.bind2(obj)
// console.log(fnBind1.prototype);
const objFn = new fnBind1()
console.log(objFn);

const fnBind2 = fn.bind(obj).bind()
const objFnBind2 = fnBind2()
console.log(objFnBind2);

