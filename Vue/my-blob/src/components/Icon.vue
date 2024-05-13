<template>
    <i class="iconfont" :class="fontIcon"></i>
</template>

<script>
const iconMap = {
    back: 'icon-back',
    home: 'icon-home',
    backpack: 'icon-backpack',
    down: 'icon-arrow-down',
    right: 'icon-arrow-right'
}
export default {
    props: {
        type: {
            type: String,
            required: true
        }
    },
    computed:{
        fontIcon(){
            return iconMap[this.type]
        }
    }
}
</script>

<style scoped>
@import '//at.alicdn.com/t/c/font_4542555_k8jot4eai.css';
</style>