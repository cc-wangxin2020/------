<template>
    <div class="image-loader-container">
        <img v-if="!isDone" class="placeholder" :src="placeholder" alt="">
        <img @load="handleLoad" class="origin" :src="src" alt="" :style="{
            'opacity': isOpacity,
            'transition': `${duration}ms`
        }">
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            isLoaded: false,
            isDone: false
        }
    },
    computed: {
        isOpacity() {
            return this.isLoaded ? 1 : 0
        }
    },
    methods: {
        handleLoad() {
            this.isLoaded = true
            setTimeout(() => {
                this.isDone = true
            }, this.duration);
        }
    }
}
</script>

<style scoped lang="less">
@import '~@/style/mixin.less';

.image-loader-container {
    img {
        .self-fill();
        width: 100%;
        height: 100%;
        object-fit: cover;

        &.origin {
            opacity: 0;
            transition: ;
        }
    }
}
</style>