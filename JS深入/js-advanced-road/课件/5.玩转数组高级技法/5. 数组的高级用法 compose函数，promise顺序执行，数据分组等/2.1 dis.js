function discount(x) {
    return x * 0.9
}

function reduce(x) {
    return x > 200 ? x - 50 : x
}


const log = console.log;
// 享受九折
log(reduce(discount(100)))  // 90
// 享受九折 + 满减
log(reduce(discount(250)))  // 175


