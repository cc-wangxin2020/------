<template>
    <div class="page-container">
        <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)">|&lt;&lt;</a>
        <a @click="handleClick(1)">first</a>
        <a v-for="(n, i) in numbers" :key="i" :class="{ active: current === n }" @click="handleClick(n)">{{ n
            }}</a>
        <a @click="handleClick(pageNum)">last</a>
        <a :class="{ disabled: current === pageNum }" @click="handleClick(current + 1)">&gt;&gt;|</a>
        <p>总共 {{ pageNum }} 页</p>
    </div>
</template>

<script>
export default {
    props: {
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 200
        },
        size: {
            type: Number,
            default: 10
        },
        viewPageNum: {
            type: Number,
            default: 5
        }
    },
    computed: {
        pageNum() {
            return Math.ceil(this.total / this.size)
        },
        minNum() {
            let min = this.current - Math.floor(this.viewPageNum / 2)
            if (min < 1) {
                min = 1
            }
            return min
        },
        maxNum() {
            let max = this.minNum + this.viewPageNum - 1
            return Math.min(max, this.pageNum)
        },
        numbers() {
            const nums = []
            for (let i = this.minNum; i <= this.maxNum; i++) {
                nums.push(i)
            }
            return nums
        }
    },
    methods: {
        handleClick(currentNum) {
            this.$emit('pageChange', currentNum)
        }
    }

}
</script>

<style lang="less" scoped>
.page-container {
    display: flex;
    justify-content: center;
    margin: 10px 0;

    a {
        margin: 0 10px;
        color: rgb(72, 199, 241);
        cursor: pointer;

        &.active {
            font-weight: bold;
            font-size: 1rem;
            color: #000;
        }

        &.disabled {
            color: #ccc
        }
    }
}
</style>