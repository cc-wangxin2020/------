
Array.prototype.entries = function () {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push([i, this[i]])
    }
    return result
}


const arr = [1, "3", 2];
for(let [k, v] of arr.entries()){
    console.log(k, v);
}