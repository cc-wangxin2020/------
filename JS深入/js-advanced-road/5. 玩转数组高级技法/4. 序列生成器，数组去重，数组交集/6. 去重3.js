function uniqueArray(arr = [], key) {
    const keyValues = new Set();
    let val;
    return arr.filter(obj => {
        val = obj[key];
        if (keyValues.has(val)) {
            return false;
        }
        keyValues.add(val);
        return true;
    })
}


var arr = [{ a: 1 }, { a: 1 }, { a: 2 }];

console.log("filter 去重：", uniqueArray(arr, "a"));


// 对象数组去重

const filterArr = (arr1, key) => {
    const map = new Map()
    return arr1.filter(item => {
        if (map.has(item[key])) {
            return false
        }
        map.set(item[key])
        return true
    });
}

console.log(filterArr(arr, 'a'));

