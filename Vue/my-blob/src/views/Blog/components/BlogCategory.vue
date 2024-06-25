<template>
  <div class="blog-category-container" v-loading="loading">
    <h1 v-if="data.length > 0">分类标题</h1>
    <RightList
      v-if="data.length > 0"
      :list="list"
      @select="handleSelect"
    ></RightList>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixin/fetchData.js";
import { getBlogTypes } from "@/api/blog.js";

export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categroyId() {
      return +this.$route.params.id || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArtcleCount = this.data.reduce((a, b) => a + b.artcleCount, 0);
      const result = [
        { name: "全部分类", id: -1, artcleCount: totalArtcleCount },
        ...this.data,
      ];
      // console.log(this.data);
      const res = result.map((it) => {
        return {
          ...it,
          isSelected: it.id === this.categroyId,
          categroyid: this.categroyId,
        };
      });
      return res;
    },
  },
  mounted() {
    // console.log(this.$bus);
    // this.$bus.$on("event1", (v) => {
    //   console.log(v);
    // });
  },
  methods: {
    async getData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      const query = { page: 1, limit: this.limit };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "Category",
          query,
          params: {
            id: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  position: relative;
  width: 300px;
  height: 100%;
}
</style>