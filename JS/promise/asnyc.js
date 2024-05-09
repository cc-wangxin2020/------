// async function m() {
//     console.log('0');
//     const data = await Promise.resolve(123)
//     console.log('1');
//     return data
// }

// async function n() {
//     console.log('2');
//     const data = await m()
//     console.log('3');
// }
// console.log('4');
// n()

function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, duration)
    })
}

(async () => {
    for (let i = 0; i < 3; i++) {
        await delay(1000)
        console.log('ok');
    }
})()