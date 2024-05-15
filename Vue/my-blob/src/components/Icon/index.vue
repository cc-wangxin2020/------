<template>
    <i class="iconfont" :class="fontIcon"></i>
</template>

<script>
const iconMap = {
    back: 'icon-back',
    home: 'icon-home',
    backpack: 'icon-backpack',
    right: 'icon-arrow-right',
    mail: 'icon-mail',
    phone: 'icon-phone',
    wechat: 'icon-WeChat',
    qq: 'icon-QQ-circle-fill',
    blog: 'icon-blogger',
    about: 'icon-about',
    code: 'icon-codepen',
    message: 'icon-messgae',
    info: 'icon-info',
    danger: 'icon-icon_danger',
    warning: 'icon-warning-filling',
    success: 'icon-success',
    up: 'icon-arrow-up-bold',
    down: 'icon-arrow-down1'

}
export default {
    props: {
        type: {
            type: String,
            required: true
        }
    },
    computed: {
        fontIcon() {
            return iconMap[this.type]
        }
    }
}
</script>

<style scoped>
@import '//at.alicdn.com/t/c/font_4542555_qgbz4bp342.css';

.iconfont {
    font-size: inherit;
}
</style>