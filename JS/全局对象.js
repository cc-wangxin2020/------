// var obj = (function () {
//     var a = 1
//     var b = 2
//     function hello() {
//         console.log('hello world!');
//     }
//     var count = 1
//     return {
//         sayHi: hello,
//         count: count
//     }
// })()

const makeWithdraw = (balance) => {
    ((copyBalance) => {
        let balance = copyBalance; // 这个变量是私有的
        const doBadThings = () => {
            console.log("I will do bad things with your money");
        };
        doBadThings();
        return (
            function withdraw(amount) {
                if (balance >= amount) {
                    balance -= amount;
                    return balance;
                }
                return "Insufficient money"
            });
    })(balance);
}
const firstAccount = makeWithdraw(100);// "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
