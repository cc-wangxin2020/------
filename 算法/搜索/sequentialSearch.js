Array.prototype.sequentialSearch = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) {
      return i
    }
  }
  return -1
}

const arr = [3, 4, 2, 7, 5]
const res = arr.sequentialSearch(0)
console.log(res);