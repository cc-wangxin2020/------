<script setup>
import {reactive} from 'vue'
const stu = reactive({
    stuName:'Tom',
    age:18,
    gender:'男'
})
</script>
<template>
    <h1>子组件</h1>
    <div>
        <slot name="aa" :stu="stu"></slot>
    </div>
    <button>
        <slot  name="bb"></slot>
    </button>
</template>