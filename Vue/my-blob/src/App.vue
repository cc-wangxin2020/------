<template>
  <div id="app">
    <h1>Vue</h1>
    <Pager :current="pageOptions.current" :size="pageOptions.size" :total="pageOptions.total"
      @pageChange="handlePageChange"></Pager>

    
      <div class="container">
        <Empty></Empty>
      </div>

  </div>
</template>

<script>
/* eslint-disable */
// import Icon from '@/components/Icon.vue'
// import MyImg from '@/components/MyImg.vue'
// import url from '@/assets/OIP-C.jpg'
import Pager from '@/components/Pager'
import Empty from '@/components/Empty'

export default {
  components: {
    Pager,
    Empty
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
<style scoped>
.container {
  width: 500px;
  height: 400px;
  background: #fac;
}
</style>
