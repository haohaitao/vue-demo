<template>
  <header class="head-page">
    <div class="container">
      <div class="home left">
        <i class="el-icon-cherry"/>
        <router-link to="/vue-blog">个人主页</router-link>
      </div>
      <div class="nav-right">
        <ul class="nav-far">
          <router-link to="/vue-blog">
            <li>
              <i type="ios-home"/>首页
            </li>
          </router-link>
          <li class="sub-item">
              <el-dropdown>
                <span class="el-dropdown-link">
                    分类<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <router-link to='/vue-blog'>
                        <el-dropdown-item>前端开发</el-dropdown-item>
                    </router-link>
                    <router-link to='/vue-blog' >
                        <el-dropdown-item>PHP</el-dropdown-item>
                    </router-link>
                </el-dropdown-menu>
                </el-dropdown>
          </li>
          <!-- 可使用命名路由 -->
          <router-link :to="{name: 'link'}">
            <li>
              <i type="ios-link" style="font-weight: bold;"/>友链
            </li>
          </router-link>
          <router-link to="/about">
            <li>
              <i type="md-heart"/>关于
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import * as http from '../common/http.js';
import * as config from '@/common/config'
let rootUrl = config.default.apiUrl;
export default {
  data() {
    return {
    }
  },
  created() {},
  mounted() {
  },
  methods: {
  },
  components: {}
}
</script>

<style lang='scss' scoped>
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

    .home {
      height: 100%;
      line-height: 70px;
      font-size: 24px;
      float: left;

      a {
        font-size: 20px;
        position: relative;
        z-index: 1;
      }
    }
    .nav-right{
        float: right;
        line-height: 70px;

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
  }
</style>
