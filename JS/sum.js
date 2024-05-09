function sum(a, b) {
    a = +a || 0
    b = +b || 0
    return a + b
}

console.log(sum('aaa', 123));

function year(a) {
   return ((a % 4 === 0) && (a % 0 !== 0)) || a % 400 === 0
}