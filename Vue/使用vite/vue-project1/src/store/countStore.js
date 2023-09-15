import { defineStore } from "pinia";

// 通过函数来创建store
// defineStore("store的id", 配置对象)
// 配置对象：state，是一个函数，将需要由pinia维护的数据以对象的形式返回
export const useCountStore = defineStore('count', {
    state:()=> ({
        count:100,
        name:'Tom',
        gender:'男',
        age:18,
        adderss:['上海', '北京']
    }),
    // 计算属性
    getters:{
        doubule:(state) => state.count * 2
    },
    // 方法
    /**
     * @returns {number}
     *  */
    actions:{
        increment(value) {
            // console.log(value);
            this.count++
            // return this.count
        }
    }
})