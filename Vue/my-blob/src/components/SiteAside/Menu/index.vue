<template>

    <nav class="menu_container">

        <router-link :exact="item.exact" v-for="item in items" :key="item.link" :to="{ 'name': item.name }"
            active-class="selected">
            <Icon class="icon" :type="item.icon"></Icon>
            <span>{{ item.title }}</span>
        </router-link>

    </nav>

</template>

<script>

export default {
    data() {
        return {
            items: [
                {
                    name: 'Home',
                    title: '首页',
                    icon: 'home',
                    exact: true
                },
                {
                    name: 'Blog',
                    title: '文章',
                    icon: 'blog',
                    exact: false
                },
                {
                    name: 'About',
                    title: '关于我',
                    icon: 'about',
                    exact: true
                },
                {
                    name: 'Project',
                    title: '项目&效果',
                    icon: 'code',
                    exact: false
                },
                {
                    name: 'Message',
                    title: '留言板',
                    icon: 'message',
                    exact: true
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
@import '~@/style/var.less';

.menu_container {
    width: 100%;
    margin: 15px 0;


    a {
        width: 100%;
        display: block;
        padding: 10px 50px;

        .icon {
            margin-right: 10px;
        }

        &:hover {
            color: @hover-color;
        }

        &.selected {
            color: @hover-color;
            background: @selected;
        }
    }

    color: @font-color;
}
</style>