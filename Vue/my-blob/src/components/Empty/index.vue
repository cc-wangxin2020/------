<template>
    <div class="empty_container">
        <i class="iconfont icon-empty"></i>
        <p>{{ text }}</p>
    </div>
</template>

<script>
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
@import '//at.alicdn.com/t/c/font_4542555_0kkdivsg9i4.css';
@import '~@/style/mixin.less';
.empty_container {
    .pos-center();
    text-align: center;
    .iconfont {
        font-size: 5rem;
    }
    
}
</style>