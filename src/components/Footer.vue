<template>
  <footer>
    <div class="container">
      <!-- 需要用到的竖线使用全角竖线｜ -->
      <span class="footer-flot sec-desc-footer">
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44081102000040"
          target="_blank"
        >豫ICP备17023037号-1</a>
      </span>
      <span class="footer-flot sec-footer-flot">｜</span>
      <p class="link-git">
        <span class="name">
          Copyright © 2019&nbsp;
          <a target="_blank" href="#">版权所有</a>&nbsp;
        </span>
        <span class="github">
          <a target="_blank" href="https://github.com/haohaitao">
            <i type="logo-github"/>
          </a>
        </span>
      </p>
<el-backtop :right="260" :bottom="150">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      ▲
    </div>
  </el-backtop>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {}
}
</script>

<style lang='scss' scoped>
footer {
  margin-top: 16px;
  height: 120px;
  background: rgba(255, 255, 255, 0.5);

  .container {
    width: 1080px;
    max-width: 100%;
    margin: 0 auto;
    height: 100%;
    text-align: center;
    font-size: 14px;
    position: relative;
    line-height: 26px;

    .footer-flot {
      position: relative;
      color: #eee;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
    }
    .link-git {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
    }
  }
}
</style>
