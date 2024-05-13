<template>
    <div class="empty_container">
        <img src="" alt="">
        <p>{{ text }}</p>
    </div>
</template>

<script>
import url from '@/assets/OIP-C.jpg'
export default {
    props: {
        text: {
            type: String,
            default: '无数据'
        }
    }
}
</script>

<style lang="less" scoped>
.empty_container {
    display: flex;
    width: inherit;
    height: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
        background: #bfa;
        border-radius: 50%;
        border: none;
        margin-bottom: 10px;
    }
}
</style>