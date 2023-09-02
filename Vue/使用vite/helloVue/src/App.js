import MyButton from "./components/MyButton"
// 创建根组件
export default {
    data(){
        return {
            message: 'Vue'
        }
    },
    components:{
        "my-button":MyButton
    },
    // template:`
    // <h1>{{message}}</h1>
    // <MyButton></MyButton>
    // <MyButton></MyButton>
    // `
}