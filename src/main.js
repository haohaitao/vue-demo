/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-09-09 15:46:28
 * @LastEditTime: 2022-06-30 14:29:35
 * @LastEditors: pacino
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import element from "./element/index";
import "./assets/font/iconfont.css";
import "./assets/animate.css";
import "./assets/highlight.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import store from "./store";

Vue.use(element);
Vue.config.productionTip = false;

// 加载全局组件
import components from "./components";
// 注册全局组件
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});

// 导航守卫，显示设置的网页title
router.afterEach((to) => {
  let title = to.meta.title;
  document.title = title;
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  render: (h) => h(App),
  template: "<App/>",
});
