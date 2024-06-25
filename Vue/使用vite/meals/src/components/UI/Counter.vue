<script setup>
import { useMealStore } from '../../store/meals';
import { ref } from 'vue';
// const count = ref(0)
const meals = useMealStore()
const props = defineProps(['meal'])
</script>
<template>
    <div class="counter">
        <template v-if="props.meal.count > 0">
            <button class="sub" @click="meals.subMealToCart(props.meal)"><i class="ri-subtract-line"></i></button>
            <span class="count">{{ props.meal.count }}</span>
        </template>
        <button class="add" @click="meals.addMealToCart(props.meal)"><i class="ri-add-line"></i></button>
    </div>
</template>
<style scoped>
.counter {
    display: flex;
    align-items: center;
}

.sub,
.add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36rem;
    height: 36rem;
    border-radius: 50%;
    border: none;
    background-color: rgb(234, 178, 0);
    font-size: 36rem;
    font-weight: bold;
}

.sub {
    background-color: #fff;
    border: 1px #000 solid;
}

.count {
    font-size: 30rem;
    margin: 0 20rem;
}</style>