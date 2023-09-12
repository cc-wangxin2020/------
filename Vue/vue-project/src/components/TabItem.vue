<script setup>
import Photo from './Photo.vue';
import HotBar from './HotBar.vue';
/* 
    子组件中的数据通常不会在子组件中直接定义，这样会导致数据和视图发生耦合
        子组件中的数据通常会在创建组件实例时确定
        父组件可以通过props来将数据传递给子组件

    使用props:
        - 先在子组件中定义props

    父组件可以通过props来向子组件传递数据
    注意：父组件传递子组件的props都是只读的，无法修改
        即使可以修改，也尽量不要在子组件中修改父组件的数据
        如果一定要改可以通过自定义事件进行修改
    属性名：
        - 定义属性名时，要遵循驼峰命名法
*/
const p = defineProps(["item", "maxHot"])
// console.log(p.item);
</script>
<template>
    <div class="tab_item">
        <!-- 图片 -->
        <Photo :image="p.item.image" :name="p.item.name" :rank="p.item.rank"></Photo>
        <!-- 描述 -->
        <div class="desc">
            <div class="name">{{ p.item.name }}</div>
            <HotBar :hot="p.item.number" :max-hot="p.maxHot"></HotBar>
        </div>
    </div>
</template>
<style scoped>
.tab_item {
    /* 将item中的图片描述水平排列 */
    display: flex;
    margin: 20px;
}

.desc {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    color: #fff;
    font-size: 30px;
    flex: auto;
    margin-left: 30px;
}
</style>