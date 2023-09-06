import { reactive } from "vue";

/* 
    reactive():
        - 返回一个对象的响应式代理
        - 返回的是一个深层的响应式对象
        - 也可以使用shallowReactive() 创建一个浅层的响应式对象
        - 缺点：
            - 只能返回对象的响应式代理
*/
const stu = reactive({
    name:'Tom'
})

console.log(stu);