// const p1 = new Promise((resolve, reject) => {
//     reject(1)
// })

// const p2 = p1.then(() => { })
// setTimeout(() => {
//     console.log(p1);
//     console.log(p2);
// }, 100)

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})

// const p2 = p1.catch((data) => {
//     console.log(data);
//     return data + 1
// })

// const p3 = p2.then((data) => {
//     console.log(data);
// })

// console.log(p1, p2, p3);

// setTimeout(() => {
//     console.log(p1, p2, p2);
// }, 2000)

// new Promise((resolve, reject) => {
//     resolve()
// }).then((res) => {
//     console.log(res.toString());
//     return 2
// }).catch((err) => {
//     return 3
// }).then(res => {
//     console.log(res);
// })

function sendMessage(name) {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.2) {
            resolve(`${name}成功啦`)
        } else {
            reject(`失败！`)
        }
    })
}

sendMessage("Tom").catch(err => {
    console.log(err);
    return sendMessage('Mary')
}).catch(err => {
    console.log(err); 
    return sendMessage('Jerry')
}).catch(err => {
    console.log(err);
    return sendMessage('Lili')
}).then((reply) => {
    console.log(reply);
}, err => {
    console.log('失败！！');
})