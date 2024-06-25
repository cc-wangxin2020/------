
export const routes = [
    { name: "Home", path: "/", component: () => import('@/views/Home'), meta: { title: 'home' } },
    { name: "About", path: "/about", component: () => import('@/views/About'), meta: { title: 'about' } },
    { name: "Message", path: "/message", component: () => import('@/views/Message'), meta: { title: 'message' } },
    { name: "Project", path: "/project", component: () => import('@/views/Project'), meta: { title: 'project' } },
    { name: "Blog", path: "/title", component: () => import('@/views/Blog'), meta: { title: 'blog' } },
    { name: "Category", path: "/title/cate/:id", component: () => import('@/views/Blog'), meta: { title: 'blog' } },
    { name: 'BlogDetail', path: '/title/:id', component: () => import('@/views/Blog/Detail.vue'), meta: { title: 'detail' } }
]