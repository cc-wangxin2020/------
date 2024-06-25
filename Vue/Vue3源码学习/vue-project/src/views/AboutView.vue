<template>
  <div class="about">
    <h1 id="count">{{ count }}</h1>
  </div>
</template>
<script setup>
import { ref, reactive, watch } from "vue";
const count = ref(0 );
watch(
  count,
  (value, oldVlaue) => {
    console.log(document.querySelector("#count").innerText);
  },
  {
    flush: "post",
  }
);
// console.log(count);
// console.log(stu.value);
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
