Array.prototype.binarySearch = function (item) {
  let left = 0
  let right = this.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (item < this[mid]) {
      right = mid - 1
    } else if (item > this[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

const arr = [1, 2, 3, 4, 5]
const res = arr.binarySearch(0)
console.log(res);

console.log([2, 1, 12].sort((a, b) => a - b))