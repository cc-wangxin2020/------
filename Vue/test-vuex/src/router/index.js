import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/Login')
    },
    {
        name: 'home',
        path: '/',
        component: () => import('@/views/Home'),
        meta: { auth: true }
    },
    {
        name: 'mine',
        path: '/mine',
        component: () => import('@/views/Mine'),
        meta: { auth: true }
    },
    {
        name: 'news',
        path: '/news',
        component: () => import('@/views/News'),
        meta: { auth: true }
    },
    {
        name: 'loading',
        path: '/loading',
        component: () => import('@/views/Loading'),
        // meta: { auth: true }
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        const status = store.getters['loginUser/getStatus']
        if (status === 'loading') {
            next({
                path: '/loading',
                query: {
                    returnUrl: to.path
                }
            })
        } else if (status === 'login') {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})
window.routes = routes
export default router