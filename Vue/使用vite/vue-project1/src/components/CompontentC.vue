<script setup>
import { inject } from 'vue';
// const {count, fn} = inject('count')
// import {countStore} from '../store/count'
import { useCountStore } from '../store/countStore';
import { storeToRefs } from 'pinia';
const counter = useCountStore()

const {name, age, adderss} = storeToRefs(counter)
/* 
    store实例本身就是一个reactive对象，可以通过它直接访问state中的数据

    但是如果直接将state中的数据解构出来，那么数据将会丧失响应性、
    可以通过storeToRefs()来对store进行解构
        它可以将store和grtters中的属性解构为ref属性，从而保留其响应性

    state的修改：
        1. 直接修改
        2. 通过$patch
        3. 通过$patch传函数的形式修改
        4. 直接替换state
*/
const clickHandler = ()=>{
    counter.$patch((state) => {
        state.adderss.push('深圳')
    })
}
/* 
    store的订阅
        - 当store中的state发生变化时，做一些响应的操作
        - store.$subscribe(函数，配置对象)
*/
counter.$subscribe((mutation, state)=>{
        console.log(mutation.events);
        console.log(state.token);
        console.log('state发生变化');
},{
    detached:true
})
// $onAction 用来订阅action的调用
counter.$onAction(({name, store, args, after, onError}) => {
    /* 
        name 调用action的名字
        store store的实例
        args action接收到的参数
        after() 可以设置一个回调函数，函数会在action成功调用后触发
        onError() 可以设置一个回调函数，函数会在action调用失败后触发
    */ 
   console.log(name);
   console.log(store);
   console.log(args);
    after(()=>{
        console.log(name + '成功执行');
    })
    onError((err) => {
        console.log(name+'执行失败', err);
    })
})
</script>
<template>
    <h3>
        组件C--{{ name }} --{{ age }}--{{ adderss }} --<button @click="clickHandler">点击</button>
    </h3>
</template>