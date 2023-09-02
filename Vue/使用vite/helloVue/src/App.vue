<script>
import MyButton from "./components/MyButton.vue"
    /* 
        编写组件的代码
    */
   export default{
    data(){
        return{
            message:'Vue'
        }
    },
    components:{
        MyButton
    }
   }
</script>
<template>
    <h1>{{ message }}</h1>
    <MyButton></MyButton>
    <MyButton></MyButton>
</template>