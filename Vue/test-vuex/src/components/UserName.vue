<template>
  <div class="user-name">
    <span v-if="loading === 'loading'">loading...</span>
    <template v-else-if="loading === 'login'">
      <router-link to="/mine">{{ user.name }}</router-link>
      <span @click="handleLoginOut">退出</span>
    </template>
    <router-link to="/login" v-else></router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  inheritAttrs: false,
  computed: {
    ...mapGetters({
      loading: "loginUser/getStatus",
    }),
    ...mapState("loginUser", {
      user: (state) => state.user,
    }),
  },
  mounted() {
    console.log(this.$listeners);
    console.log(this.user);
  },
  methods: {
    ...mapActions({
      logout: "loginUser/logout",
    }),
    async handleLoginOut() {
      await this.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="less">
.user-name {
  span,
  a {
    margin: 0 10px;
    cursor: pointer;
  }
}
</style>