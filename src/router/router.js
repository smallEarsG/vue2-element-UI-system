import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import user from './modules/user'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/default',
      component: () => import('../views/Index/index.vue'),
      children:[{
        path: 'default',
        name: 'default',
        component: () => import('../views/default/index.vue')
      },
      user
    ]
    },
    { path: "*", redirect: "/404", name: "notMatch", hidden: true },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/common/404.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue'),
    },
    
  ]
})

const WhiteList = [
  '/404'
]
//  路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否有权限
  const token =   Cookies.get("token") 
  if (to.path==="/login") {
    token ? next(false):next();
  } else {
    const index = WhiteList.findIndex( i => i === to.path)
    if(!token && index === -1){
      next('/login');
    }else{
      next();
    }
  }
  
});

export default  router