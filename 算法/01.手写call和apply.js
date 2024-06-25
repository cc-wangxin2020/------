// call 和 apply
// 作用： 改变函数执行的this的上下文

const obj = {
  value: 1
}

function bar() {
  // console.log(this.value);
  // console.log(...arguments);
  return {
    args: [...arguments]
  }
}

// obj.fn = bar
// obj.fn()
// delete obj.fn
/**
 * 手动实现call：
 *  1. 绑定this，
 *  2. 绑定参数（call接收参数thisArg, arg1, arg2, ...)
 *  3. 处理thisArg值为null的情况（当为空时指向全局对象window/global）
 *  */
Function.prototype.call2 = function (ctx) {
  ctx = ctx || global
  const fnSymbol = Symbol()
  const args = [...arguments].splice(1)
  ctx[fnSymbol] = this
  const fn = ctx[fnSymbol](...args)
  delete ctx[fnSymbol]
  return fn
}
console.log(bar.call(null));
console.log(bar.call2(null));

// 手动实现apply：接收两个参数，this上下文和参数列表

Function.prototype.apply2 = function (ctx, args) {
  ctx = ctx || global
  const fnSymbol = Symbol()
  ctx[fnSymbol] = this
  const fn = args ? ctx[fnSymbol](...args) : ctx[fnSymbol]()
  delete ctx[fnSymbol]
  return fn
}
console.log(bar.apply2(obj));
console.log(bar.apply(obj, ['tom', 18]));