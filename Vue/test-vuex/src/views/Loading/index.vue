<template>
  <div class="loading-container">加载中。。。。</div>
</template>

<script>
export default {
  created() {
    this.unwatch = this.$watch(
      () => this.$store.getters["loginUser/getStatus"],
      (status) => {
        console.log(status);
        if (status !== "loading") {
          this.$router.push(this.$route.query.returnUrl || "/home");
        }
      },
      {
        immediate: true,
      }
    );
  },
  destroyed() {
    this.unwatch();
  },
};
</script>

<style>
</style>