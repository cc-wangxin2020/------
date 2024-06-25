const obj = {
  name: 'tom'
}
function fn(num1, num2) {
  this.num1 = num1
  this.num2 = num2
}
fn.prototype.sayHi = function () {
  console.log('hhhhh');
}
const fnBind = fn.bind(obj, 1, 2)
const fnObj = new fnBind()
console.log(fnObj);

Function.prototype.bind2 = function (ctx) {
  if (typeof this !== 'function') {
    new Error('出错了')
  }
  const self = this
  const args = [...arguments].slice(1)
  const FnTemp = function () { }
  const fnBind = function () {
    return self.apply(this instanceof FnTemp ? this : ctx, args.concat([...arguments]))
  }
  FnTemp.prototype = self.prototype
  fnBind.prototype = new FnTemp()
  return fnBind
}
const objfn = new fn(1, 2)
console.log(objfn);
const fnBind2 = fn.bind2(null, 1, 2)
const fnObj2 = new fnBind2()
console.log(fnObj2);