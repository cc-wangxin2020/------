let promise = new Promise(resolve => {
  console.log('1')
  resolve()
  console.log('2')
})
promise.then(resolved => {
  console.log('3')
})
console.log('3')