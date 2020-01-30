<template>
  <header class="head-page">
    <div class="container">
      <div class="home left">
        <i class="el-icon-cherry"/>
        <router-link to="/">个人主页</router-link>
      </div>
      <div class="nav-right">
        <ul class="nav-far">
          <router-link to="/">
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
                        <el-dropdown-item icon="el-icon-star-on"  @click.native="selectItem('21')">JavaScript</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-s-promotion" @click.native="selectItem('221')">PHP</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
          </li>
          <!-- 可使用命名路由 -->
          <router-link to="/everyday">
            <li>
              <i type="ios-link" style="font-weight: bold;"/>每日一图
            </li>
          </router-link>
          <router-link to="/online_chat">
            <li>
              <i type="ios-link" style="font-weight: bold;"/>聊天室
            </li>
          </router-link>
          <router-link to="/statistics">
            <li>
              <i type="md-heart"/>统计
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
  mounted() {
  },
  methods: {
    selectItem(select_item){
      sessionStorage.setItem('cateState',select_item)
      if(select_item === sessionStorage.getItem('cateState')){
          this.$store.commit('save',select_item)
          this.$router.push({path:'/categorie',query:{categorieId:select_item}})
      }
    }
  },
  components: {},
}
</script>

<style lang='scss' scoped>
header {
  background: rgba(255, 255, 255, 0.94);
  width: 1903px;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1000px) {
      width: 100%;
    }
  @media screen and (min-width: 1000px) and (max-width: 1800px) {
      width: 100%;
    }
  @media screen and (min-width: 1800px) {
    width: 1903px;
  }
  .container {
    width: 1080px;
    min-width: 1080px;
    margin: 0 auto;
    height: 100%;
    color: #3c3c3c;
    @media screen and (max-width: 1000px) {
      width: 85%;
    }
    @media screen and (min-width: 1000px) {
      width: 1080px;
    }
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
