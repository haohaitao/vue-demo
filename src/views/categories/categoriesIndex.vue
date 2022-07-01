<template>
  <div>
    <div class="wrapper">
      <p class="tag_title">『{{ title_content }}』分类的相关文章</p>
    </div>
    <section ref="blogSection" class="section-article" v-loading="loading">
      <article v-for="(val, index) in blogShowList" :key="index">
        <div class="bg-container">
          <div
            class="bg-img"
            :style="
              val.id
                | setLink({
                  background: `url(${val.content_first_image}) 100% 100% / 100% 100%`,
                })
            "
          ></div>
        </div>
        <div class="bg-cover" @click="jump(val)">
          <p v-html="val.excerpt['rendered']"></p>
        </div>
        <div class="other-bgcover right-bgcover"></div>
        <div class="other-bgcover"></div>
        <div class="desc">
          <p class="title" :title="val.title['rendered']">
            {{ val.title["rendered"] }}
          </p>
          <div class="desc-bottom">
            <div :class="{ 'd-detail': true, 'hidden-detail': !val.id }">
              <i class="iconfont">&#xe608;</i>
              <span style="font-size: 14px">{{
                val.date ? val.date.split("T")[0] : ""
              }}</span>
              <i class="iconfont">&#xe637;</i>
              <span style="font-size: 14px">{{ val.pageviews }}</span>
              <i class="iconfont">&#xe607;</i>
              <span style="font-size: 14px">{{ val.total_comments }}</span>
            </div>
            <router-link to="/">
              <el-tooltip
                :content="val.category_name || '个人博客'"
                class="item"
                effect="dark"
                placement="top-end"
              >
                <div
                  class="item-icon"
                  :style="{
                    backgroundPosition: `0 ${-Math.floor(
                      Math.random() * 4 + 1
                    ) * 70}px`,
                  }"
                ></div>
              </el-tooltip>
            </router-link>
          </div>
        </div>
      </article>
      <div class="clear"></div>
    </section>
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
  </div>
</template>

