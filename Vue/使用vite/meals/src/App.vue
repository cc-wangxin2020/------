<script setup>
import {useMealStore} from './store/meals'
import Meals from './components/Meals/Meals.vue'
import MealsFilter from './components/MealsFilter/MealsFilter.vue';
import CartBar from './components/Cart/CartBar.vue';
const meals = useMealStore()
// console.log(meals.data[0]);
</script>

<template>
  <MealsFilter></MealsFilter>
  <Meals :desc="true" :meals="meals.filterMeals"></Meals>
  <CartBar></CartBar>
</template>

<style scoped>
</style>
