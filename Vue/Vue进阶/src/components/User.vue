<script setup>
import { ref, watch } from 'vue';
import { useRouter,useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
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
    <h2>User界面</h2>
    <div>{{ routeParams.id }}</div>
    
</template>