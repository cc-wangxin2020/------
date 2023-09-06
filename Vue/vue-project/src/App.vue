<script setup>
import {ref} from 'vue'
const current = ref(0)  // 0 表示球员， 1 表示球队
// const current = ref(0)
</script>
<template>
  <div class="tab_wrapper">
    <!-- 选项卡头部 -->
    <header class="tab_head">
      <!-- 定义两个按钮 -->
      <div @click="current=0" class="tab_button" :class="{active:current==0}">热门球员</div>
      <div @click="current=1" class="tab_button" :class="{active:current==1}">热门球队</div>
    </header>
    <!-- 选项卡主体 -->
    <div class="main">
      <div>球员</div>
      <div>球队</div>
    </div>
  </div>
</template>
<style scoped>
.tab_wrapper{
  box-sizing: border-box;
  width: 800px;
  background-color:#2D53D3;
  padding: 20px;
}
.tab_head{
  /* display: flex 开启弹性盒使盒子里的内容横向排列 */
  display: flex; 
  border-radius: 10px;
  overflow: hidden;
}
.tab_button{
  background-color: #fff;
  font-size: 30px;
  text-align: center;
  padding: 5px;
  flex:auto;
  cursor: pointer;
  transition: .5s;
}
.tab_button:not(.active):hover{
  color: #BB0334;
}
.active {
  background-color: #BB0334;
  color: #fff;
}
</style>