<template>
  <form>
    <h3>用户注册</h3>
    <FormItem :value.sync="name" :placeholder="`请输入用户名`"></FormItem>
    <!-- <div class="form-item">
      <input
        @blur="validationInput"
        class="txt phone"
        type="text"
        v-model.lazy="phone"
        placeholder="请输入11位手机号"
        required
        maxlength="11"
        minlength="11"
      />
      <div class="error">
        <span>{{ err }}</span>
      </div>
    </div> -->
    <!-- <div class="form-item">
      <div class="clearfix">
        <input
          class="txt left captcha"
          type="text"
          v-model="formData.captcha"
          placeholder="请填写验证码"
          required
        />
        <button class="right" disabled>发送验证码</button>
      </div>
      <span class="error">验证未通过</span>
    </div> -->
    <div class="form-item">
      <input
        @blur="validEmail"
        class="txt password"
        type="text"
        v-model="email"
        placeholder="请填写邮箱"
        required
        pattern="/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/"
      />
      <div class="error">
        <span>{{ err }}</span>
      </div>
    </div>
    <div class="form-item">
      <input
        class="txt"
        type="password"
        v-model="confirmPsd"
        placeholder="请再次确认密码"
        @blur="validConfirm"
        required
      />
      <div class="error">
        <span>{{ confirmErr }}</span>
      </div>
    </div>
    <!-- <div class="form-item">
      <select class="txt hobby" name="" id="" multiple>
        <option value="">爱好1</option>
        <option value="">爱好2</option>
        <option value="">爱好3</option>
        <option value="">爱好4</option>
        <option value="">爱好1</option>
        <option value="">爱好2</option>
        <option value="">爱好3</option>
        <option value="">爱好4</option>
      </select>
    </div>
    <div class="form-item clearfix">
      <div class="sex left">性别:</div>
      <div class="left">
        <label class="radio male">
          <input type="radio" name="sex" value="男" checked />
          <span>男</span>
        </label>
        <label class="radio female">
          <input type="radio" name="sex" value="女" />
          <span>女</span>
        </label>
      </div>
    </div>
    <div class="form-item">
      <textarea class="txt" name="" id="" placeholder="请输入内容"></textarea>
    </div>
    <div class="form-item">
      <label class="policy">
        <input class="" type="checkbox" name="" id="" />
        <span>同意隐私协议</span>
      </label>
    </div>
    <div class="form-item clearfix">
      <button type="submit" class="submit left">立即注册</button>
      <button type="reset" class="reset right">重置表单</button>
    </div> -->
  </form>
</template>

<script>
import FormItem from "./FormItem.vue";
export default {
  components: {
    FormItem,
  },
  data() {
    return {
      name: "",
      password: "",
      err: "",
      confirmPsd: "",
      confirmErr: "",
      phone: "",
      // dom: "",
      // isValid: true,
    };
  },
  computed: {
    // err() {
    //   if (this.isValid) {
    //     return "";
    //   }
    //   return "验证失败！";
    //   // }
    // },
  },
  mounted() {},
  methods: {
    validationInput(ele) {
      this.isValid = ele.target.validity.valid;
    },
    validConfirm() {
      if (
        this.password &&
        this.confirmPsd &&
        this.password === this.confirmPsd
      ) {
        return;
      } else {
        this.confirmErr = "两次输入不一致";
        this.err = "两次输入不一致";
      }
    },
    validEmail(ele) {
      console.log(ele.target.validity.patternMismatch);
    },
  },
};
</script>

<style lang="less" scoped>
form {
  width: 400px;
  background-color: #fff;
  margin: 30px auto;
  border-radius: 10px;
  padding: 20px;
  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
  .form-item {
    margin-bottom: 10px;
  }
  input:invalid {
    ~ .error {
      display: block;
    }
  }
  .error {
    height: 15px;
    line-height: 15px;
    span {
      font-size: 0.8rem;
      color: red;
      margin-top: 5px;
    }
  }
  .txt {
    outline: none;
    border: 1px solid #ccc;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 14px;
    &::placeholder {
      color: #ccc;
    }
    &:focus {
      outline: 1px solid #577fe4;
    }
  }
}

button {
  outline: none;
  height: 40px;
  padding: 0 20px;
  border: none;
  background-color: #577fe4;
  color: #fff;
  border-radius: 5px;
  &:hover {
    background-color: #6f91e7;
    cursor: pointer;
  }
  &:disabled {
    background-color: #6f91e7;
    cursor: not-allowed;
  }
}

select.txt {
  height: 100px;
}

textarea.txt {
  height: 100px;
  resize: none;
  padding: 10px;
}

.policy {
  color: #ccc;
  input {
    vertical-align: middle;
    &:checked ~ span {
      color: #000;
    }
  }
}

.submit,
.reset {
  width: 45%;
}

.captcha.txt {
  width: 60%;
}

.sex {
  margin-right: 10px;
}

.radio {
  color: #ccc;
  cursor: pointer;
  input:checked ~ span {
    color: #000;
  }
}
.left {
  float: left;
}
.right {
  float: right;
}

.clearfix::after {
  content: "";
  display: block;
  /* 顶部外边距会折叠 */
  /* margin-top: 100px; */
  clear: both;
}
</style>