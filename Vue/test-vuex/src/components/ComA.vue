<template>
  <div class="box">
    <h1>{{ $store.state.count }}</h1>
    <button class="left">同步更改</button>
    <button>异步更改</button>
    <button @click="handleEmit">注册事件</button>
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
    console.log(this.$store);
  },
  methods: {
    handleEmit() {
      this.$EventBus.$emit("event1", "event1");
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
  button {
    margin-right: 10px;
  }
}
</style>