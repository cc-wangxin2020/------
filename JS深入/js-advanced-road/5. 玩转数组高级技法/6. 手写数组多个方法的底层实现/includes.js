function ToIntegerOrInfinity(argument) {
  var num = Number(argument);
  // + 0 和 -0
  if ((Number.isNaN(num)) || num == 0) {
    return 0
  }
  if (num === Infinity || num == -Infinity) {
    return num
  }
  var inter = Math.floor(Math.abs(num));
  if (num < 0) {
    inter = -inter
  }
  return inter;
}

Array.prototype.includes = function (item, fromIndex) {
  if (this === null) {
    throw new TypeError('无效的this');
  }
  const O = Object(this)
  const length = O.length >> 0;
  if (length <= 0) {
    return false
  }
  let n = ToIntegerOrInfinity(fromIndex)
  if (n === Infinity) {
    return false
  }
  if (n === -Infinity || fromIndex === undefined) { n = 0 }
  let k = n >= 0 ? n : (n + length)
  if (k < 0) k = 0

  for (let i = k; i < O.length; i++) {
    if (item === O[i]) {
      return true
    } else if (Number.isNaN(O[i]) && Number.isNaN(item)) {
      return true
    }
  }
  return false
}

const arr = [1, 2, 3, undefined, null, NaN, 5, 6, 0]
console.log(arr.includes(1, -10), -10);
console.log(arr.includes(undefined, undefined));
console.log(arr.includes(null));
console.log(arr.includes(NaN));
console.log(arr.includes(-0));