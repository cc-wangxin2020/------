

const arr = ["1"];
const proxy = new Proxy(arr, {});


const log = console.log;
log(Array.isArray(arr))


// 哦豁
log(Array.isArray(proxy))


// Proxy的实现很有意思
log(proxy.__proto__ === Array.prototype)
