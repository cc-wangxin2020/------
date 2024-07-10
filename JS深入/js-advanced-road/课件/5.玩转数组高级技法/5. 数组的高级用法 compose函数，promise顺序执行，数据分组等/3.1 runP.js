function runPromises(promiseCreators, initData) {
    return promiseCreators
        .reduce((promise, next) => promise
            .then((data) => next(data))
            , Promise.resolve(initData));
}

const promise1 = function (data = 0) {
    return new Promise(resolve => {
        resolve(data + 1000);
    });
}
const promise2 = function (data) {
    return new Promise(resolve => {
        resolve(data - 500);
    });
}

runPromises([promise1, promise2], 1).then(res => console.log(res));

//1 + 1000 - 500 = 1001 - 500 = 501