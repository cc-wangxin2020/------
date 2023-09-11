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
      <div v-show="current === 0">
        <!-- 球员 -->
        <div class="tab_list">
          <div class="tab_item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/780.jpg" alt="">
              <span>1</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <div class="name">梅西</div>
              <div class="hot-bar">
                <div class="inner">433760热度</div>
              </div>
            </div>
          </div>
          <div class="tab_item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/780.jpg" alt="">
              <span>1</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <div class="name">梅西</div>
              <div class="hot-bar">
                <div class="inner">433760热度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="current === 1">
        <div class="tab_list">
          <div class="tab_item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/781.jpg" alt="">
              <span>1</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <div class="name">法国队</div>
              <div class="hot-bar">
                <div class="inner">433760热度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
.tab_list{
  margin: 20px;
}
.tab_item{
  /* 将item中的图片描述水平排列 */
  display: flex;
  margin: 20px;
}
.photo{
  position: relative;
  width: 150px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #bfa;
}
.photo img{
  width: 100%;
  vertical-align: middle;
}
.photo span{
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgb(245, 102, 1);
  left: 0;
  top: 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 15px;
}
.desc{
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  color: #fff;
  font-size: 30px;
  flex: auto;
  margin-left: 30px;
}
.hot-bar{
  background-color: rgb(3, 37, 103);
  border-radius: 20px;
  /* 表示首行文本的缩进量 */
  text-indent: .5em;
}
.inner{
  background-color: #bfa;
  border-radius: 20px;
  width: 10%;
  background-image: linear-gradient(to right, rgb(187, 3, 52) 50%, rgb(66, 2, 12));
  /* 设置文字不换行 */
  white-space: nowrap;
}
</style>