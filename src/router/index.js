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
      name: 'Home',
      component: () => import('@/views/Home'),
      meta: { title: '首页-个人主页' }
    },
    {
      path: '/page/:pageIndex(\\d+)',
      component: () => import('@/views/Home'),
      name: 'homePage',
      meta: { title: '首页-个人主页' }
    },
    {
      path: '/tag/:tagId(\\d+)',
      component: () => import('@/views/Tags'),
      name: 'tag',
      meta: { title: '标签页-个人主页' }
    },
    {
      path: '/article/:id(\\d+)',
      component: () => import('@/views/Blog'),
      name: 'blog',
      meta: {title: '文章详情-个人主页'},
    },
    {
      path: '*',
      component: () => import('@/components/NotFound'),
      name: 'NotFound',
      meta: { title: '404 - 找不到页面' }
    }
  ]
})
