<script>
// 组合式API
import { reactive } from 'vue';
import { ref } from 'vue';
    export default {
        setup(){
            // 定义变量
            // 在组合式api中直接声明的变量，就是一个普通的变量，不是响应式属性
            // 修改这些属性时，不会在视图中产生效果
            let msg = 'hhhhh'
            let count = ref(0)
            // 可以通过reactive()来创建一个响应式的对象
            const stu = reactive({
                name:"tom",
                age:'12'
            })
            function changeCount(){
                count ++
            }
            // 在setup() 中可以通过返回值来指定哪些内容要暴露给外部
            // 暴露后的内容可以在模板中直接使用
            return {
                msg,
                count,
                stu,
                changeCount
            }
        }
    }
</script>
<template>
    <h1>{{ msg }}</h1>
    <h1>{{ count }}</h1>
    <h1>{{ stu.name }} -- {{ stu.age }}</h1>
    <button @click="changeCount">点击</button>
</template>