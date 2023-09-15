<script setup>
import {useMealStore} from './store/meals'
import Meals from './components/Meals/Meals.vue'
const meals = useMealStore()
// console.log(meals.data[0]);
</script>

<template>
  <Meals :meals="meals.data"></Meals>
</template>

<style scoped>
</style>
