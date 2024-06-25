<script>
    // 组件，一个组件可以创建多个组件实例
    // 组件就是一个普通的js对象
    export default{
        data(){
            return {
                msg:'hhhh'
            }
        },
        created(){
            this.$data.name = 'Tom'
        },
        /* 
            methods用来指定实例对象中的方法
                - 它是一个对象，可以在其中定义多个方法
                - 这些方法最终会被挂载到组件实例中
                - 可以直接通过组件实例来调用这些方法
                - 所有组件实例上的属性都可以在模板中直接访问
                - methods中函数的this会被自动绑定为组件实例
        */
        methods:{
            sum(a, b){
                return a + b
            }
        }
    }
</script>
<template>
    <h1>{{ msg }}</h1>
    <h2>{{ this.name }}</h2>
</template>