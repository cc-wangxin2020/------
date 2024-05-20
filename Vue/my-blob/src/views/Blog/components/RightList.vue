<template>
    <ul class="right-list-container">
        <li v-for="(item, i) in list" :key="i">
            <div class="item" :class="{ 'active': item.isSelected }" @click="handleClick(item)">
                <span>{{ item.name }}</span>
                <span class="count" :class="{ 'active': item.isSelected }" v-if="item.artcleCount">{{ item.artcleCount
                    }}篇</span>
            </div>
            <RightList :list="item.children" @select="handleClick"></RightList>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'RightList',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        handleClick(item) {
            this.$emit('select', item)
        }
    }
}
</script>

<style lang="less" scoped>
.right-list-container {
    color: #000;

    li {
        margin: 10px 0;
        padding: 0 10px;
        cursor: pointer;

        .item {
            .count {
                margin-left: 10px;
                color: #ccc;

                &.active {
                    color: orange;
                }
            }
        }

        .active {
            color: orange;
        }
    }
}
</style>