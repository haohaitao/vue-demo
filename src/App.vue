<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{
    margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
html{
      cursor: url("./assets/pic/pointer.cur"),default;
}
body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: #515a6e;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
a {
    cursor: url("./assets/pic/cursor.cur"),pointer !important;
    color:#666;
    text-decoration: none;
}
a:hover{
    color: #eb5055 !important;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}
button{
  cursor: url("./assets/pic/cursor.cur"),pointer !important;
}
/*分页页码*/
.el-pager li{
  cursor: url("./assets/pic/cursor.cur"),pointer !important;
}
/*返回顶部*/
.el-backtop{
  cursor: url("./assets/pic/cursor.cur"),pointer !important;
}
/* 导航菜单选择 */
.el-dropdown-menu__item{
  cursor: url("./assets/pic/cursor.cur"),pointer !important;
}
</style>
