<script setup>
import Meal from './Meal.vue';

const props = defineProps(['meals'])
// console.log(props.meals.data[0]);
</script>
<template>
    <div class="meals">
        <!-- 显示商品信息 -->
        <Meal v-for = 'item in props.meals' :meal="item"></Meal>
    </div>
</template>
<style scoped>
.meals {
    height: calc(100vh - 120rem);
    padding: 160rem 0;
    overflow: auto;
}
</style>