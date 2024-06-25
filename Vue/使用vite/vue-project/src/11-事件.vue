<script setup>
import {ref} from 'vue'
function clickHandler(event){
    console.log(event);
}
const count = ref(0)
</script>
<template>
    <h1>{{ count }}</h1>
    <!-- 
        为元素绑定事件：
            1. 绑定事件使用v-on指令
                v-on:事件名
                @事件名
            2. 绑定事件的两种方式
                a. 内联事件处理器（自己调用函数）
                    - 事件触发时直接处理js语句
                    - 内联事件处理器，回调函数的参数由我们自己传递
                b. 方法事件处理器（vue帮忙调用函数）
                    - 事件触发时，vue会对事件的函数进行调用
                    - 方法事件处理器，回调函数的参数由vue帮忙传递
                        - 参数是事件对象
                vue如何区分两种处理器：
                    检查事件的值是否是合法的js标识符或者属性访问路径，
                        如果是，则表示它是方法事件处理器
                        否则是内联事件处理器
     -->
    <button @click="count++">点击</button><hr>
    <button @click="clickHandler">方法事件处理器</button><hr>
    <button @click="clickHandler($event)">内联事件处理器</button>
</template>