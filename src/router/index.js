import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
      meta: { title: '首页-个人主页' }
    },
    {
      path: '/page/:pageIndex',
      component: () => import('@/views/Home'),
      name: 'homePage',
      meta: { title: '首页-个人主页' }
    },
    {
      path: '/tag',
      // path: '/tag/:tagId(\\d+)',
      component: () => import('@/views/Tags'),
      name: 'tag',
      meta: { title: '标签页-个人主页' }
    },
    {
      path: '/article',
      component: () => import('@/views/Blog'),
      name: 'blog',
      meta: {title: '文章详情-个人主页'},
    },
    {
      path: '/about',
      component: () => import('@/views/About'),
      name: 'about',
      meta: {title: '关于-个人主页'},
    },
    {
      path: '*',
      component: () => import('@/components/NotFound'),
      name: 'NotFound',
      meta: { title: '404 - 找不到页面' }
    }
  ],
  //路由变化回到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
