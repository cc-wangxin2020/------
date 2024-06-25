<template>
  <div class="blog-detail-container" ref="blogDetailContainer">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期: {{ formatData(blog.createDate) }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
      <a href="">{{ blog.category.name }}</a>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
// import debounce from "@/utils/debounce";
import { formatData } from "@/utils/formatData";
import "highlight.js/styles/github.css";
import "@/style/markdown.css";
export default {
  components: {},
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$EventBus.$on("mouseScorll", this.handleScorll);
  },
  destroyed() {
    this.$EventBus.$off("mouseScorll", this.handleScorll);
  },
  methods: {
    formatData,
    handleScorll(dom) {
      console.log(dom);
      console.log("监听事件");
    },
  },
};
</script>

<style lang="less" socped>
@import "~@/style/var.less";
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>