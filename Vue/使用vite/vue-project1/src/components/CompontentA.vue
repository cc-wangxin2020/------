<script setup>
import { ref, inject } from 'vue';
// import { countStore } from '../store/count';
import { useCountStore } from '../store/countStore';
const counter = useCountStore()
// const count = ref(0)
// const fn = () => {
//     count.value++
// }
// const {count, fn} = inject('count')

/* 
    状态管理：
        - 状态（state）
            - 应用当中的数据就是状态
            - 状态即数据
        - 视图（view）
            - 视图用来呈现数据，用户通过视图访问数据
        - 交互（actions）
            - 用户的操作
            - 状态会根据用户在视图中的操作发生变化
    提升状态
        - 当有多个组件需要使用到同一个state时， 可以将state提升到这些组件共同的祖先组件中声明
            这样以来所有这些组件便都可以通过祖先元素来访问到这个state
*/
</script>
<template>
    <h2>组件A--{{ counter.count }}--<button @click="counter.increment('hhhh')">点击</button></h2>
</template>