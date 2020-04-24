<template>
<div class="wrapper animated bounceInDown">
    <div v-html="content" class="content">
    </div>
</div>

</template>

<script>
import * as http from '@/common/http'
import * as config from '@/common/config'
let rootUrl = config.default.apiUrl;
export default {
  data () {
    return {
        content:''
    };
  },
  computed: {
  },
  created(){
      this.getContent()
  },
  methods: {
      result(){
          this.$message.error('数据获取失败');
      },
      getContent(){
          http.get('api/wp-json/wp/v2/pages/994','','').then( (res)=> {
              if(res.status === 200){
                  this.content = res.data.content.rendered
              }else{
                  this.result();
              }
          })
      }
  },
  mounted(){
    //移动端——关闭菜单
    this.$store.commit('change_menu',false)
  }
};
</script>

<style lang='scss' scoped>
.wrapper {
    margin: 100px auto auto;
    max-width: 900px;
    padding: 0 10px 10px 10px;
    .content {
        text-align:left;
        line-height: 30px;
        >>>p:nth-child(1){
            text-align: center;
        }
    }
}
</style>

