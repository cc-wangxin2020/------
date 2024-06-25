// 手动实现promise.all方法
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    let arr = []
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        count++;
        arr[i] = v
        if (count === promises.length) {
          resolve(arr)
        }
      }, reason => {
        reject(reason)
      })
    }
  })
}

// 手动实现promise.resolve方法
function promiseResolve(value) {
  // if (value instanceof Promise) {
  //   return value
  // } else {
  //   return new Promise((resolve, reject) => {
  //     resolve(value)
  //   })
  // }
  return new Promise((resolve, reject) => {
    if (value instanceof Promise || thenable) {
      value.then(v => {
        resolve(v)
      }, reason => {
        reject(reason)
      })
    } else {
      resolve(value)
    }
  })
}
// 手动实现promise.reject方法
function promiseReject(value) {
  return new Promise((resolve, reject) => {
    reject(value)
  })
}

// 手动实现promise.race方法
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        resolve(v)
      }, reason => {
        reject(reason)
      })
    }
  })
}

// 手动实现promise.allSettled
function promiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    let arr = []
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        count++
        arr[i] = {
          status: 'fulfilled',
          value: v
        }
        if (count === promises.length) {
          resolve(arr)
        }
      }, reason => {
        count++
        arr[i] = {
          status: 'rejected',
          value: reason
        }
        if (count === promises.length) {
          resolve(arr)
        }
      })
    }
  })
}

// 手动实现promise.any 
function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let arr = []
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        resolve(v)
      }, reason => {
        count++
        arr[i] = reason
        if (count === promises.length) {
          reject(arr)
        }
      })
    }
  })
}