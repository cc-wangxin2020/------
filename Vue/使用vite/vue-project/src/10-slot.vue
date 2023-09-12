<script setup>
import MyButton from './components/MyButton.vue';
</script>
<template>
    <!-- 在父组件中指定子组件的内容可以通过插槽（slot）来实现
        <MyButton>插槽的入口</MyButton>

        <button>
            <slot></slot> 插槽的出口
        </button>
    -->
    <MyButton>
        <template #aa="slotProps">{{slotProps.stu.stuName}}</template>
        <template #bb>按钮2</template>
    </MyButton>
</template>