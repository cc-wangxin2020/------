<script setup>
import {ref, provide} from 'vue'
import ComponentA from './CompontentA.vue'
import ComponentB from './CompontentB.vue'
// const count = ref(0)
// const fn = ()=>{
//     count.value++
// }
// provide("count", {
//     count: count,
//     fn
// })
</script>
<template>
    <h1>根组件</h1>
    <ComponentA></ComponentA>
    <ComponentB></ComponentB>
</template>
<style scoped></style>