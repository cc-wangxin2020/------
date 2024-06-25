<template>
  <div class="home-container">
    <ul>
      <li v-for="(item, i) in obj.list" :key="i">{{ item.name }}</li>
    </ul>
    <span v-pre>{{ this will not be compiled }}</span>
    <button @click="handleChange">修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        list: [
          {
            name: "tom",
            age: 12,
          },
          {
            name: "lili",
            age: 15,
          },
        ],
      },
    };
  },
  methods: {
    handleChange() {
      this.obj.list[1].name = "jerry";
      this.obj.list.push({
        name: "小王",
        age: "20",
      });
    },
  },
};
</script>

<style>
</style>