<script>
import * as http from "@/common/http";
export default {
  name: "categoriesIndex",
  data() {
    return {
      blogShowList: [],
      total: null, //结果总数
      cateId: null, //分类id
      page: 1, //当前第几页
      loading: true,
      title_content: "loading...", //上个页面点击的标签
    };
  },
  methods: {
    //跳转文章详情页
    jump(val) {
      this.$router.push({ name: "blog", params: { id: val.id } });
    },
    //页码改变触发事件
    handleCurrentChange(page) {
      this.page = page;
      this.getList();
    },
    getList() {
      let id = this.$route.query.categoriesId;
      this.cateId = id;
      let params = {
        per_page: 15,
        page: this.page,
        categorie: this.cateId,
      };
      this.loading = true;
      http.get("api/wp-json/wp/v2/posts", params, "").then((res) => {
        if (id === "21") {
          this.title_content = "JavaScript";
        } else if (id === "221") {
          this.title_content = "PHP";
        }
        this.blogShowList = [];
        this.blogShowList = res.data;
        this.total = parseInt(res.headers["x-wp-total"]);
        this.loading = false;
      });
    },
  },
  mounted() {
    //移动端——关闭菜单
    this.$store.commit("change_menu", false);

    let id = this.$route.query.categoriesId;
    this.cateId = id;
    let params = {
      per_page: 15,
      categories: this.cateId,
    };
    http.get("api/wp-json/wp/v2/posts?", params, "").then((res) => {
      http
        .get("api/wp-json/wp/v2/categories/" + this.cateId, "", "")
        .then((res) => {
          this.title_content = res.data.name;
        });
      this.blogShowList = res.data;
      this.total = parseInt(res.headers["x-wp-total"]);
      this.loading = false;
    });
  },
  computed: {
    getCateId() {
      return this.$store.state.cateId;
    },
  },
  //监听计算属性返回的值
  watch: {
    getCateId(val) {
      this.getList();
      //移动端——关闭菜单
      this.$store.commit("change_menu", false);
    },
  },
  filters: {
    setLink(id, link) {
      return id ? link : "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrapper {
  margin-top: 70px;
  height: 150px;
  background: url(../../assets/imgs/category.jpg) no-repeat;
  background-size: cover;
  .tag_title {
    font-weight: 400;
    font-size: 35px;
    color: rgba(255, 255, 255, 0.54);
    line-height: 150px;
    animation: fadeIn 0.6s linear;
  }
}
section {
  animation: fadeIn 0.6s linear;
  max-width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  min-height: 600px;
  article {
    width: 280px;
    height: 340px;
    float: left;
    position: relative;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    margin: 20px;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.08);
    overflow: hidden;
    &:hover {
      box-shadow: 1px 2px 12px 1px rgba(0, 0, 0, 0.15);
      background: #fff;

      .bg-img {
        filter: blur(3px);
        transform: scale(1.1);
      }

      .bg-cover {
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.5s;
        p {
          transition: 0.5s;
          margin-top: 0px;
          opacity: 1;
        }
      }
    }

    .top-icon {
      width: 46px;
      opacity: 0.86;
      height: 46px;
      position: absolute;
      left: -9px;
      top: -4px;
      text-align: center;
      line-height: 44px;
      color: #fff;
      background: url("../../assets/imgs/tag.png");
      background-size: cover;

      i {
        font-size: 19px;
      }
    }

    .bg-container {
      &::before {
        content: "Loading...";
        position: absolute;
        border-radius: 5px 5px 0 0;
        width: 100%;
        left: 0;
        background-color: rgba(169, 169, 169, 0.75);
        text-align: center;
        line-height: 230px;
        font-size: 26px;
        color: #333333;
        z-index: -1;
      }

      &::after {
        content: "";
        position: absolute;
        border-radius: 5px 5px 0 0;
        width: 100%;
        left: 0;
        background-color: rgba(255, 255, 255, 0);
        line-height: 230px;
        z-index: -1;
      }

      .bg-img {
        transition: all 0.5s ease;
        height: 230px;
        border-radius: 5px 5px 0 0;
      }
    }

    .bg-cover {
      position: absolute;
      top: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
      padding: 40px 28px;
      box-sizing: border-box;

      p {
        font-size: 14px;
        margin: 0;
        margin-top: 26px;
        padding: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        opacity: 0;
        line-height: 26px;
        color: #fff;
      }
    }

    .other-bgcover {
      position: absolute;
      z-index: 0;
      right: 0;
      bottom: 1px;
      left: 0;
      width: 110%;
      min-height: 100px;
      transform: rotate(5deg) translate(-10px, -20px);
      background-color: #fff;
    }
    .right-bgcover {
      transform: rotate(-10deg) translate(10px, -30px);
      opacity: 0.7;
      background-color: rgba(0, 0, 0, 0.5) !important;
    }

    .desc {
      width: 100%;
      height: 110px;
      background: #fff;
      position: relative;
      padding: 7px 15px 10px;
      box-sizing: border-box;

      .title {
        color: #000;
        font-size: 16px;
        display: -webkit-inline-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        &:hover {
          color: #ff8b18;
        }
      }

      .desc-bottom {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        padding: 0 15px 10px;
        text-align: right;

        .d-detail {
          position: absolute;
          bottom: 10px;
          padding: 0px 20px;

          i {
            font-size: 14px;
            margin-top: -2px;

            &:not(:first-child) {
              margin-left: 12px;
            }
          }
        }
        .hidden-detail {
          span {
            visibility: hidden;
          }
        }

        .item-icon {
          background: url(../../assets/imgs/bg-ico.png) no-repeat;
          height: 37px;
          width: 36px;
          float: right;
          border-radius: 50%;
          background-size: cover;
        }
      }
    }
  }
  .clear {
    clear: both;
  }
}
</style>
