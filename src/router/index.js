/*
 * @Description:
 * @Author: pacino
 * @Date: 2022-06-29 17:05:38
 * @LastEditTime: 2022-06-30 13:43:36
 * @LastEditors: pacino
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/homeIndex"),
      meta: { title: "首页-个人主页" },
    },
    {
      path: "/page:pageIndex",
      component: () => import("@/views/home/homeIndex"),
      name: "homePage",
      meta: { title: "首页-个人主页" },
    },
    {
      path: "/tag",
      component: () => import("@/views/tags/tagsIndex"),
      name: "tag",
      meta: { title: "标签页-个人主页" },
    },
    {
      path: "/categories",
      component: () => import("@/views/categories/categoriesIndex"),
      name: "categories",
      meta: { title: "分类页-个人主页" },
    },
    {
      path: "/article/:id",
      component: () => import("@/views/blog/blogIndex"),
      name: "blog",
      meta: { title: "文章详情-个人主页" },
    },
    {
      path: "/about",
      component: () => import("@/views/about/aboutIndex"),
      name: "about",
      meta: { title: "关于-个人主页" },
    },
    {
      path: "/everyday",
      component: () => import("@/views/everyday/everydayIndex"),
      name: "everyday",
      meta: { title: "每日一图-个人主页" },
    },
    {
      path: "/online_chat",
      component: () => import("@/views/chat/chatIndex"),
      name: "chat",
      meta: { title: "在线聊天室-个人主页" },
    },
    {
      path: "/statistics",
      component: () => import("@/views/statistics/statisticsIndex"),
      name: "statistics",
      meta: { title: "统计-个人主页" },
    },
    {
      path: "*",
      component: () => import("@/components/NotFound"),
      name: "NotFound",
      meta: { title: "404 - 找不到页面" },
    },
  ],
  //路由变化回到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
