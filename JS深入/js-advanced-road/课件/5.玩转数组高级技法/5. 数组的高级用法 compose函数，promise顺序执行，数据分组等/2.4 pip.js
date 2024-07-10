function pipe(...funcs) {
    if (funcs.length === 0) {
        return (arg) => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

function discount(x) {
    return x * 0.9
}

function reduce(x) {
    return x > 200 ? x - 50 : x
}

function discountPlus(x) {
    return x * 0.95
}


const getPrice = pipe(discount, reduce, discountPlus);
const log = console.log;
log(getPrice(200));   // 171
log(getPrice(250));   // 166.25