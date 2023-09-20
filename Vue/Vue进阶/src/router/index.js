import {createRouter, createWebHashHistory} from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/Home.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/about',
            name:'about',
            component:About
        },
        {
            path:'/home',
            name:'home',
            component:Home
        }
    ]
})
export default router;