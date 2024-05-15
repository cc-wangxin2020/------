<template>
    <div class="side-aside-container">
        <div class="avatar">
            <Avatar :src="imgUrl" :size="100"></Avatar>
            <h1 class="title">Wangxin的小窝</h1>
        </div>
        <div class="menu">
            <Menu></Menu>
        </div>
        <div class="footer">
            <Contact></Contact>
        </div>
    </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import Menu from './Menu'
import Contact from './Contact'
import url from '@/assets/th.jpg'
export default {
    components: {
        Avatar,
        Menu,
        Contact
    },
    data() {
        return {
            imgUrl: url
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';

.side-aside-container {
    width: 100%;
    height: 100%;
    background: @theme;
    padding: 20px 0;
    color: @font-color;

    .avatar {
        text-align: center;

        .title {
            margin-top: 10px;
            font-size: 1.5rem;
        }
    }

    .menu {
        overflow: auto;
    }

    .footer {
        position: absolute;
        bottom: 50px;
        left: 0;
    }
}
</style>