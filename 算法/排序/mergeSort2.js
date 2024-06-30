Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid, arr.length)
    const orderLeft = rec(leftArr)
    const orderRight = rec(rightArr)
    const res = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  const res = rec(this)
  res.forEach((v, k) => {
    this[k] = v
  });
  return res
}

const arr = [4, 3, 2, 7, 1]
arr.mergeSort()
console.log(arr);
