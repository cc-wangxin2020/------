<script setup>
import { ref } from 'vue';
const imgPath = ref('/image/780.jpg')
function changeImg(){
    imgPath.value = '/image/781.jpg'
}
    
</script>
<template>
    <!-- 
        当需要为标签动态设置属性时，需要使用v-bind指令
        v-bind可以简写为:
    -->
    <button @click="changeImg">点击切换</button>
    <img :src="imgPath" alt="">
</template>