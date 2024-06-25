<script setup>
import { ref } from 'vue';
const isShow = ref(true)
</script>
<template>
    <!-- 
        v-show 可以根据值来决定元素是否显示（通过display来切换元素的显示状态）
        v-if 可以根据表达式的值来决定元素是否显示（会直接删除元素）
            v-show通过css来切换组件的显示与否，切换时不会涉及到组件的重新渲染
                切换的性能比较高，初始化时需要对所有组件初始化，初始化时性能差
            v-if 通过删除添加元素的方式来切换元素的显示，切换时反复的渲染组件，
                切换的性能比较差，只会初始化需要用到的组件，初始化性能比较好
                v-if可以和v-else-if 和v-else结合使用
                v-if可以配合template使用
     -->
    <button @click="isShow=!isShow">切换</button>
    <div v-show="isShow">
        <h1>标题一</h1>
    </div>
</template>