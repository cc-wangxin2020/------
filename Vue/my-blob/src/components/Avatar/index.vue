<template>
    <img class="avatar-container" :src="url" alt="" :style="{ width: size + 'px', height: size + 'px' }">
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
.avatar-container {
    object-fit: cover;
    border-radius: 50%;
}
</style>