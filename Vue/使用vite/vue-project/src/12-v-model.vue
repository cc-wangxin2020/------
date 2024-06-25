<script setup>
import {ref } from 'vue'
let text = ref('')
const hobbies = ref([])
const gender = ref('男')
const friends = ref([])
function submitHandler(){
    console.log(text.value);
}
</script>
<template>
    <h1>Hello Vue</h1>
    <form @submit.prevent="submitHandler">
    <!-- 
        这里将表单项value属性和变量text做了绑定，
        当value发生变化时， text变量会随之变化（单向绑定）
        当value或text任意一个发生变化，另一个也会随之发生变化（双向绑定）

        v-model的修饰符：
            .lazy 使用change来处理数据
            .trim 去除前后的空格
            .number 将数据转换为数值
    -->
    <div>
        <!-- <input type="text" @input="(event) => (text = event.target.value)" :value="text"> -->
        <input type="text" v-model="text">
    </div>
    <div>
        爱好
        <input v-model="hobbies" type="checkbox" name="hobby" value="足球"/> 足球
        <input v-model="hobbies" type="checkbox" name="hobby" value="篮球"/> 篮球
        <input v-model="hobbies" type="checkbox" name="hobby" value="羽毛球"/> 羽毛球
        <input v-model="hobbies" type="checkbox" name="hobby" value="乒乓球"/> 乒乓球
    </div>
    <div>
        性别
        <input v-model="gender" type="radio" name="gender" value="男">男
        <input v-model="gender" type="radio" name="gender" value="女">女
    </div>
    <div>
        朋友
        <select v-model="friends">
            <option disabled value="">请选择...</option>
            <option value="Tom">Tom</option>
            <option value="Mary">Mary</option>
            <option value="Jerry">Jerry</option>
        </select>
    </div>
    <div>
        <button>提交</button>
    </div>
    </form>
</template>
<style scoped></style>