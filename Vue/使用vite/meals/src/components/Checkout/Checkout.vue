<script setup>
const props = defineProps(['isShow'])
const emits = defineEmits(['close'])
</script>
<template>
    <div v-show="props.isShow" class="checkout">
        <div class="close"><i @click="$emit('close')" class="ri-close-line"></i></div>
        <div class="details">
            <header>餐品详情</header>
            <div class="list">餐品</div>
            <footer>合计￥<span>89</span></footer>
        </div>
    </div>
</template>
<style scoped>
.checkout{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(240,240,240);
    z-index: 9999;
    padding: 0 10rem;
}
.close{
    font-size: 40rem;
    font-weight: bold;
    padding:10rem 0rem;
}
.details {
    background-color: #fff;
    border-radius: 40rem;
}
.details header{
    font-size: 25rem;
    font-weight: bold;
    padding: 30rem;
}
.list {
    margin:0rem 30rem;
    border-bottom: 1px #e6e6e6 solid;
    border-top: 1px #e6e6e6 solid;
}
footer{
    position: relative;
    text-align: right;
    padding: 40rem 30rem;
}
footer span{
    font-size: 30rem;
    font-weight: bold;
}
footer::before,
footer::after{
    position: absolute;
    content: ' ';
    width: 20rem;
    height: 20rem;
    left: -10rem;
    top: -10rem;
    background-color: rgb(240,240,240);
    border-radius: 10rem;
}
footer::after {
    left: auto;
    right: -10rem;
}
</style>