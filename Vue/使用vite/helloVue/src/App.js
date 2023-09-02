import MyButton from "./components/MyButton"
// 创建根组件
export default {
    data(){
        return {
            message: 'Vue'
        }
    },
    components:{
        MyButton
    },
    /* 
        template是用字符串的形式在编写模板
            1. 这些字符串会在项目运行时，在浏览器中被编译为js的函数（性能不好）
            2. 在字符串中编译代码，体验很差
        为了解决这个问题，Vue提供了一种单文件组件(SFC)
            - 单文件组件的格式是vue
            - vue文件用来编写单文件组件，vue文件本身并不能被浏览器识别
                所以必须要被构建工具打包后，才可以使用
            - 同时vue文件在打包时，构建工具会直接将template转换为函数
                无需再浏览器中去编译，这样性能也会有所提升
    */
    template:`
    <h1>{{message}}</h1>
    <MyButton></MyButton>
    <MyButton></MyButton>
    `
}