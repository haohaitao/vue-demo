<template>
  <main v-if="!isNoBlog">
    <Header></Header>
    <Detail :blog="blog"></Detail>
    <Footer></Footer>
  </main>
  <NotFound v-else></NotFound>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Detail from '@/components/Detail';
import NotFound from '@/components/NotFound';
import * as http from '@/common/http'
import * as config from '@/common/config'
let rootUrl = config.default.apiUrl;
export default {
  data () {
    return {
      blog: {},
      status: 200,
    };
  },
  computed: {
    isNoBlog () {
      return this.status === 404;
    },
  },
  created () {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      let id = this.$route.params['id'];
      console.log(id)
      http.get('/api/get_post',{
        id:id
      },rootUrl).then( (res)=>{
        console.log(res)
      })
      // let res = await Service.getBlogDetail(id);
      // this.status = res.status;
      // this.blog = res.data;
      // 404 的标题在 axios 拦截器已经定义
      // if (this.status !== 404) {
      //   document.title = `${this.blog['title']} - ${document.title}`;
      // }
    },
  },
  watch: {
    $route (to, from) {
      this.getBlogDetail();
    },
  },
  components: {
    Header, Footer, NotFound, Detail,
  },
};
</script>

<style lang='scss' scoped>

</style>
