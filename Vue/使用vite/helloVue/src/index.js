import {createApp} from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
// 创建根组件
// const App = {
//     data(){
//         return {
//             message: 'Vue'
//         }
//     },
//     template:"<h1>{{message}}</h1>"
// }
// 创建应用并挂载
// mount()的返回值是根组件的实例
createApp(App).mount('#app')