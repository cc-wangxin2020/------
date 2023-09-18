<script setup>
import Meal from './Meal.vue';

const props = defineProps(['meals'])

</script>
<template>
    <div class="meals">
        <!-- 显示商品信息 -->
        <Meal v-for = 'item in props.meals' :meal="item"></Meal>
        <template v-if="props.meals.length == 0">
            <h2>没有找到指定商品~</h2>
        </template>
    </div>
</template>
<style scoped>
.meals {
    height:calc(100vh - 121rem);
    padding-bottom: 160rem;
    /* background-color: #bfa; */
    overflow: auto;
}
</style>