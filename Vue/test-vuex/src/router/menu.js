export default [
    {
        name: 'home', path: '/', component: () => import('@/views/Home')
    },
    {
        name: 'mine', path: '/mine', component: () => import('@/views/Mine')
    },
    {
        name: 'news', path: '/news', component: () => import('@/views/News')
    }
]