
export const routes = [
    { name:"Home", path: "/", component: () => import('@/views/Home') },
    { name:"About", path: "/about", component: () => import('@/views/About') },
    { name:"Message", path: "/message", component: () => import('@/views/Message') },
    { name:"Project", path: "/project", component: () => import('@/views/Project') },
    { name:"Blog", path: "/title", component: () => import('@/views/Blog') },
    { name:"Category", path: "/title/cate/:id", component: () => import('@/views/Blog') },
    {name:'BlogDetail', path: '/title/:id', component: ()=> import('@/views/Blog/components/BlogDetail.vue')}
]