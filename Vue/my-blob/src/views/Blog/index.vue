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
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import BlogList from './components/BlogList.vue'
import BlogCategory from './components/BlogCategory.vue'
export default {
  components: {
    BlogList,
    BlogCategory,
    // RightList,
    Layout
  },
  data() {
    return {
      loading: true
    }
  },
  created() {
    // console.log(this.$route);
  },
  methods: {
    handleSelect(options) {
      console.log(options);
    }
  }
}
</script>

<style lang="less" scoped>
.right-list-container {
  width: 300px;
}
</style>