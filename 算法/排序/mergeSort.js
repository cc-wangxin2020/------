Array.prototype.mergeSort = function () {
  const rec = function (arr) {
    if (arr.length === 1) return arr
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid, arr.length)
    const left = rec(leftArr)
    const right = rec(rightArr)
    const res = []
    while (left.length || right.length) {
      if (left.length && right.length) {
        res.push(left[0] < right[0] ? left.shift() : right.shift())
      } else if (left.length) {
        res.push(left.shift())
      } else if (right.length) {
        res.push(right.shift())
      }
    }
    return res
  }
  const res = rec(this)
  return res
}

const arr = [4, 3, 2, 7, 1]
const newArr = arr.mergeSort()
console.log(newArr);