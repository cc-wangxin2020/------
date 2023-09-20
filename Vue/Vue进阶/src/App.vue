<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
console.log(route);
// export default {
//   mounted() {
//     console.log(this.$route);
//   }
// }
</script>
<template>
  <p>显示信息</p>
  <p>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
  </p>
  <router-view></router-view>
</template>
