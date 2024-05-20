<template>
  <div id="app">
    <Button @click="handleClick" @dblclick="handleDbClick" :name="name" :address="key"></Button>
    <!-- <input @input="handleInput" type="text" placeholder="请输入。。。。" /> -->
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import Button from './components/Button.vue'
export default {
  name: 'App',
  components: {
    Button
  },
  data() {
    return {
      name: 'tom',
      key: 12
    }
  },
  mounted() {
    console.log('APP');
    console.log(this);
  },
  methods: {
    handleClick() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('加载成功')
        }, 1000);
      }) 
    },
    handleDbClick() {
      console.log('handleDbClick');
    },
    handleInput() {
      console.log('input');
    }
  }
}
</script>
<style></style>
