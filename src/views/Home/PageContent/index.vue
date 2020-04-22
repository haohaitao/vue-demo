<template>
    <main>
        <p>今天是{{time}}，欢迎来自【{{city}}】的朋友！</p>
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
      page:null, //默认页码
      city:'获取中..', //定位城市
      time:'', //时间
    }
  },
  methods:{
    async getList(){
        await http.get('api/wp-json/wp/v2/posts?per_page=12',{
          page:this.page
        },'').then( (res)=> {
          res.data.forEach((item)=>{
            item.title = item.title.rendered
            item.excerpt = item.excerpt.rendered
          })
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
    },
    showCityInfo() {
    //实例化城市查询类
    var citysearch = new AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity((status, result) => {
        if (status === 'complete' && result.info === 'OK') {
            if (result && result.city && result.bounds) {
                var cityinfo = result.city;
                this.city = cityinfo
            }
        } else {
            sessionStorage.setItem('err',result.info)
        }
    });
}
  },
  created(){
      this.showCityInfo() //获取城市
      let timeTemp = new Date()
      let currentTime = http.timestampToTimes(timeTemp)
      this.time = currentTime
      let data = {
        per_page:12,
      }
      http.get('/api/wp-json/wp/v2/posts',data,'').then( (res)=> {
          res.data.forEach((item)=>{
            item.title = item.title.rendered
            item.excerpt = item.excerpt.rendered
          })
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
