<script setup>
import myBox from './components/myBox.vue'
</script>
<template>
    <h1>标题一</h1>
    <myBox></myBox>
</template>
<!-- 可以为style标签添加一个scoped属性，这样样式成为局部变量，只对当前组件生效
    实现：
        - 当在组件中使用scoped属性时，vue会自动为组件中的所有元素生成一个随机的属性，
          生成后所有的选择器都会在最后添加一个该属性（属性选择器）
        - 随机生成的属性，除了会添加到当前组件内的所有元素上，
        也会随机添加加到当前组件引入的其他组件的根元素上
-->
<style scoped>
h1{
    background-color: #bfa;
}
</style>