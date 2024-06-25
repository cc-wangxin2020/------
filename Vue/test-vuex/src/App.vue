<template>
  <div id="app">
    <div class="main-container">
      <UserName hhhh="hhhh" @click="handleClick"></UserName>
      <router-link class="menu" to="/">
        <span>home</span>
      </router-link>
      <router-link class="menu" to="/news">
        <span>news</span>
      </router-link>
      <router-link class="menu" to="/mine">
        <span>mine</span>
      </router-link>
    </div>

    <RouterView></RouterView>
  </div>
</template>

<script>
import UserName from "./components/UserName.vue";
export default {
  name: "App",
  components: { UserName },
  mounted() {
    console.log(this.$router.options);
  },
  methods: {
    handleClick() {
      console.log("hhhhh");
    },
  },
};
</script>

<style scoped lang="less">
#app {
  width: 50%;
  height: 100%;
  margin: 20px auto;
  text-align: center;
}
.main-container {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  .menu {
    flex: 1 1 auto;
    border: 1px solid #ccc;
  }
}
</style>
