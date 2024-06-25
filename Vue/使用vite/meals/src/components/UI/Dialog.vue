<script setup>
import Mask from './Mask.vue';
const emits = defineEmits(['ok'])
</script>
<template>
    <Mask>
        <div class="dialog">
            <div class="header">确认清除购物车吗</div>
            <div class="button">
                <button  @click="$emit('hide')" class="cancal">取消</button>
                <button class="ok" @click="()=>{
                    $emit('ok'),
                    $emit('hide')
                }">确认</button>
            </div>
        </div>
    </Mask>
</template>
<style scoped>
.dialog{
    position: absolute;
    width: 700rem;
    height: 400rem;
    border-radius: 40rem;
    background-color: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
.header {
    font-size: 40rem;
    font-weight: bold;
    padding: 80rem;
    text-align: center;
}
.button{
    display: flex;
    justify-content: space-between;
    padding: 0rem 80rem;
}
.cancal, .ok{
    font-size: 36rem;
    width: 240rem;
    height: 100rem;
    border-radius: 50rem;
}
.ok{
    background-color: rgb(248, 188, 0);
    border: none;
}
</style>