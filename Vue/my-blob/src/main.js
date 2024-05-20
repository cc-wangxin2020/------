import Vue from 'vue'
import App from './App.vue'
import './common/common.css'
import { router } from '@/router/index.js'
import Icon from '@/components/Icon'
import '@/mock'
import '@/api/banner.js'

Vue.component('Icon', Icon)

import { showMessage } from '@/utils'
Vue.prototype.$showMessage = showMessage

import Loading from '@/directives/Loading'
Vue.directive('loading', Loading)

const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
console.log(vm);
// import { getBlog, getBlogTypes } from './api/blog'
// getBlog().then(res => {
//   console.log(res);
// })
// getBlogTypes().then(res => {
//   console.log(res);
// })
