<script setup>
import {ref, provide} from 'vue'
import StudentList from './components/StudentList.vue'
import StudentForm from './components/StudentForm.vue';
const STU_ARR = ref([
    {
        id:1,
        name:'Tom',
        gender:'男',
        age:18,
        address:'北京'
    },
    {
        id:2,
        name:'Jerry',
        gender:'女',
        age:18,
        address:'上海'
    },
    {
        id:3,
        name:'Marry',
        gender:'女',
        age:14,
        address:'广州'
    }
])
const delStu = (index)=>{
    // console.log(index);
    STU_ARR.value.splice(index, 1)
}
// 添加学生
const addStu = (student) => {
    const flag = STU_ARR.value.at(-1)?.id
    const id = !isNaN(flag)? flag + 1:1
    student.id = id
    STU_ARR.value.push(student)
}
provide('student', {
    students:STU_ARR,
    delStu,
    addStu
})
</script>
<template>
    <!-- <StudentList :students="STU_ARR" @del-stu="delStu"></StudentList> -->
    <!-- <StudentForm @add-stu="addStu"></StudentForm> -->
    <StudentList></StudentList>
    <StudentForm></StudentForm>
</template>
<style scoped></style>