Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if(arr.length === 1) return arr
    const mid = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  rec(this).forEach((n, i) => {
    this[i] = n
  });
}

const arr = [2, 4, 3, 5, 1]
arr.quickSort()
console.log(arr);