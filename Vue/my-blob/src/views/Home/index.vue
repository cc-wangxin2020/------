<template>
    <div v-loading="loading" class="home-container" ref="homeContainer" @wheel="handleWheel">
        <ul class="carousel-container" :style="{ 'margin-top': marginTop }" @transitionend="handleTransitionend">
            <li v-for="item in data" :key="item.id">
                <Carouselitem :data="item"></Carouselitem>
            </li>
        </ul>
        <div v-show="index > 0" @click="handleChangePage(index - 1)" class="icon arrow-up">
            <Icon type="up"></Icon>
        </div>
        <div v-show="index < data.length - 1" @click="handleChangePage(index + 1)" class="icon arrow-down">
            <Icon type="down"></Icon>
        </div>
        <ul class="indicator">
            <li :class="{ 'active': index === i }" v-for="(item, i) in data" :key="item.id"
                @click="handleChangePage(i)"></li>
        </ul>
    </div>
</template>

<script>
import Carouselitem from './Carouselitem'
import { getBanners } from '@/api/banner'
import fetchData from '@/mixin/fetchData.js'

export default {
    mixins: [fetchData([])],
    components: {
        Carouselitem
    },
    data() {
        return {
            index: 0, // 记录页数
            clientHeight: 0,
            wheeling: false // 是否正在滚动
        }
    },
    computed: {
        marginTop() {
            return -this.clientHeight * this.index + 'px';
        }
    },
    mounted() {
        this.clientHeight = this.$refs.homeContainer.clientHeight
        // 监听浏览器高度变化
        window.addEventListener('resize', this.handleResize)
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        async getData() {
            return await getBanners()
        },

        handleChangePage(i) {
            this.index = i
            // console.log(this.index);
        },
        handleWheel(e) {
            if (this.wheeling) {
                return
            }
            if (e.deltaY < 0 && this.index > 0) {
                this.index--;
                this.wheeling = true
            }
            if (e.deltaY > 0 && this.index < this.data.length - 1) {
                this.index++;
                this.wheeling = true
            }
        },
        handleTransitionend() {
            this.wheeling = false
        },
        handleResize() {
            this.clientHeight = this.$refs.homeContainer.clientHeight
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/style/mixin.less';
@import '~@/style/var.less';

.home-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .carousel-container {
        color: @icon-color;
        width: 100%;
        height: 100%;
        transition: 0.3s;

        li {
            width: 100%;
            height: 100%;
        }
    }

    .icon {
        .pos-center();
        font-size: 2rem;
        @iconMargin: 20px;
        color: @icon-color;
        cursor: pointer;

        &.arrow-up {
            top: @iconMargin;
            transform: translateX(-50%);
            animation: jump-up 0.8s infinite;
        }

        &.arrow-down {
            top: auto;
            bottom: @iconMargin;
            transform: translateX(-50%);
            animation: jump-down 0.8s infinite;
        }

        @jump: 5px;

        @keyframes jump-up {
            0% {
                transform: translateX(-50%) translateY(@jump);
            }

            50% {
                transform: translateX(-50%)
            }

            100% {
                transform: translateX(-50%) translateY(-@jump)
            }
        }

        @keyframes jump-down {
            0% {
                transform: translateX(-50%) translateY(-@jump);
            }

            50% {
                transform: translateX(-50%)
            }

            100% {
                transform: translateX(-50%) translateY(@jump)
            }
        }
    }

    .indicator {
        .pos-center();
        left: auto;
        right: 30px;
        transform: translateY(-50%);

        li {
            width: 7px;
            height: 7px;
            margin: 10px 0;
            border-radius: 50%;
            border: 1px solid @icon-color;
            cursor: pointer;

            &.active {
                background: @active-indicator-bg;
            }
        }
    }
}
</style>