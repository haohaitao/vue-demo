<template>
    <main>
        <SectionArticle :blogList="blogList"></SectionArticle>
        <div style="clear:both;margin:30px 0;">
            <el-pagination
            v-if="total > 12"
            background
            layout="prev, pager, next"
            :page-size="12"
            @current-change="handleCurrentChange"
            :total="total">
          </el-pagination>
        </div>
    </main>
</template>

<script>
import * as http from '@/common/http'
import * as config from '@/common/config'
let rootUrl = config.default.apiUrl;
export default {
  name: 'PageContent',
  data () {
    return {
      blogList:[] ,//存接口返回的数据
      total:null, //返回数据的总条数
    }
  },
  methods:{
    async getList(){
        await http.get('/wp-json/wp/v2/posts?per_page=12',{
          page:this.page
        },rootUrl).then( (res)=> {
          this.blogList = res.data
          this.total = parseInt(res.headers['x-wp-total'])
      })
    },
    //页码改变触发事件
    handleCurrentChange(page){
      this.page = page;
      this.getList();
      if (page === 1) {
        this.$router.push({name: 'home'})
      } else {
        this.$router.push({ name: 'homePage', params: { pageIndex: page } })
      }
    }
  },
  created(){
      let data = {
        per_page:12,
        page:1
      }
      http.get('/wp-json/wp/v2/posts',data,rootUrl).then( (res)=> {
          this.blogList = res.data
          this.total = parseInt(res.headers['x-wp-total'])
      })
  },
  components: {
    SectionArticle: () => import('@/components/SectionArticle')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
main {
  max-width: 1080px;
  margin: 90px auto 0;
}
</style>
