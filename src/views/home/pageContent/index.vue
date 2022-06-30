<template>
  <main>
    <p>今天是{{ time }}，欢迎来自【{{ city }}】的朋友！</p>
    <SectionArticle :blogList="blogList"></SectionArticle>
    <div style="clear: both; margin: 30px 0">
      <el-pagination
        v-if="total > 15"
        small
        layout="prev, pager, next"
        :page-size="15"
        @current-change="handleCurrentChange"
        :total="total"
      >
      </el-pagination>
    </div>
  </main>
</template>

<script>
import * as http from "@/common/http";
export default {
  name: "pageContent",
  data() {
    return {
      blogList: [], //存接口返回的数据
      total: null, //返回数据的总条数
      page: null, //默认页码
      city: "获取中..", //定位城市
      time: "", //时间
    };
  },
  methods: {
    getList() {
      let params = {
        per_page: 15,
        page: this.page,
      };
      http.get("api/wp-json/wp/v2/posts", params, "").then((res) => {
        res.data.forEach((item) => {
          item.title = item.title.rendered;
          item.excerpt = item.excerpt.rendered;
        });
        this.blogList = res.data;
        this.total = parseInt(res.headers["x-wp-total"]);
      });
    },
    //页码改变触发事件
    handleCurrentChange(page) {
      this.page = page;
      this.getList();
      if (page === 1) {
        this.$router.push({ name: "home" });
      } else {
        this.$router.push({ name: "homePage", params: { pageIndex: page } });
      }
    },
    showCityInfo() {
      //实例化城市查询类
      let citySearch = new AMap.CitySearch();
      //自动获取用户IP，返回当前城市
      citySearch.getLocalCity((status, result) => {
        if (status === "complete" && result.info === "OK") {
          if (result && result.city && result.bounds) {
            let cityInfo = result.city;
            this.city = cityInfo;
          }
        } else {
          sessionStorage.setItem("err", result.info);
        }
      });
    },
  },
  created() {
    this.showCityInfo(); //获取城市
    let timeTemp = new Date();
    let currentTime = http.timestampToTimes(timeTemp);
    this.time = currentTime;
    let data = {
      per_page: 15,
    };
    http.get("api/wp-json/wp/v2/posts", data, "").then((res) => {
      res.data.forEach((item) => {
        item.title = item.title.rendered;
        item.excerpt = item.excerpt.rendered;
      });
      this.blogList = res.data;
      this.total = parseInt(res.headers["x-wp-total"]);
    });
  },
  components: {
    SectionArticle: () => import("@/components/SectionArticle"),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
main {
  max-width: 1080px;
  margin: 90px auto 0;
}
</style>
