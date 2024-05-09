const a = require('./math')
console.log(a);
// console.log(require.cache);
for(let i of Object.keys(require.cache)){
    console.log(i);
}