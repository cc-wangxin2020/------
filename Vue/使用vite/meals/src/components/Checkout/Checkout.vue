<script setup>
import Counter from '../UI/Counter.vue';
import { useMealStore } from '../../store/meals';

const props = defineProps(['isShow'])
const emits = defineEmits(['close'])
const meals = useMealStore()
</script>
<template>
    <div v-show="props.isShow" class="checkout">
        <div class="close"><i @click="$emit('close')" class="ri-close-line"></i></div>
        <div class="details">
            <header>餐品详情</header>
            <div class="list">
                <div class="item" v-for="meal in meals.totalCart">
                    <div class="img_wrap">
                        <img :src="meal.img" :alt="meal.title">
                    </div>
                    <div class="info">
                        <h2>{{ meal.title }}</h2>
                        <div class="price_btn">
                            <Counter :meal="meal"></Counter>
                            <div class="price">￥<span>{{ meal.price * meal.count }}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>合计￥<span>{{ meals.totalMount }}</span></footer>
        </div>
        <div class="cart-bar">
            <div class="total-amount">
                <p class="has-goods">
                    合计<span>{{ meals.totalMount }}</span>
                </p>
            </div>
            <button class="checkout_btn">去支付</button>
        </div>
    </div>
</template>
<style scoped>
.checkout {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(240, 240, 240);
    z-index: 9999;
    padding: 0 10rem;
}

.close {
    font-size: 40rem;
    font-weight: bold;
    padding: 10rem 0rem;
}

.details {
    background-color: #fff;
    border-radius: 40rem;
    /* overflow: auto; */
}

.details header {
    font-size: 25rem;
    font-weight: bold;
    padding: 30rem;
}

.list {
    max-height: calc(160rem * 6);
    margin: 0rem 30rem;
    border-bottom: 1px #e6e6e6 solid;
    border-top: 1px #e6e6e6 solid;
    overflow: auto;
}

footer {
    position: relative;
    text-align: right;
    padding: 40rem 30rem;
}

footer span {
    font-size: 30rem;
    font-weight: bold;
}

footer::before,
footer::after {
    position: absolute;
    content: ' ';
    width: 20rem;
    height: 20rem;
    left: -10rem;
    top: -10rem;
    background-color: rgb(240, 240, 240);
    border-radius: 10rem;
}

footer::after {
    left: auto;
    right: -10rem;
}

.item {
    display: flex;
    align-items: center;
    border-bottom: 1px #e6e6e6 solid;
}

.img_wrap {
    width: 160rem;
}

.img_wrap img {
    width: 100%;
}

.info {
    flex: auto;
    padding-left: 30rem;
}

.info h2 {
    font-size: 30rem;
    padding: 15rem 0rem;
}

.price_btn {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 15rem 0;
}

.price span {
    font-size: 30rem;
    font-weight: bold;
}
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
}
.has-goods{
    margin-left: 40rem;
    line-height: 100rem;
    color: #fff;
    vertical-align: middle;
}
.has-goods span{
    font-size: 36rem;
    font-weight: bold;
}
.has-goods span::before{
    content: '￥';
    font-size: 28rem;
    font-weight: normal;
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
</style>