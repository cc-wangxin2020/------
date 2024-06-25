import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './style/common.less'
import './mock'

Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue({})

store.dispatch('loginUser/isMe')

const vm = new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

// import { isMe, login } from './api/login'
// login().then(res => {
//   console.log(res);
// })

// isMe().then(res => {
//   console.log(res);
// })
