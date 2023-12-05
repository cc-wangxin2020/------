<script setup>
import { ref, watch } from 'vue';
import {useRouter, useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()
const count = ref(1)
const routeParams = ref(route.params);
watch(
  ()=> route.params,
  (newParams) => {
    routeParams.value = newParams;
    console.log(newParams);
  },
  {immediate:true}
)

</script>
<template>
  <p>显示信息</p>
  <!-- <div>{{ $router.getRoutes() }}</div> -->
  <!-- <div>{{ $route }}</div> -->
  <p>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link :to="'/users/' + count">User</router-link> 
  </p>
  <router-view></router-view>
</template>
