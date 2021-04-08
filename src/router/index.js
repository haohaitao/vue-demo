/*
 * @Description  : 路由页面
 * @Author       : pacino
 * @Date         : 2021-04-08 16:41:13
 * @LastEditTime : 2021-04-08 17:29:24
 * @LastEditors  : pacino
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
    },
    {
        path: '/About',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
    },
];

const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes,
});
export default router;
