<script setup>
import {ref} from 'vue'
import Meals from '../Meals/Meals.vue';
import Mask from '../UI/Mask.vue';
import Dialog from '../UI/Dialog.vue';
import { useMealStore } from '../../store/meals';
const meals = useMealStore()
const showDialog = ref(false)
const emits = defineEmits()
const okHandler = ()=>{
    meals.clearCart()
    emits('hide')
}
</script>
<template>
    <Mask style="z-index: 99">
        <Dialog :isShow="showDialog" 
            @hide="showDialog=false"
            @ok="okHandler"
            ></Dialog>
        <div class="cart-details">
            <div class="header">
                <h2>餐品详情</h2>
                <div @click='showDialog = true' class="clearCart"><i class="ri-delete-bin-line"></i>清空购物车</div>
            </div>
            <Meals :desc="false" :meals="meals.totalCart"></Meals>
        </div>
    </Mask>
</template>
<style scoped>
.cart-details {
    position: absolute;
    bottom: 0;
    width: 750rem;
    /* max-height: 75%; */
    background-color: #fff;
    overflow: auto;
    border-top-left-radius: 40rem;
    border-top-right-radius: 40rem;
}
.header{
    /* position: fixed;
    width: 750rem; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20rem 40rem;
    border-top-left-radius: 40rem;
    border-top-right-radius: 40rem;
}
.header h2{
    font-size: 30rem;
} 
.header i {
    padding: 8rem;
}
.meals{
    height: auto;
    max-height: calc(280rem * 4);
}
</style>