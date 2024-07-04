
Array.prototype.entries = function () {
    const O = Object(this);
    let index = 0;
    const length = O.length;
    function next() {
        if (index < length) {
            return { value: [index, O[index++]], done: false }
        }
        return { value: undefined, done: true };
    }
    // 返回一个可迭代迭代器（此对象实现了next() 变成迭代器 -> 实现了Symbol.iterator接口 -> 变成可迭代的迭代器）
    return {
        next,
        [Symbol.iterator]() {
            return {
                next
            }
        }
    }
}

const arr = [1, 2, 3];

const iter = arr.entries();
console.log("iter.next().value:", iter.next().value);
console.log("iter.next().value:", iter.next().value);
console.log("iter.next().value:", iter.next().value);

for (let [k, v] of arr.entries()) {
    console.log(`k:${k}`, `v:${v}`)
}