<template>
    <img class="img" :src="url" alt="" :style="{ width: size + 'px', height: size + 'px' }">
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 50
        }
    }
}
</script>

<style scoped>
.img {
    object-fit: cover;
    border-radius: 50%;
}
</style>