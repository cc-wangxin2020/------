
const obj = {
    value: 10,
    toString: function () {
        return this.value + 10;
    },
    valueOf: function () {
        return this.value
    }
};
const arr = [2, 3]
obj[obj] = obj.value;
console.log("keys:", Object.keys(obj)) // 10
console.log("${obj}:", `${obj}`); // 20
console.log("obj + 1:", (obj + 1)); // 11
console.log("obj + \"\":", ("" + obj)); // 10
