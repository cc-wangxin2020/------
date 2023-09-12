<script setup>
import { computed } from 'vue';
const props = defineProps(['image', 'name', 'rank'])
const color = computed(()=>{
    if(props.rank == 1){
        return "rgb(254, 45, 70)"
    }else if(props.rank == 2){
        return "rgb(245, 102, 1)"
    }else{
        return "rgb(247, 169, 1)"
    }
})
</script>
<template>
    <div class="photo">
        <img :src="props.image" :alt="props.name">
        <span>{{ props.rank }}</span>
    </div>
</template>
<style scoped>
.photo {
    position: relative;
    width: 150px;
    border-radius: 15px;
    overflow: hidden;
    background-color: #bfa;
}

.photo img {
    width: 100%;
    vertical-align: middle;
}

.photo span {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: v-bind(color);
    left: 0;
    top: 0;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 15px;
}
</style>