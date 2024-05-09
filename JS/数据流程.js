// for (let i = 0; i < 100; i++) {
//     console.log('hello world!');
// }
// for (let i = 100; i < 201; i++) {
//     console.log(i);
// }
// let arr = []
// for (let i = 0; i < 100; i++) {
//     arr.push(i + 1)
// }
// let arr1 = [1, 2, 3, 4]
// for (let i of arr1) {
//     console.log(i);
//  }

let obj = {
    name: 'xxx',
    balance: 199.8,
    taken: 3000
}
for (let i in obj) {
    if (typeof obj[i] === 'number') {
        obj[i] = '￥' + obj[i]
    }
}
console.log(obj);

var foo = {
    n: 0,
    k: {
        n: 0
    }
}
var bar = foo.k
bar.n++
bar = {
    n: 10
}
bar = foo
bar.n++
bar = foo.n
bar++
console.log(foo.n, foo.k.n);

var foo = { bar: 1 }
var arr1 = [1, 2, foo]
var arr2 = arr1.slice(1)
arr2[0]++
arr2[1].bar++
foo.bar++
arr1[2].bar++
console.log(arr1[1] === arr2[0]);
console.log(arr1[2] === arr2[1]);
console.log(foo.bar);