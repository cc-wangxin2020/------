<script setup>
    const msg = '哈哈哈哈哈'
</script>
<template>
    <!-- 
        - 在模板中，可以直接访问到组件中声明的变量
        - 除了组件中的变量外，vue也提供了一些全局对象可以访问
            Date、Math、RegExp...
            除此之外，也可以通过app对象来向vue中添加一些全局变量
            app.config.globalProperties
        - 使用插值（双大括号）只能使用表达式，即有返回值的语句
        - 插值实际上就是再修改元素的textContent（避免xss攻击）
            如果内容中含有标签，标签会被转义，不会作为标签生效
        指令：
             - 指令模板中为标签设置的一些特殊属性，它可以用来设置标签如何显示内容
             - 指令使用v-开头
               v-text 将表达式的值作为元素的textContent插入，作用同{{  }}
                    使用指令时，不需要通过{{  }}来指定表达式
                v-html将表达式的值作为元素的innerHtml插入，有XSS注入的风险
    -->
    <h1>{{ msg }}</h1>
    <div v-text="msg"></div>
</template>