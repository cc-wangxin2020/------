<script setup>
import {ref} from 'vue'
    const stu = ref({
    name:'',
    gender:'',
    age:'',
    address:''
})
const emits = defineEmits(['addStu'])
const addStu = (student) => {
    // emits('addStu', Object.assign({}, stu.value))
    emits('addStu', {...stu})
    stu.value.name = ''
    stu.value.gender = ''
    stu.value.age = ''
    stu.value.address = ''
}
</script>
<template>
    <form>
        <div>
           姓名： <input v-model="stu.name" type="text">
        </div>
        <div>
           性别： <input v-model="stu.gender" type="radio" name="gender" value="男">男<input v-model="stu.gender" type="radio" name="gender" value="女">女
        </div>
        <div>
           年龄： <input v-model="stu.age" type="number">
        </div>
        <div>
           地址： <input v-model="stu.address" type="text">
        </div>
        <div>
            <button @click.prevent="addStu">添加</button>
        </div>
    </form>
</template>