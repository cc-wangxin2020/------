// 调用生成器返回一个生成器对象，此对象可以视为一个迭代器对象，可以用next()获取一个iteratorResult对象
// 用法：使用生成器函数作为默认迭代器
function* generatorFn() {
  return 'foo'
}

const g = generatorFn()
// console.log(g.next());

const obj = {
  name: 'tom',
  age: 18,
  address: 'beijing',
  *[Symbol.iterator]() {
    yield* Object.entries(this)
  }
}
// 调用for...of 实际上是调用对象的默认迭代器@@iterator，其为生成器对象，此生成器对象是可迭代的
// for (const i of obj) {
//   console.log(i);
// }

function* generatorFn2(iterateObj) {
  const m = new Map(iterateObj)
  yield* m
}

const m = generatorFn2(obj)
for (const i of m) {
  console.log(i);
}

function* generatorFn3() {
  yield 1 
}

const m2 = generatorFn3()
for (const i of m2) {
  console.log('============', i);
}