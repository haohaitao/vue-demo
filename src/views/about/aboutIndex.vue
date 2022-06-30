<!--
 * @Description: 
 * @Author: pacino
 * @Date: 2022-06-29 17:05:38
 * @LastEditTime: 2022-06-30 13:06:31
 * @LastEditors: pacino
-->
<template>
  <div class="wrapper animated bounceInDown">
    <div class="content">
      <p>
        <img
          style="margin: 0 auto"
          src="https://www.haoht123.com/wp-content/uploads/2019/04/about20190403.jpg"
          alt="关于"
          width="690"
          height="388"
          srcset="
            https://www.haoht123.com/wp-content/uploads/2019/04/about20190403.jpg         690w,
            https://www.haoht123.com/wp-content/uploads/2019/04/about20190403-300x169.jpg 300w
          "
          sizes="(max-width: 690px) 100vw, 690px"
        />
      </p>
      <h2>关于本站</h2>
      <p>使用vue全家桶写的前端页面</p>
      <p>
        主要用到的技术：vue-cli + vue2 + vuex + vue-router + axios + element-ui
      </p>
      <p>代码已开源，页脚有github的入口，欢迎交流，共同学习</p>
      <h2>关于博主</h2>
      <p>曾梦想仗剑走天涯，看一看世界的繁华，后来工作太忙没去。</p>
      <h2>送给自己</h2>
      <p>你好哇，hht。</p>
      <p>虽然生活总是不尽人意，但是活着就有希望！</p>
      <p>困难像弹簧，你弱它就强！</p>
      <h2>联系方式</h2>
      <p>Email：haohaitao28#163.com  #换@</p>
      <p>微信：hht28_</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    //移动端——关闭菜单
    this.$store.commit("change_menu", false);
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 100px auto auto;
  max-width: 900px;
  padding: 0 15px;
  .content {
    text-align: left;
    line-height: 30px;
    >>> p:nth-child(1) {
      text-align: center;
    }
  }
}
</style>
