// 实现了@@iteraror方法的对象为可迭代对象
// @@iteraror方法的返回值必须是一个迭代器（对象）
// 实现了next()方法的对象才能称为迭代器（对象）

const arr = [1, 2, 3, 4, 5]
const set = new Set(arr)
const map = new Set(arr)
console.log(arr[Symbol.iterator]().return);
console.log(set[Symbol.iterator]().return);
console.log(map[Symbol.iterator]().return);
// arr为可迭代对象，实现了@@iterator方法
arr[Symbol.iterator] = function () {
  const target = this
  const length = target.length
  let index = 0
  // 返回一个迭代器对象
  return {
    next() {
      return {
        value: index < length ? target[index] : undefined,
        done: index++ >= length ? true : false
      }
    },
    return() {
      console.log('终止了');
      return {
        done: true
      }
    },
    // 可迭代迭代器（对象），实现了@@iterator方法
    [Symbol.iterator]() {
      return this
    }
  }
}

// arr.forEach((i, k) => {
//   console.log(i, k);
// })
const iter = arr[Symbol.iterator]()

for (const i of iter) {
  console.log(i);
  if (i > 2) {
    break
  }
}
for (const i of iter) {
  console.log(i);
}

const obj = {
  name: 'tom',
  age: 18,
  address: 'beijing',
  // 可迭代迭代器（对象），实现了@@iterator方法
  [Symbol.iterator]() {
    let index = 0
    let that = this
    let limit = Object.keys(that).length
    return {
      next() {
        return {
          value: Object.values(that)[index],
          done: index++ >= limit ? true : false
        }
      },
      return() {
        console.log('提前终止');
        return {
          done: true
        }
      }
    }
  }
}
console.log(obj[Symbol.iterator]().return);
for (const i of obj) {
  console.log(i);
  break
}
for (const i of obj) {
  console.log(i);
}  
// // console.log(obj.index);
// // console.log(obj[Symbol.iterator]);

// console.log(...obj);
// console.log(Array.from(obj));