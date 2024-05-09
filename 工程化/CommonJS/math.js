console.log('math.js');
function isOdd(n) {
    return n % 2 !== 0
}

function sum(a, b) {
    return a + b
}

module.exports = {
    isOdd,
    sum
}