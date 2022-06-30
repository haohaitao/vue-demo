<template>
  <section class="section-article">
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
        <p v-html="val.excerpt"></p>
      </div>
      <div class="other-bgcover right-bgcover"></div>
      <div class="other-bgcover"></div>
      <div class="desc">
        <p class="title" :title="val.title">{{ val.title }}</p>
        <div class="desc-bottom">
          <div :class="{ 'd-detail': true, 'hidden-detail': !val.id }">
            <i class="iconfont">&#xe662;</i>
            <span style="font-size: 14px">{{ val.post_date }}</span>
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
                  backgroundPosition: `0 ${
                    -Math.floor(Math.random() * 4 + 1) * 70
                  }px`,
                }"
              ></div>
            </el-tooltip>
          </router-link>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    blogList: {
      type: Array,
    },
  },
  data() {
    return {
      random_number: null, //生成随机数来裁剪图片
      blogShowList: [
        {
          classify: "",
          title: "",
          description: "",
          id: "",
          image: "",
          date: "1970-01-01",
          pageviews: 20,
          total_comments: 20,
          classifyId: 1,
        },
        {
          classify: "",
          title: "",
          description: "",
          id: "",
          image: "",
          date: "1970-01-01",
          pageviews: 20,
          total_comments: 20,
          classifyId: 2,
        },
        {
          classify: "",
          title: "",
          description: "",
          id: "",
          image: "",
          date: "1970-01-01",
          pageviews: 20,
          total_comments: 20,
          classifyId: 3,
        },
      ], //保存拿到的文章数据
    };
  },
  filters: {
    setLink(id, link) {
      return id ? link : "";
    },
  },
  created() {
    if (this.blogList.length > 0) {
      this.blogShowList = this.blogList;
    }
  },
  computed: {},
  // 监听blogList数组变化
  watch: {
    blogList(newVal) {
      this.blogShowList = newVal;
    },
  },
  mounted() {},
  methods: {
    jump(val) {
      this.$router.push({ name: "blog", params: { id: val.id } });
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
section {
  animation: fadeIn 0.6s linear;
  max-width: 960px;
  margin: 0 auto;
  box-sizing: border-box;

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
      background: url("../assets/imgs/tag.png");
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
          background: url(../assets/imgs/bg-ico.png) no-repeat;
          height: 37px;
          width: 36px;
          float: right;
          border-radius: 50%;
          background-size: cover;
        }
      }
    }
  }
}
</style>
