import Vue from 'vue'
import App from './App.vue'
import './common/common.css'
import { router } from '@/router/index.js'
import Icon from '@/components/Icon'
import { showMessage } from '@/utils'
import '@/mock'
import '@/api/banner.js'

Vue.component('Icon', Icon)
Vue.prototype.$showMessage = showMessage

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
