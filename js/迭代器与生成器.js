let s = 'abc'
console.log(s[Symbol.iterator]);

let arr = ['foo', 'bar']
// 迭代器工厂函数
console.log(arr[Symbol.iterator]);
// 通过迭代器工厂函数创建迭代器对象
const iter = arr[Symbol.iterator]()
console.log(iter);

// 执行迭代
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());