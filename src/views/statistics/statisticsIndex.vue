<!--
 * @Description: 
 * @Author: pacino
 * @Date: 2022-06-29 17:05:38
 * @LastEditTime: 2022-06-30 13:53:59
 * @LastEditors: pacino
-->
<template>
  <div class="wrapper animated bounceInDown">
    <div id="pieId" :style="{ maxWidth: '1100px', height: '357px' }"></div>
    <div id="barId" :style="{ maxWidth: '1100px', height: '357px' }"></div>
    <div id="comment" :style="{ maxWidth: '1100px', height: '557px' }"></div>
  </div>
</template>

<script>
import * as http from "@/common/http";
import * as draw from "@/common/drawing.js";
export default {
  data() {
    return {
      count: [], //存每种分类的文章数目
      name: [], //存每种分类的名字
      commentName: [], //留言的文章名字
      commentTotal: [], //文章留言的数量
    };
  },
  methods: {},
  mounted() {
    //移动端——关闭菜单
    this.$store.commit("change_menu", false);

    //分类内文章统计
    let pieArr = []; //存处理过的数据
    http.get("/api/wp-json/wp/v2/categories", "", "").then((res) => {
      res.data.forEach((ele) => {
        this.count.push(ele.count); //此分类的数目
        this.name.push(ele.name); //此分类的名字
        let pieValue = ele.count;
        let pieName = ele.name;
        pieArr.push({ value: pieValue, name: pieName });
      });
      draw.drawLine(
        this.count,
        this.name,
        "pieId",
        "pie",
        "分类统计",
        false,
        pieArr
      );
      draw.drawLine(this.count, this.name, "barId", "bar", "分类统计", true);
    });
    //文章内留言统计
    setTimeout(() => {
      http.get("/api/wp-json/wp/v2/posts?per_page=100", "", "").then((res) => {
        res.data.forEach((ele) => {
          this.commentName.push(ele.title.rendered);
          this.commentTotal.push(ele.total_comments);
        });
        draw.drawComment(this.commentTotal, this.commentName, "comment");
      });
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 100px auto auto;
  max-width: 900px;
  .content {
    text-align: left;
    line-height: 30px;
    >>> p:nth-child(1) {
      text-align: center;
    }
  }
}
</style>
