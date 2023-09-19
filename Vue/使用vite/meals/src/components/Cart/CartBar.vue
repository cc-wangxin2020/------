<script setup>
import cartbag from '../../assets/bag.png'
import CartDetails from './CartDetails.vue';
// import Mask from '../UI/Mask.vue'
import { useMealStore } from '../../store/meals';
import { ref } from 'vue';
import Checkout from '../Checkout/Checkout.vue';
const meals = useMealStore()
const showDetails = ref(false)
const showCheckout = ref(true)
</script>
<template>
    <Checkout :isShow="showCheckout" @close="showCheckout = false"></Checkout>
    <CartDetails :isShow="showDetails" @hide = "showDetails = false"></CartDetails>
    <!-- <Mask :is-show="showDetails" @hide = "showDetails = false"></Mask> -->
    <div class="cart-bar">
        <div class="cart-bag">
            <img :src="cartbag" alt="">
            <span v-show="meals.totalCount > 0" class="total-count">{{ meals.totalCount }}</span>
        </div>
        <div class="total-amount">
            <p v-show="meals.totalMount <=0" class="no-goods">未选购商品</p>
            <p 
            @click="showDetails = true" 
            v-show="meals.totalMount > 0" 
            class="has-goods">
            {{ meals.totalMount }}
        </p>
        </div>
        <button :class="[meals.totalMount > 0? 'checkout_btn': 'checkout_btn inActive']" @click="showCheckout = true">去结算</button>
    </div>
</template>
<style scoped>
.cart-bar {
    width: 710rem;
    height: 100rem;
    background-color: rgb(58, 58, 58);
    position: fixed;
    bottom: 40rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 60rem;
    z-index: 999;
}
.cart-bag{
    position: absolute;
    width: 100rem;
    left: 0rem;
    bottom: -10rem;
}
.total-count{
    width: 40rem;
    /* height: 40rem; */
    text-align: center;
    /* line-height: 40rem; */
    position: absolute;
    background-color: red;
    border-radius: 50%;
    padding: 6rem;
    color: #fff;
    font-weight: bold;
    right: -20rem;
}
.no-goods, .has-goods{
    margin-left: 140rem;
    line-height: 100rem;
    color: rgb(148, 148,148);
    font-size: 36rem;
    font-weight: bold;
}
.has-goods{
    color: #fff;
}
.has-goods::before{
    content: '￥';
    font-size: 26rem;
}
.checkout_btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 200rem;
    height: 100rem;
    border-radius: 60rem;
    border: none;
    background-color: rgb(248, 188, 0);
    font-size: 36rem;
}
.inActive{
    background-color: rgb(108,107,107);
    color: rgb(159,164,159);
}
</style>