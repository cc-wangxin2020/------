<template>
  <div class="login-container">
    <form action="" @submit.prevent>
      <div class="form-item">
        <label>姓名:</label>
        <input type="text" v-model="formData.name" placeholder="请输入姓名" />
      </div>
      <div class="form-item">
        <label>密码:</label>
        <input
          type="password"
          v-model="formData.password"
          placeholder="请输入密码"
        />
      </div>
      <div class="form-item">
        <button @click="handleSubmit" :disabled="this.loading === 'loading'">
          {{ this.loading === "loading" ? `加载中...` : `提交` }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        name: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      loading: "loginUser/getStatus",
    }),
  },
  methods: {
    ...mapActions({
      login: "loginUser/login",
    }),
    async handleSubmit() {
      console.log(this.formData);
      const res = await this.login(this.formData);
      if (res.data) {
        alert("登录成功");
        this.$router.push("/");
      } else {
        alert("登录失败");
      }
      this.formData.name = "";
      this.formData.password = "";
    },
  },
};
</script>

<style scoped lang="less">
.form-item {
  margin-bottom: 15px;
  label {
    margin-right: 15px;
  }
  input {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    padding: 0 10px;
  }
  button {
    width: 80px;
    height: 30px;
    border-radius: 5px;
  }
}
</style>