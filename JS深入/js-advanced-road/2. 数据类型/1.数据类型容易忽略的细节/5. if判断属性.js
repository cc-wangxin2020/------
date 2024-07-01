

const result = {};
// name存在
const test = (obj) => {
    if (obj.name) {
        result.name = obj.name;
    }
    return result;
}
const obj = {
    name: 'hhh'
}

test(obj)
console.log(result);