import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
// import layout from '@/layout/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/Home")
  },
  {
    path: '/user/detail',
    name: 'user_detail',
    meta:{
      requireLogin:true
    },
    component: () => import("@/views/User/detail.vue")
  },
  {
    path: '/login',
    name: 'login',
    meta:{
      requireLogin:false
    },
    component: () => import("@/views/Login/login.vue")
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  // store.getters('isLogin')
  if (to.meta.requireLogin) {
    //需要检测登录
    if (token) {
      next();
    } else {
      console.log('前往登录...')
      next({
        path: '/login'
      });
    }
  } else {
 
    next();
  }
})

export default router
