/*
 * @Author: your name
 * @Date: 2019-12-12 23:44:09
 * @LastEditTime: 2019-12-15 21:33:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-blog\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login/Login'
import Home from '@/views/Home'

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
      meta: { title: '个人主页' }
    },
    {
      path: '/page/:pageIndex(\\d+)',
      component: () => import('@/views/Home'),
      name: 'homePage',
      meta: { title: '个人主页' }
    },
    {
      path: '*',
      component: () => import('@/components/NotFound'),
      name: 'NotFound',
      meta: { title: '404 - 找不到页面' }
    }
  ]
})
