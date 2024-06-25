<template>
  <ul class="blog-commtent-container" v-loading="loading">
    <li v-for="item in data.row" :key="item.id">
      <div
        class="img-container"
        v-if="item.thumb"
        @click="handleClickToDetails(item)"
      >
        <img :src="imgUrl" alt="" />
      </div>
      <div class="content">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="detail">
          <span>日期：{{ formatData(item.createData) }}</span>
          <span>浏览：{{ item.scanNumber }}</span>
          <span>评论：{{ item.commentNumber }}</span>
          <span class="category">{{ item.category.name }}</span>
        </div>
        <div class="description">
          {{ item.descriptions }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import url from "@/assets/th.jpg";
import fetchData from "@/mixin/fetchData.js";
import { getBlog } from "@/api/blog.js";
import { formatData } from "@/utils/formatData.js";
export default {
  mixins: [fetchData({})],
  data() {
    return {
      imgUrl: url,
    };
  },
  mounted() {
    this.$EventBus.$on("scrollTop", this.loadData);
  },
  methods: {
    formatData,
    async getData() {
      return await getBlog();
    },
    async loadData(dom) {
      const rect = dom.getBoundingClientRect();
      const x = dom.scrollHeight - (rect.height + dom.scrollTop);
      if (x < 200) {
        this.loading = true;
        const res = await getBlog();
        console.log("加载数据");
        this.data.row = this.data.row.concat(res.row);
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped lang='less'>
.blog-commtent-container {
  position: relative;
  width: 100%;
  @mar-pad: 20px;
  overflow: auto;
  scroll-behavior: smooth;

  li {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: @mar-pad 0;

    .img-container {
      width: 200px;
      height: 150px;
      flex: 0 0 auto;
      border-radius: 10px;
      cursor: pointer;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .content {
      margin-left: @mar-pad;
      flex: 1 1 auto;

      .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 3px;
        cursor: pointer;

        &:hover {
          color: rgb(103, 225, 255);
        }
      }

      .detail {
        color: #ccc;
        margin-bottom: 20px;
        cursor: pointer;

        span {
          display: inline-block;
          margin-right: 20px;
        }
      }

      .category {
        cursor: pointer;

        &:hover {
          color: orange;
        }
      }

      .description {
        cursor: pointer;

        &:hover {
          color: orange;
        }
      }
    }
  }
}
</style>