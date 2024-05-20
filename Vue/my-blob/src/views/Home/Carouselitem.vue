<template>
    <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove">
        <div class="image-container" ref="imageContainer" :style="{ 'transform': imgPosition }">
            <ImageLoader :src="data.bigimg" :placeholder="data.midImg" @load="showWords()">
            </ImageLoader>
        </div>
        <div class="title" ref="title">{{ data.title }}</div>
        <div class="description" ref="description">{{ data.description }}</div>
    </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
    components: {
        ImageLoader
    },
    props: {
        data: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            titleWidth: 0,
            descriptionWidth: 0,
            container: null,
            imageContainer: null,
            mouseX: 0,
            mouseY: 0
        }
    },
    computed: {
        imgPosition() {
            if (!this.container || !this.imageContainer) {
                return;
            }
            const eWidth = this.imageContainer.width - this.container.width
            const eHeight = this.imageContainer.height - this.container.height
            const x = -eWidth / this.container.width * this.mouseX
            const y = -eHeight / this.container.height * this.mouseY
            return `translate(${x}px, ${y}px)`
        }
    },
    mounted() {
        this.titleWidth = this.$refs.title.clientWidth;
        this.descriptionWidth = this.$refs.description.clientWidth;
        this.setSize()
        window.addEventListener('resize', this.setSize)
    },
    destroyed() {
        window.removeEventListener('resize', this.setSize)
    },
    methods: {
        showWords() {
            this.$refs.title.style.opacity = 1
            this.$refs.title.style.width = 0
            this.$refs.description.style.opacity = 1
            this.$refs.description.style.width = 0
            this.$refs.title.clientHeight  // reflow
            this.$refs.title.style.width = this.titleWidth + 'px';
            this.$refs.description.style.width = this.descriptionWidth + 'px';
            this.$refs.title.style.transition = `1s`;
            this.$refs.description.style.transition = `1s 1s`;
        },
        setSize() {
            this.container = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight
            }
            this.imageContainer = {
                width: this.$refs.imageContainer.clientWidth,
                height: this.$refs.imageContainer.clientHeight
            }
            this.mouseX = this.container.width / 2
            this.mouseY = this.container.height / 2
        },
        handleMouseMove(e) {
            const rect = this.$refs.container.getBoundingClientRect()
            this.mouseX = e.clientX - rect.left
            this.mouseY = e.clientY - rect.top
        }
    }
}
</script>

<style lang="less" scoped>
.carousel-item-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .image-container {
        width: 110%;
        height: 110%;
        transition: 0.1s;
    }

    .title,
    .description {
        opacity: 0;
        white-space: nowrap;
        overflow: hidden;
        position: absolute;
        top: calc(50% - 50px);
        left: 30px;
        text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000;
    }

    .title {
        font-size: 2rem;
    }

    .description {
        top: 50%;
    }
}
</style>