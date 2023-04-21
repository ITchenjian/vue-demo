const router = [{
    path: '/',
    redirect: '/index'
},{
    path: '/index',
    component: () => import('./App.vue'),
    children: [{
        path: 'other',
        component: () => import('./view/other.vue'),
    }]
},{
    path: '/other',
    component: () => import('./view/other.vue')
}]

export default router