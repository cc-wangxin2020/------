<template>
  <Layout>
    <template #main>
      <div ref="mainContainer" class="main-container" v-loading="isLoading">
        <BlogDetail :blog="blog" v-if="blog"></BlogDetail>
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogToc :toc="blog.toc" v-if="blog"></BlogToc>
      </div>
    </template>
  </Layout>
</template>

<script>
import debounce from "@/utils/debounce";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogToc from "./components/BlogToc.vue";
import { getBlogById } from "@/api/blog";
export default {
  components: {
    Layout,
    BlogDetail,
    BlogToc,
  },
  data() {
    return {
      blog: {},
      isLoading: true,
    };
  },
  async created() {
    this.blog = await getBlogById(this.$route.params.id);
    this.isLoading = false;
    // this.$nextTick(() => {
    //   //   console.log(this.$refs.mainContainer);
    //   this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
    // });
  },
  methods: {
    handleScroll() {
      this.$EventBus.$emit("mouseScorll", this.$refs.mainContainer);
    },
  },
  mounted() {
    this.debounceHandleScroll = debounce(this.handleScroll, 100);
    this.$refs.mainContainer.addEventListener("scroll", this.debounceHandleScroll);
  },
  updated() {
    console.log(this.$refs.mainContainer);
    this.$refs.mainContainer.addEventListener(
      "scroll",
      this.debounceHandleScoll
    );
  },
  destroyed() {
    this.$refs.mainContainer.removeEventListener("scroll", this.debounceHandleScroll);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  position: relative;
  width: 300px;
  height: 100%;
}
</style>