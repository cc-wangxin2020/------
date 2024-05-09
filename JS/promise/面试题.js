// const p = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         resolve()
//         console.log(3);
//     })
// })

// p.then(() => {
//     console.log(4);
// })

// console.log(5);

// async function m() {
//     console.log(0);
//     const n = await 1;
//     console.log(n);
// }

// (async () => {
//     await m();
//     console.log(2);
// })()

// console.log(3);

// async function m1() {
//     return 1;
// }

// async function m2() {
//     const n = await m1()
//     console.log(n);  // 1
//     return 2
// }

// async function m3() {
//     const n = m2()
//     console.log(n);
//     return 3
// }

// m3().then(n => {
//     console.log(n);
// })

// m3()
// console.log(4);

// Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)

var a;

var b = new Promise((resolve, reject) => {
    console.log('promise1');
    setTimeout(() => {
        resolve()
    }, 1000)
}).then(() => {
    console.log('promise2');
}).then(() => {
    console.log('promise3');
}).then(() => {
    console.log('promise4');
})

a = new Promise(async (resolve, reject) => {
    console.log(a);
    await b;
    console.log(a);
    console.log('after1');
    await a;
    resolve(true)
    console.log('after2');
})

console.log('end');