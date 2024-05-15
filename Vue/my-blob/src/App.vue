<template>
  <div id="app">
    <Layout>
      <template v-slot:left>
        <div class="left">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template v-slot:main>
        <router-view></router-view>
      </template>
    </Layout>

  </div>
</template>

<script>
/* eslint-disable */
import Avatar from '@/components/Avatar'
// import url from '@/assets/OIP-C.jpg'
import Pager from '@/components/Pager'
import Empty from '@/components/Empty'
import ImageLoader from '@/components/ImageLoader'
import SiteAside from '@/components/SiteAside'
import Layout from '@/components/Layout'

export default {
  components: {
    Avatar,
    Pager,
    Empty,
    ImageLoader,
    SiteAside,
    Layout
  },
  data() {
    return {
      pageOptions: {
        current: 2,
        size: 10,
        total: 500
      }
    }
  },
  methods: {
    handlePageChange(currentNum) {
      const pageNum = Math.ceil(this.pageOptions.total / this.pageOptions.size)
      if (currentNum < 1 || currentNum > pageNum) {
        return
      }
      if (currentNum === this.pageOptions.current) {
        return
      }
      console.log(currentNum);
      this.pageOptions.current = currentNum
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/style/mixin.less';

#app {
  .self-fill(fixed);

  // background: #000;
  .left {
    width: 300px;
    height: 100%;
  }
}
</style>
