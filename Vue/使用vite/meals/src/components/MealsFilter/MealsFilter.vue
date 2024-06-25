<script setup>
import { useMealStore } from '../../store/meals';
const meals = useMealStore()
</script>
<template>
    <div class="filter">
        <div class="filter-inner">
            <div class="search"><i class="ri-search-line"></i></div>
            <input v-model="meals.keyword" type="text" placeholder="请输入关键字">
        </div>
    </div>
</template>
<style scoped>
.filter {
    padding: 20rem 40rem;
    border-bottom: 1px solid #e6e6e6;
}
.filter-inner{
    position: relative;
    display: flex; 
    align-items: center;
    height: 80rem;
}
input {
    background-color: rgb(242, 242, 242);
    width: 100%;
    height: 100%;
    border-radius: 45rem;
    border: none;
    /* 输入框的轮廓线设置为none */
    outline: none;
    padding: 0 60rem 0 80rem;
}
.search {
    position: absolute;
    left: 30rem;
    font-size: 30rem;
    color: #838181;
}
</style>