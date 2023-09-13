<script setup>
import { inject } from 'vue';
// const {count, fn} = inject('count')
import {countStore} from '../store/count'
</script>
<template>
    <h3>
        组件C--{{ countStore.count }} --<button @click="countStore.fn">点击</button>
    </h3>
</template>