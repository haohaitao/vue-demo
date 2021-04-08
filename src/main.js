/*
 * @Description  : 入口文件
 * @Author       : pacino
 * @Date         : 2021-04-08 16:34:29
 * @LastEditTime : 2021-04-08 17:30:09
 * @LastEditors  : pacino
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/base.scss';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
