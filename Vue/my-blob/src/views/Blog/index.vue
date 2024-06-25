<template>
  <div class="blog-container">
    <Layout>
      <template #main>
        <BlogList></BlogList>
      </template>
      <template #right>
        <BlogCategory></BlogCategory>
      </template>
    </Layout>
    <div v-show="isShow" class="top" @click="handleBackTop">Top</div>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";
export default {
  components: {
    BlogList,
    BlogCategory,
    // RightList,
    Layout,
  },
  data() {
    return {
      loading: true,
      isShow: false,
    };
  },
  computed() {},
  mounted() {
    this.$EventBus.$on("scrollTop", this.onScrollTop);
  },
  destroyed() {
    this.$EventBus.$off("scrollTop", this.onScrollTop);
  },
  created() {
    // console.log(this.$route);
  },
  methods: {
    onScrollTop(dom) {
      if (dom.scrollTop > 200) {
        this.isShow = true;
      } else {
        this.isShow = false;
        return;
      }
    },
    handleBackTop() {
      this.$EventBus.$emit("BackTop");
    },
    handleSelect(options) {
      console.log(options);
    },
  },
};
</script>

<style lang="less" scoped>
.blog-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
}
.top {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: lightblue;
  text-align: center;
  line-height: 100px;
}
.right-list-container {
  width: 300px;
}
</style>