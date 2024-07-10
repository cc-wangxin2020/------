const hasOwn = Object.prototype.hasOwnProperty;
function group(arr, fn) {
    // 不是数组
    if (!Array.isArray(arr)) {
        return arr;
    }
    // 不是函数
    if (typeof fn !== "function") {
        return Array.from(arr);
    }
    var result = {};
    var v;
    arr.forEach((val, index) => {
        v = fn(val, index);
        if (!hasOwn.call(result, v)) {
            result[v] = []
        }
        result[v].push(val);
    });
    return result;
}

// 按照长度分组
let result = group(["apple", "pear", "orange", "peach"],
    v => v.length);
console.log(result);


// 按照份数分组
result = group([{
    name: "tom",
    score: 88
}, {
    name: "Jim",
    score: 80
}, {
    name: "Nick",
    score: 88
}], v => v.score)

console.log(result);
