<template>
  <div class="about-container">
    <Form></Form>
  </div>
</template>

<script>
import Form from "@/components/Form";
export default {
  components: {
    Form,
  },
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  background-color: #000;
  overflow: hidden;
}
</style>