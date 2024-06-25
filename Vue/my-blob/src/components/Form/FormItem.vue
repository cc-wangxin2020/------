<template>
  <div class="form-item">
    <input
      class="txt"
      v-model="data"
      :placeholder="placeholder"
      type="text"
      :required="rules.required"
      :minlength="rules.minlength"
      :maxlength="rules.maxlength"
      @blur="validInput"
    />
    <div class="error">
      <span>{{ err }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: "",
    },
    rules: {
      type: Object,
      default: () => ({
        required: true,
        minlength: 5,
        maxlength: 10,
      }),
    },
  },
  data() {
    return {
      data: "",
      isValid: true,
    };
  },
  watch: {
    data: function (val) {
      this.$emit("update:value", val);
    },
  },
  computed: {
    // data(){
    //   this.$emit("update:value", this.data);
    //   return this.value
    // },
    // updateD() {
    //   this.$emit("update:value", this.data);
    // },
    err() {
      if (this.isValid) {
        return "";
      } else {
        return "验证失败";
      }
    },
  },
  methods: {
    validInput(ele) {
      console.log(ele.target.validity.valid);
      this.isValid = ele.target.validity.valid;
    },
  },
};
</script>

<style lang="less" scoped>
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
</style>