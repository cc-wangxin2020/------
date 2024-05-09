// function getQuery(url) {
//     const str = url.substr(url.indexOf('?') + 1)
//     const arr = str.split('&')
//     const res = {}
//     for (const item of arr) {
//         const temp = item.split('=')
//         res[temp[0]] = temp[1]
//     }
//     return res
// }

// const ans = getQuery('http://192.168.0.50:8080/api?name=tom&password=123456')
// console.log(ans);

// function takeLongTime() {
//     return new Promise(resolve => {
//         console.log('222222');
//         setTimeout(() => {
//             console.log('1111111');
//             resolve("long_time_value")
//         }, 1000);
//     });
// }

// takeLongTime().then(v => {
//     console.log("got", v);
// });
var data = [];
for (let i = 0; i < 10; i++) {
    data[i] = function() {
        setTimeout(function() {
            console.log(i)
        }, 1000)
    }
}
data[0]()

// var data = [];
// for (let i = 0; i < 3; i++) {
//     data[i] = function () {
//         console.log(i);
//     };
// }
// data[0]();
// data[1]();
// data[2]()