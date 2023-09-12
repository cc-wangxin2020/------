<script setup>
import {ref} from 'vue'
const props = defineProps(['students'])
const emits = defineEmits(['delStu'])
const deleteHandler = (index) => {
    // console.log(emits);
    if(confirm("确定删除吗？")){
        emits('delStu', index)
    }
}
</script>
<template>
    <table>
        <caption>学生列表</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>地址</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(stu, index) in props.students">
                <td>{{ stu.id }}</td>
                <td>{{ stu.name }}</td>
                <td>{{ stu.gender }}</td>
                <td>{{ stu.age }}</td>
                <td>{{ stu.address }}</td>
                <td>
                    <a href="#" @click.prevent="deleteHandler(index)">删除</a>
                </td>
            </tr>
        </tbody>
    </table>
    <hr>
</template>
<style scoped>
table {
    width: 80%;
    /* 相邻两个单元格是否共享边框 */
    border-collapse: collapse;
    font-size: 20px;
    text-align: center;
}
caption{
    font-size: 30px;
    font-weight: bold;
}
th, td{
    border: 1px #000 solid;
}
</style>