<template>
    <div>
        <button :disabled="isLoading" @click="handleClick">{{ isLoading ? "加载中" : "提交" }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        handleClick() {
            // this.isLoading = true
            // this.$emit('submit', () => {
            //     this.isLoading = false
            // });
            // this.isLoading = false
        }
    }
}
</script>

<style></style>