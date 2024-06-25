<script setup>
import {ref, inject} from 'vue'
    const newStu = ref({
    name:'',
    gender:'',
    age:'',
    address:''
})
const {addStu} = inject('student')
// const emits = defineEmits(['addStu'])
const addStudent = () => {
    // emits('addStu', Object.assign({}, stu.value))
    // emits('addStu', {...stu})
    addStu({...newStu.value})
    newStu.value.name = ''
    newStu.value.gender = ''
    newStu.value.age = ''
    newStu.value.address = ''
}
</script>
<template>
    <form>
        <div>
           姓名： <input v-model="newStu.name" type="text">
        </div>
        <div>
           性别： <input v-model="newStu.gender" type="radio" name="gender" value="男">男<input v-model="newStu.gender" type="radio" name="gender" value="女">女
        </div>
        <div>
           年龄： <input v-model="newStu.age" type="number">
        </div>
        <div>
           地址： <input v-model="newStu.address" type="text">
        </div>
        <div>
            <button @click.prevent="addStudent">添加</button>
        </div>
    </form>
</template>