<template>
  <article
    class="detail-article"
    v-loading="loading"
    v-loading.fullscreen.lock="true"
  >
    <div class="art-header">
      <h1>{{ blog.title }}</h1>
      <div class="header-info">
        <i class="el-icon-table-lamp" />
        <router-link :to="`/categorie?categorieId=${blog.categories}`">{{
          blog.category_name
        }}</router-link>
        <i class="el-icon-date" />
        {{ blog.post_date }}
        <i class="el-icon-view" />
        {{ blog.pageviews }}
        <i class="el-icon-s-comment" />
        <span>{{ blog.total_comments }}</span>
      </div>
      <div class="header-tag">
        <el-tag v-for="item in tagData" :key="item.id" @click="jump(item)">{{
          item.name
        }}</el-tag>
      </div>
      <div class="tag-time">
        <i class="el-icon-timer" />
        {{ blog.date ? blog.date.split("T")["1"] : "1970-01-01" }}
      </div>
    </div>
    <div id="blog" v-html="blog.content"></div>
    <div class="content-footer">
      <p>
        本文由
        <router-link to="/">{{
          blog.author === 1 ? "一只" : "博主"
        }}</router-link
        >创作，转载请注明
      </p>
      <p>
        最后编辑时间：{{
          (blog.modified ? blog.modified.split("T")["0"] : "1970-01-01") +
            " " +
            (blog.modified ? blog.modified.split("T")["1"] : "00:00:00")
        }}
      </p>
      <div id="vcomments"></div>
    </div>
    <el-button @click="drawerChange" type="primary" style="margin-left: 16px"
      >更多相同文章</el-button
    >
    <el-drawer
      title="相似文章"
      direction="ltr"
      :with-header="false"
      :visible.sync="drawerState"
    >
      <h1 class="drawerTitle">相似文章</h1>
      <div v-for="item in related_posts" :key="item.ID" class="contentList">
        <el-link
          style="border: none"
          v-if="item.ID !== '1228'"
          @click="drawerPost(item)"
          >{{ item.post_title }}</el-link
        >
        <el-link
          style="border: none"
          v-if="item.ID === '1228'"
          disabled
          @click="drawerPost(item)"
          >{{ item.post_title }}</el-link
        >
      </div>
    </el-drawer>
  </article>
</template>

<script>
import * as http from "@/common/http";
// Use import
import Valine from "valine";
export default {
  name: "blogIndex",
  beforeRouteUpdate(to, from, next) {
    if (to.params.id != from.params.id) {
      setTimeout(() => {
        this.toTop();
      }, 1500);
      next();
    }
  },
  data() {
    return {
      blog: [],
      tagData: [], //存文章标签
      drawer: false,
      related_posts: [], //存相似文章
      drawerState: false,
      loading: true,
    };
  },
  created() {
    this.getBlogDetail();
  },
  mounted() {
    //移动端——关闭菜单
    this.$store.commit("change_menu", false);

    new Valine({
      el: "#vcomments",
      appId: "ukolQhihPfilr7h6T7LkfeTm-gzGzoHsz",
      appKey: "XUQYTndxPIoWfXbJmPyLE6wc",
      notify: true,
      verify: true,
      avatar: "mp",
      placeholder: "ヾﾉ≧∀≦)o来啊，快活啊!",
      recordIP: true,
      path: this.$route.path,
    });
  },
  methods: {
    //滚到顶部
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 100;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    //打开抽屉
    drawerChange() {
      this.drawerState = true;
    },
    //抽屉里的链接
    drawerPost(item) {
      this.$store.commit("article", item.ID);
      this.$router.push({ name: "blog", params: { id: item.ID } });
    },
    //跳转到标签分类页
    jump(item) {
      this.$router.push({ path: "/tag", query: { tagId: item.id } });
    },
    //获取页面详情
    getBlogDetail() {
      let id = this.$route.params.id;
      http.get("/api/wp-json/wp/v2/posts/" + id, "", "").then((res) => {
        if (res.status === 200) {
          res.data.title = res.data.title.rendered;
          res.data.content = res.data.content.rendered;
          res.data.categories = res.data.categories["0"];
          this.blog = res.data;
          this.loading = false;
          this.drawerState = false;
          if (res.data.related_posts?.length > 0) {
            this.related_posts = res.data.related_posts;
          } else {
            this.related_posts = [
              {
                ID: "1228",
                post_title: "暂时没有相似文章哦！",
              },
            ];
          }
          if (res.data.tags.length > 0) {
            (this.tagData = []), //如果tags有内容，清空tagData
              res.data.tags.map((item) => {
                http
                  .get("/api/wp-json/wp/v2/tags/" + item, "", "")
                  .then((res) => {
                    this.tagData.push(res.data);
                  });
              });
          }
        }
      });
    },
  },
  computed: {
    getCateId() {
      return this.$store.state.articleId;
    },
  },
  //监听计算属性返回的值
  watch: {
    getCateId() {
      this.getBlogDetail();
      new Valine({
        el: "#vcomments",
        appId: "ukolQhihPfilr7h6T7LkfeTm-gzGzoHsz",
        appKey: "XUQYTndxPIoWfXbJmPyLE6wc",
        notify: true,
        verify: true,
        avatar: "mp",
        placeholder: "ヾﾉ≧∀≦)o来啊，快活啊!",
        recordIP: true,
        path: this.$route.path,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-article {
  min-height: 600px;
}
article {
  animation: fadeIn 0.6s linear;
  max-width: 700px;
  padding: 0 25px 30px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  text-align: left;
  font-size: 15px;
  line-height: 32px;

  .art-header {
    padding-top: 100px;
    padding-bottom: 12px;
    border-bottom: 1px dashed #b7b7b7;
    position: relative;

    h1 {
      font-size: 22px;
      color: #222;
      font-weight: 400;
      line-height: 1.8;
    }

    .header-info {
      margin: 12px 0px 0;
      i {
        &:not(:first-child) {
          margin-left: 12px;
        }

        font-size: 14px;
        margin-top: -2px;
      }
    }
    .header-tag {
      width: 85%;
      margin-top: 14px;
      height: 33px;
      span {
        margin-right: 12px;
      }
    }

    .tag-time {
      position: absolute;
      right: 0;
      bottom: 12px;
      line-height: 14px;

      i {
        font-size: 14px;
        margin-top: -2px;
      }
    }
  }
  .content-footer {
    border-top: 1px solid #e0e0e0;
    padding-top: 26px;
    color: #24292e;
    font-size: 14px;
    text-align: center;

    a {
      border-bottom: 1px solid #ccc;

      &:hover {
        border-bottom: 1px solid #eb5055;
      }
    }
  }
}
.drawerTitle {
  padding: 20px 0 20px 30px;
}
.contentList {
  padding: 0 0 20px 30px;
}
.contentList > a:hover {
  color: #66b1ff !important;
}
</style>
