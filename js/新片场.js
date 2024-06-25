// 冒泡排序
let arr = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);

// 实现一个 sleep 函数，它接收一个数字作为等待的秒数n，并返回一个新构造的 promise，它执行n秒后，promise 被解决。请给出这个 sleep 函数实现代码，注意时间单位。
function sleep(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, n * 1000);
    })
}
sleep(3).then(() => {
    console.log('3秒后输出');
})