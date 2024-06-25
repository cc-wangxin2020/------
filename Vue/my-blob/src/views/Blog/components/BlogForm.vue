<template>
  <form @submit.prevent class="blog-form-container" ref="blogFormContainer">
    <div class="form-item">
      <input type="text" name="" id="" placeholder="" />
    </div>
    <div class="form-item">
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="form-item">
      <button @click="handleSubmit">提交</button>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      this.$showMessage({
        content: "提交成功",
        container: this.$refs.blogFormContainer,
      });
    },
  },
};
</script>

<style lang='less' scoped>
.blog-form-container {
  width: 100%;
  // padding: 30px;
  .form-item {
    width: 300px;
    margin-bottom: 10px;
    input {
      width: 100%;
      height: 30px;
      border-radius: 5px;
    }
    textarea {
      width: 100%;
      height: 150px;
      border-radius: 5px;
    }
    button {
      padding: 5px 15px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>