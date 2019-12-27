<template>
<div class="wrapper">
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
      getContent(){
          http.get('//wp-json/wp/v2/pages/88','',rootUrl).then( (res)=> {
              if(res.status === 200){
                  this.content = res.data.content.rendered
              }else{
                this.$message.error('获取数据失败!');
              }
          })
      }
  },
  watch: {

  },
  components: {
  },
};
</script>

<style lang='scss' scoped>
.wrapper {
    margin: 100px auto auto;
    width: 900px;
    .content {
        text-align:left;
        line-height: 30px;
        >>>p:nth-child(1){
            text-align: center;
        }
    }
}
</style>

