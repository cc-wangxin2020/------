
const arr = [1, , 3,];
console.log(arr.indexOf(undefined));
console.log(arr.includes(undefined));
console.log([...arr]);
for (let [k, v] of arr.entries()) {
    console.log(k, v);
}
for (const i of arr) {
    console.log(i);
}
// 基于键遍历
arr.forEach(function (v, index) {
    console.log("forEach:", v, index)
})

// 基于值运算
const index = arr.findIndex(v => v === undefined)
console.log("findIndex:", index)

console.log("join:", arr.toString());