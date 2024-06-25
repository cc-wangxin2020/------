<script setup>
import { reactive, ref } from 'vue';
/* 
    reactive():
        - 返回一个对象的响应式代理
        - 返回的是一个深层的响应式对象
        - 也可以使用shallowReactive() 创建一个浅层的响应式对象
        - 缺点：
            - 只能返回对象的响应式代理
    ref():
        - 接收一个任意值，并返回它的响应式代理
*/
const stu = reactive({
    name: 'Tom'
})
// ref在生成响应式代理时，它是将值包装为了一个对象0 --> {value:0}
// 访问ref对象时，必须通过 对象.value 来访问其中的值
// 在模板中，ref对象会被自动解包
const count = ref(0)  // 生成一个响应式代理
function fn(){
    // 在js代码中不会被解构，因此必须通过count.value来访问
    count.value++
}
</script>
<template>
    <h1>组合式API</h1>
    <!-- 在模板中，ref对象会被自动解包， 可以直接访问count -->
    <h1>{{ count }}</h1>
    <button @click="fn">点击</button>
</template>