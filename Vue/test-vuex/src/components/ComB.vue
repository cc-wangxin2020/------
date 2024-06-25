<template>
  <div class="box">
    <h1>{{ $store.state.count }}</h1>
    <button class="left" @click="handleClick">同步更改</button>
    <button @click="handleAnsyClick">异步更改</button>
  </div>
</template>

<script>
// import EventBus from "@/EventBus";
export default {
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    this.$EventBus.$on("event1", this.handleTest);
  },
  destroyed() {
    this.$EventBus.$off("event1", this.handleTest);
  },
  methods: {
    handleTest(m) {
      console.log(m);
    },
    handleClick() {
      this.$store.commit("increase");
    },
    handleAnsyClick() {
      this.$store.dispatch("ansyIncrease");
    },
  },
};
</script>

<style scoped lang="less">
.box {
  width: 300px;
  height: 200px;
  text-align: center;
  border: 1px solid #ccc;
  .left {
    margin-right: 20px;
  }
}
</style>