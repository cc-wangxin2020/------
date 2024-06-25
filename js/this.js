function sum() {
    console.log(this);
    const fn3 = () => {
        console.log(this);
    }
    fn3()
    function fn2() {
        console.log(this);
        const fn3 = () => {
            console.log(this);
        }
        fn3()
    }
    const obj = {name:'00', fn2}
    obj.fn2()
}
// const fn2 = () => {
//     console.log(this);
// }
// fn2()
sum()

const obj = {
    name: '12', test:function (){
        console.log(this);
        const t = () => {
            console.log(this);
        }
        t()
    }
}
obj.test()

const obj2 = {name:'33', test: () => {
    console.log(this);
}}
obj2.test()