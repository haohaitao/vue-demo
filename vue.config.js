/*
 * @Description:
 * @Author: pacino
 * @Date: 2022-06-30 11:09:04
 * @LastEditTime: 2022-06-30 22:52:03
 * @LastEditors: pacino
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  devServer: {
    host: "localhost",
    port: "8080",
    // https:false,
    open: true,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      //配置跨域
      "/api": {
        target: "https://www.haoht123.com",
        ws: true,
        changeOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": "", //请求的时候使用这个api就可以
        },
      },
    },
  },
});
