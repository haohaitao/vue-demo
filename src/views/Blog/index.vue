<template>
<article class="detail-article" ref="article">
    <div class="art-header">
      <h1>{{blog.title.rendered}}</h1>
      <div class="header-info">
        <i class="el-icon-table-lamp"/>
          <router-link :to="`/category/${blog.category_name}`">{{blog.category_name}}</router-link>
        <i class="el-icon-date" />
        {{blog.date.split('T')['0']}}
        <i class="el-icon-view" />
        {{blog.pageviews}}
        <i class="el-icon-s-comment" />
        <span>{{blog.total_comments}}</span>
      </div>
      <div class="header-tag">
        <el-tag v-for="item in tagData" :key="item.id">
          <router-link :to="{name:'tag',params:{tagId:item.id}}">
          {{item.name}}
          </router-link>
        </el-tag>
      </div>
      <div class="tag-time">
        <i class="el-icon-timer" />
        {{blog.date.split('T')['1']}}
      </div>
    </div>
    <div id="blog"  v-html="blog.content.rendered"></div>
    <div class="content-footer">
      <p>本文由 <router-link to="/">{{blog.author === 1 ? '一只' : '博主'}}</router-link> 创作，转载请注明</p>
      <p>最后编辑时间：{{blog.modified.split('T')['0'] + ' ' + blog.modified.split('T')['1']}}</p>
    </div>
  </article>
</template>

<script>
import * as http from '@/common/http'
import * as config from '@/common/config'
let rootUrl = config.default.apiUrl;
export default {
  data () {
    return {
      blog: [],
      tagData:[{
        id:1,name:'占位标签'}], //存文章标签
    };
  },
  computed: {
  },
  created () {
    this.getBlogDetail();
    console.log(this.tagData)
  },
  methods: {
    getBlogDetail() {
      let id = this.$route.params['id'];
      console.log(id)
      http.get('/wp-json/wp/v2/posts/' + id,'',rootUrl).then( (res)=>{
        console.log(res)
        this.blog = res.data
        console.log(this.blog,typeof this.blog)
        if(res.data.tags){
            this.tagData= [],//如果tags有内容，清空tagData
            res.data.tags.map( (item)=> {
            http.get('/wp-json/wp/v2/tags/' + item,'',rootUrl).then( (res)=> {
              this.tagData.push(res.data)
            })
          })
        }
      })
    }
  },
  watch: {
    // tagData(old,newData){
    //   console.log(old,newData)
    // }
  },
  components: {
  },
};
</script>

<style lang='scss' scoped>
article {
  animation: fadeIn .6s linear;
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
      span {
        margin-right:12px;
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
</style>

