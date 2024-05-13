<template>
    <div id="app">
      <!-- <Icon type="back"></Icon>
      <Icon type="home"></Icon>
      <Icon type="backpack"></Icon>
      <my-img :url="imgUrl"></my-img> -->
      <Pager :current="pageOptions.current" :total="pageOptions.total" :size="pageOptions.size"
        @pageChange="handlePageChange"></Pager>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  // import Icon from '@/components/Icon.vue'
  // import MyImg from '@/components/MyImg.vue'
  // import url from '@/assets/OIP-C.jpg'
  import Pager from './'
  
  export default {
    components: {
      Pager
    },
    data: function () {
      return {
        pageOptions: {
          current: 1,
          total: 200,
          size: 10
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
  .iconfont {
    font-size: 3rem;
  }
  </style>
  