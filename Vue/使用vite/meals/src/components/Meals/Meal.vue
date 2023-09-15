<script setup>
const props = defineProps(['meal'])
const meal = props.meal 
</script>
<template>
    <div>
        {{ meal.id }}
        {{ meal.title }}
        {{ meal.desc }}
        {{ meal.price }}
        {{ meal.img }}
    </div>
</template>
<style scoped></style>