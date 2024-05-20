<template>
    <div>
        <button :disabled="isLoading" @click="handleClick">{{ isLoading ? '加载中' : '提交' }}</button>
        <Child> </Child>
    </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import Child from './Child.vue'
export default {
    components: {
        Child
    },
    data() {
        return {
            isLoading: false
        }
    },
    mounted() {
        console.log(this);
    },
    methods: {
        async handleClick() {
            this.isLoading = true
            const res = await this.$listeners.click();
            this.isLoading = false
            console.log(res);
        }
    }
}
</script>

<style></style>
