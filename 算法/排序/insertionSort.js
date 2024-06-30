Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    let j = i
    const temp = this[i]
    while (j > 0) {
      if (temp < this[j - 1]) {
        this[j] = this[j - 1]
      } else {
        break
      }
      j -= 1
    }
    this[j] = temp
  }
}

const arr = [4, 2, 5, 3, 1]
arr.insertionSort()
console.log(arr);