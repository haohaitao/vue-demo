<template>
  <header class="head-page">
    <div class="container">
      <div class="home-left">
        <div class="page-name">
          <i class="el-icon-cherry" />
          <router-link to="/">Hao</router-link>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div
        class="nav-coll-menu"
        ref="collMenuNavFar"
        :class="{ 'nav-coll-menu-padd': isVisibleNavFar }"
      >
        <span
          class="icon-menu cross"
          :class="{ 'icon-menu-close': isVisibleNavFar }"
        >
          <span class="middle"></span>
        </span>
        <span class="click-fun" @click="closeCollMenu"></span>
        <ul class="nav-far" :class="{ 'visible-nav-far': isVisibleNavFar }">
          <router-link to="/">
            <li>首页</li>
          </router-link>
          <li class="sub-item">
            分类
            <ul class="nav-child">
              <li @click="selectItem('21')">JavaScript</li>
              <li @click="selectItem('221')">PHP</li>
            </ul>
          </li>
          <!-- 可使用命名路由 -->
          <router-link to="/everyday">
            <li><i type="ios-link" style="font-weight: bold" />每日一图</li>
          </router-link>
          <router-link to="/online_chat">
            <li><i type="ios-link" style="font-weight: bold" />聊天室</li>
          </router-link>
          <router-link to="/statistics">
            <li><i type="md-heart" />统计</li>
          </router-link>
          <router-link to="/about">
            <li><i type="md-heart" />关于</li>
          </router-link>
        </ul>
      </div>
      <!-- 移动端菜单 end -->

      <div class="nav right">
        <ul class="nav-far">
          <router-link to="/">
            <li><i type="ios-home" />首页</li>
          </router-link>
          <li class="sub-item">
            <el-dropdown>
              <span class="el-dropdown-link">
                分类<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  icon="el-icon-star-on"
                  @click.native="selectItem('21')"
                  >JavaScript</el-dropdown-item
                >
                <el-dropdown-item
                  icon="el-icon-s-promotion"
                  @click.native="selectItem('221')"
                  >PHP</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <!-- 可使用命名路由 -->
          <router-link to="/everyday">
            <li><i type="ios-link" style="font-weight: bold" />每日一图</li>
          </router-link>
          <router-link to="/online_chat">
            <li><i type="ios-link" style="font-weight: bold" />聊天室</li>
          </router-link>
          <router-link to="/statistics">
            <li><i type="md-heart" />统计</li>
          </router-link>
          <router-link to="/about">
            <li><i type="md-heart" />关于</li>
          </router-link>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isVisibleNavFar: this.$store.state.mobile_menu,
    };
  },
  mounted() {
    this.$store.commit("change_menu", false);
  },
  //返回最新的mobile_menu
  computed: {
    getCateId() {
      return this.$store.state.mobile_menu;
    },
  },
  //监听计算属性返回的值
  watch: {
    getCateId(newVal) {
      this.isVisibleNavFar = newVal;
    },
  },
  methods: {
    selectItem(select_item) {
      sessionStorage.setItem("cateState", select_item);
      if (select_item === sessionStorage.getItem("cateState")) {
        this.$store.commit("save", select_item);
        this.$router.push({
          path: "/categories",
          query: { categoriesId: select_item },
        });
      }
    },
    closeCollMenu() {
      let menu_state = this.$store.state.mobile_menu;
      if (menu_state) {
        this.$store.commit("change_menu", false);
        this.isVisibleNavFar = false;
      } else {
        this.$store.commit("change_menu", true);
        this.isVisibleNavFar = true;
      }
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
header {
  background: rgba(255, 255, 255, 0.94);
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  .container {
    width: 1080px;
    max-width: 100%;
    margin: 0 auto;
    height: 100%;
    color: #3c3c3c;
    a {
      color: #3c3c3c;
      text-decoration: none;
    }

    .home-left {
      height: 100%;
      line-height: 70px;
      font-size: 24px;
      float: left;
      .page-name {
        display: inline-flex;
        align-items: center;
      }
      a {
        font-size: 20px;
        position: relative;
        z-index: 1;
        margin-left: 10px;
      }
    }
    .nav {
      height: 100%;
      line-height: 70px;
      font-size: 14px;
      position: relative;

      .nav-far {
        margin-right: 38px;
        li {
          position: relative;
          float: left;
          margin: 0 16px;
          list-style: none;
        }
      }
    }
  }
  .nav-coll-menu-padd {
    padding-bottom: 29px !important;
  }
  /* 小菜单 */
  .nav-coll-menu {
    position: absolute;
    width: 20px;
    top: 15px;
    left: 6px;
    cursor: url(../assets/pic/cursor.cur), pointer;
    z-index: 1;
    display: none;
    height: 16px;
    padding: 10px;
    box-sizing: content-box;

    .click-fun {
      width: 40px;
      height: 36px;
      position: absolute;
      top: 0;
      left: 0;
    }

    .icon-menu-close {
      transform: rotateZ(360deg);

      &::before {
        top: 7px !important;
        transform: rotate(45deg) !important;
        background: #313131 !important;
      }
      &::after {
        bottom: 7px !important;
        transform: rotate(135deg) !important;
        background: #eb5055 !important;
      }
      .middle {
        opacity: 0;
      }
    }

    .icon-menu {
      position: relative;
      display: inline-block;
      width: 10px;
      height: 16px;
      transition: all 0.4s ease-in-out;
      // transition-timing-function: cubic-bezier(0.61, 0.04, 0.17, 1.32);

      &::before,
      &::after {
        position: absolute;
        width: 15px;
        height: 2px;
        content: "";
        transition: all 0.4s ease-in-out;
        transform-origin: 50% 50% 0;
        background: #ff0000;
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }

      .middle {
        position: absolute;
        top: 50%;
        display: inline-block;
        width: 20px;
        height: 2px;
        margin-top: -1px;
        transition: all 0.4s ease-in-out;
        background: #313131;
      }
    }

    .visible-nav-far {
      visibility: visible !important;
      margin-top: 24px !important;
      opacity: 0.96 !important;
    }
    .nav-far {
      opacity: 0;
      transition: 0.4s;
      visibility: hidden;
      width: 130px;
      margin-top: 0;
      box-shadow: 0 0 4px 0 #d4d4d4;
      background: rgba(255, 255, 255, 0.92);
      font-size: 14px;
      padding-left: 0;
      li {
        position: relative;
        padding: 0 22px;
        line-height: 50px;
        transition: 0.4s;
        list-style: none;
        &:hover {
          transition: 0.4s;
          padding: 0 32px;
          color: #eb5055;
        }

        i {
          font-size: 16px;
          margin-top: -3px;
        }

        &.sub-item {
          &:hover > .nav-child {
            visibility: visible;
            opacity: 0.98;
            top: 100%;
            padding: 0 20px;
            color: #3c3c3c;
          }
          .nav-child {
            left: 60px;
            z-index: 1501;
            visibility: hidden;
            background: rgba(255, 255, 255, 0.94);
            opacity: 0;
            top: 38px;
            position: absolute;
            box-shadow: 0 0 4px 0 #d4d4d4;
            transition: all 0.3s ease-in-out;
            li {
              padding: 0;
              float: none;
              margin: 0;

              a {
                padding: 15px 22px;
                width: 130px;
                display: block;
                height: 50px;
                line-height: 20px;
                transition: 0.4s;

                &:hover {
                  padding-left: 32px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
