
console.log(null == 0)
console.log('0' == false)
console.log('1' == 1);
console.log(undefined == undefined);
console.log(NaN == NaN);

const test1 = () => {
  console.log('test1');
}
function test() {
  console.log('test');
}
console.log(typeof test);
console.log(typeof test1);
console.log(test instanceof Object);
console.log(test1 instanceof Function);