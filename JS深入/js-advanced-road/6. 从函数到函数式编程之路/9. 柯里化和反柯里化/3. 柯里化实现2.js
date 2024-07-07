
var slice = Array.prototype.slice;
var curry = function (fn, length) {
    var args = slice.call(arguments, 2)
    return _curry.apply(this, [fn, length || fn.length].concat(args))
};

function _curry(fn, len) {
    var oArgs = slice.call(arguments, 2);
    return function () {
        var args = oArgs.concat(slice.call(arguments));
        if (args.length >= len) {
            console.log(this);
            return fn.apply(this, args);
        } else {
            return _curry.apply(this, [fn, len].concat(args))
        }
    }
}

//使用
function calcSum() {
    return [...arguments].reduce((pre, value, index) => { return pre + value }, 0);
}

const calcSumCurry = curry(calcSum, 3, 3);

console.log(calcSumCurry(4, 5));
// console.log(calcSumCurry(4)(5));


function f1() {
    console.log('f1:', this);
    return function f2() {
        console.log('f2:', this);
    }
}
const obj = {
    name: 'tom',
    f1
}
obj.f1()()