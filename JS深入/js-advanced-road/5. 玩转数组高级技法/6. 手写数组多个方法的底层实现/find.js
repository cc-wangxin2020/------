Array.prototype.find = function (cb, thisArg) {
  const O = Object(this)
  console.log(O);
  for (let i = 0; i < O.length; i++) {
    if (thisArg ? cb.call(thisArg, O[i], i, O) : cb(O[i], i, O)) {
      return O[i]
    }
  }
  return
}

const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]

const a = null
const b = undefined

const n = arr1.find(function (item, index, arr) {
  console.log(this);
  return item
}, arr2)

console.log(n);
