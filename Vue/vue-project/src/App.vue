<script setup>
import { reactive, ref } from 'vue'
import TabItem from './components/TabItem.vue'
import TabList from './components/TabList.vue';
import Tab from './components/Tab.vue';
const current = ref(0)  // 0 表示球员， 1 表示球队
// const current = ref(0)
// const player = reactive({
//   name: '梅西',
//   image: '/public/images/780.jpg',
//   rank: 1,
//   number: 43376
// })
const players = reactive([
  {
    name: '梅西',
    image: '/public/images/780.jpg',
    rank: 1,
    number: 43376
  },
  {
    name: 'C罗',
    image: '/public/images/781.jpg',
    rank: 2,
    number: 33376
  },
  {
    name: '内马尔',
    image: '/public/images/780.jpg',
    rank: 3,
    number: 23376
  }
])
const teams = reactive([
  {
    name: '法国',
    image: '/public/images/780.jpg',
    rank: 1,
    number: 43376
  },
  {
    name: '巴西',
    image: '/public/images/780.jpg',
    rank: 2,
    number: 33376
  }, {
    name: '丹麦',
    image: '/public/images/780.jpg',
    rank: 3,
    number: 23376
  },
])
const playerMaxHot = players[0].number
const teamMaxHot = teams[0].number
</script>
<template>
  <Tab>
    <template #0>
      <TabList :items="players" :max="playerMaxHot"></TabList>
    </template>
    <template #1>
      <TabList :items="teams" :max="teamMaxHot"></TabList>
    </template>
  </Tab>
</template>