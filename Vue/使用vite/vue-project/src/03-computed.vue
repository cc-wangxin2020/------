<script>
    // 组件，一个组件可以创建多个组件实例
    // 组件就是一个普通的js对象
    export default{
        data(){
            return {
                msg:'hhhh',
                obj:{
                    name:'Jerry',
                    age: 12
                }
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
            // methods中的方法每次组件重新渲染都会调用
            getinfo(){
                console.log("getinfo调用了");
                return this.obj.age >= 18 ? "你是一个成年人":"你是一个未成年人"
            }
        },
        /* 
            computed 用来指定计算属性
            {
                属性名:getter
            }
            - 计算属性，只在其依赖的数据发生
            - 会对数据进行缓存，性能更好
            - 一般只在计算属性中读取数据而不进行数据修改
        */
        computed:{
            info(){
                console.log("info调用了");
                return this.obj.age >= 18 ? "你是一个成年人":"你是一个未成年人"
            }
        }
    }
</script>
<template>
    <h1>{{ msg }}</h1>
    <!-- <h2>{{ this.name }}</h2> -->
    <h2>info:{{ info }}</h2>
    <h2>methods:{{ getinfo() }}</h2>
</template>