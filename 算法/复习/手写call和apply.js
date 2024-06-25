/**
 * 绑定this
 * 绑定参数
 * 处理边界值（thisArg为空的情况）
 */
const obj = {
  name: 'tom'
}
function fn(num1, num2) {
  console.log(this);
  return num1 + num2
}

// console.log(fn.call(null, 1, 2));

Function.prototype.call2 = function (ctx) {
  if (!ctx) ctx = window
  if (typeof ctx === 'object' || typeof ctx === 'function' || typeof ctx === 'symbol') {
    ctx = ctx
  } else if (typeof ctx === 'string') {
    ctx = new String(ctx)
  } else if (typeof ctx === 'boolean') {
    ctx = new Boolean(ctx)
  } else if (typeof ctx === 'number') {
    ctx = new Number(ctx)
  } else if (typeof ctx === 'bigint') {
    ctx = new BigInt(ctx)
  } else if (typeof ctx === 'symbol') {
    ctx = Symbol(ctx)
  } else {
    new Error('出错了')
  }
  const fnSymbol = Symbol()
  const args = [...arguments].slice(1)
  ctx[fnSymbol] = this
  const res = ctx[fnSymbol](...args)
  delete ctx[fnSymbol]
  return res
}
// console.log(fn.call2(null, 1, 2));

const cSymbol = Symbol()
fn.call(cSymbol)
// 注意处理args为空的情况
Function.prototype.apply2 = function (ctx, args) {
  ctx = ctx || window
  const fnSymbol = Symbol()
  ctx[fnSymbol] = this
  const res = args ? ctx[fnSymbol](...args) : ctx[fnSymbol]()
  delete ctx[fnSymbol]
  return res
}

fn.call2(cSymbol)