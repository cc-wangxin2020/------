<template>
  <div class="blog-toc-container">
    <h1>目录</h1>
    <RightList :list="getData" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeAnchor: "article-md-title-3",
    };
  },
  computed: {
    getData() {
      const getToc = (toc = []) => {
        return toc.map((it) => ({
          ...it,
          isSelected: it.anchor === this.activeAnchor,
          children: getToc(it.children),
        }));
      };
      return getToc(this.toc);
    },
  },
  methods: {
    handleSelect(item) {
      this.activeAnchor = item.anchor;
      location.hash = item.anchor;
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  position: relative;
  width: 300px;
  height: 100%;
}
</style>