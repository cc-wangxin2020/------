
var GeneratorFunction = Object.getPrototypeOf(function* () { }).constructor
function* numGenerator() {
  yield 1;
  yield 2;
  return 3;
}

console.log(numGenerator.constructor);
// 推荐
console.log(numGenerator.constructor === GeneratorFunction)
// 不推荐
console.log(numGenerator instanceof GeneratorFunction.__proto__)
