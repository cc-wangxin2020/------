<script>
    // 组件，一个组件可以创建多个组件实例
    // 组件就是一个普通的js对象
    export default{
        // data是一个函数
        // 在data中，this就是当前的组件实例vm
        // 如果使用箭头函数，则无法通过this来访问组件实例
        // 使用vue时，减少使用箭头函数
        // vm.$data是实际的代理对象，通过vm可以直接访问到$data中的属性
        // vm.$data.msg 等价于vm.msg

        // data会返回一个对象作为返回值，vue会对该对象进行代理
        // 从而将其转换为响应式数据，响应式数据可以直接通过组件实例访问
        data(){
            // data会返回一个对象作为返回值，vue会对该对象进行代理
            // this.$data.name = "tom"
            // data会返回一个对象作为返回值，vue会对该对象进行代理
            // 从而将其转换为响应式数据，响应式数据可以直接通过组件实例访问
            return {
                msg:'hhhh'
            }
        },
        created(){
            this.$data.name = 'Tom'
        }
    }
</script>
<template>
    <h1>{{ msg }}</h1>
    <h2>{{ this.name }}</h2>
</template>