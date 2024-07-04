Array.prototype.reduce = function (cb, firstValue) {
  const O = Object(this)
  const length = O.length
  for (let i = 0; i < length; i++) {
    firstValue = cb(firstValue, O[i], i, this)
  }
  return firstValue
}

const arr = [1, 2, 3, 4]

const sum = arr.reduce((a, b, index) => {
  if (!Object.prototype.hasOwnProperty.call(a, index)) {
    a[index] = b
  }
  return a
}, {})
console.log(sum);

console.log(["JS","进阶","实战"].join('-'));

const map
function transform(nums){

}

var strNumbers = "97534.23";
console.log(transform(strNumbers));