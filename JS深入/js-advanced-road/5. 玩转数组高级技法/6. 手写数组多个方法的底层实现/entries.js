Array.prototype[Symbol.iterator] = function () {
  const O = Object(this)
  const length = O.length
  let index = 0
  function next() {
    if (index < length) {
      return { value: O[index++], done: false }
    } else {
      return { value: undefined, done: true }
    }
  }
  return {
    next
  }
}
Array.prototype.entries = function () {
  const O = Object(this)
  const entries = []
  for (let i = 0; i < O.length; i++) {
    entries.push([i, O[i]])
  }
  const iter = this[Symbol.iterator].bind(entries)()
  return {
    next: iter.next,
    [Symbol.iterator]() {
      return iter
    }
  }
}

Array.prototype.keys = function () {
  const O = Object(this)
  const keys = []
  for (let i = 0; i < O.length; i++) {
    keys.push(i)
  }
  const iter = this[Symbol.iterator].bind(keys)()
  return {
    next: iter.next,
    [Symbol.iterator]() {
      return iter
    }
  }
}

const arr = [1, 2, 3]

for (let a of arr) {
  console.log(a);
}
for (const e of arr.entries()) {
  console.log(e);
}
console.log(arr.entries().next());
for (const k of arr.keys()) {
  console.log(k);
}