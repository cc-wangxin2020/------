<script setup>
import { computed } from 'vue';
const props = defineProps(['hot', 'maxHot'])
const hotp = computed(()=>{
    // console.log(props.hot, props.maxHot);
    return (props.hot / props.maxHot) * 100 + '%'
})
</script>
<template>
    <div class="hot-bar">
        <div class="inner">{{ props.hot }}热度</div>
    </div>
</template>
<style scoped>
.hot-bar {
    background-color: rgb(3, 37, 103);
    border-radius: 20px;
    /* 表示首行文本的缩进量 */
    text-indent: .5em;
}

.inner {
    background-color: #bfa;
    border-radius: 20px;
    width: v-bind(hotp);
    background-image: linear-gradient(to right, rgb(187, 3, 52) 50%, rgb(66, 2, 12));
    /* 设置文字不换行 */
    white-space: nowrap;
}
</style>