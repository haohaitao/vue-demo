<!--
 * @Description: 
 * @Author: pacino
 * @Date: 2022-06-29 17:05:38
 * @LastEditTime: 2022-06-30 14:58:09
 * @LastEditors: pacino
-->
<template>
  <footer>
    <div class="container">
      <!-- 需要用到的竖线使用全角竖线｜ -->
      <div>
        <a href="http://www.beian.miit.gov.cn/" target="_blank"
          >豫ICP备17023037号-1</a
        >
      </div>
      <div class="link-git">
        <span class="name">
          Copyright © 2019-2022&nbsp;
          <a target="_blank" href="#">版权所有</a>&nbsp;
        </span>
        <span class="github">
          <a target="_blank" href="https://github.com/haohaitao">
            <i type="logo-github" />
          </a>
        </span>
        <span class="github">
          <a target="_blank" href="https://github.com/haohaitao">
            <i class="iconfont">&#xe732;</i>
          </a>
        </span>
      </div>
      <!-- pc端显示 -->
      <el-backtop :right="260" :bottom="150" class="desktop_goback">
        <div
          style="
             {
              height: 100%;
              width: 100%;
              background-color: #f2f5f6;
              box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
              text-align: center;
              line-height: 40px;
              color: #1989fa;
            }
          "
        >
          ▲
        </div>
      </el-backtop>
      <!-- 移动端显示 -->
      <el-backtop :bottom="88" class="Mobile_goback">
        <div>返回顶部</div>
      </el-backtop>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    if (window.console && window.console.log) {
      console.log(
        "%cHello world! %c Copyright © 2022",
        " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2em",
        "font-size:12px;color:#999999;"
      );
    }
  },
  components: {},
};
</script>

<style lang="scss" scoped>
footer {
  padding-top: 50px;
  height: 120px;
  background: rgba(255, 255, 255, 0.5);
  a {
    color: #666;
  }
  .container {
    width: 1080px;
    max-width: 100%;
    margin: 0 auto;
    height: 100%;
    text-align: center;
    font-size: 14px;
    position: relative;
    line-height: 26px;
    padding-bottom: 30px;

    .link-git {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
    }
  }
}
</style>
