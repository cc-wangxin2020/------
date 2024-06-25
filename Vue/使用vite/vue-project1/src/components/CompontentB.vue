<script setup>
import { ref } from 'vue';
import CompontentC from './CompontentC.vue';
const isShow = ref(true)
</script>
<template>
    <h2>
        组件B
    </h2>
    <div v-show="isShow"><CompontentC></CompontentC></div>
</template>