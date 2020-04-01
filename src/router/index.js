import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
      meta: { title: '首页-个人主页' }
    },
    {
      path: '/page:pageIndex',
      component: () => import('@/views/Home'),
      name: 'homePage',
      meta: { title: '首页-个人主页' }
    },
    {
      path: '/tag',
      component: () => import('@/views/Tags'),
      name: 'tag',
      meta: { title: '标签页-个人主页' }
    },
    {
      path: '/categorie',
      component: () => import('@/views/Categories'),
      name: 'categorie',
      meta: { title: '分类页-个人主页' }
    },
    {
      path: '/article/:id',
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
      path: '/everyday',
      component: () => import('@/views/Everyday'),
      name: 'everyday',
      meta: {title: '每日一图-个人主页'},
    },
    {
      path: '/online_chat',
      component: () => import('@/views/Chat'),
      name: 'chat',
      meta: {title: '在线聊天室-个人主页'},
    },
    {
      path: '/statistics',
      component: () => import('@/views/Statistics'),
      name: 'statistics',
      meta: {title: '统计-个人主页'},
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
