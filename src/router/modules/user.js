export default {
    path:'user',
    // redirect:'/user/account',
    component: () => import('../../views/user/account.vue'),
    // children:[{
    //     path:"account",
    //      component: () => import('../../views/user/account.vue'),
    //     name:'我的账号',
    // }]
}