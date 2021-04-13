/*
 * @Description  : 路由页面
 * @Author       : pacino
 * @Date         : 2021-04-08 16:41:13
 * @LastEditTime : 2021-04-13 10:49:14
 * @LastEditors  : pacino
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
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
