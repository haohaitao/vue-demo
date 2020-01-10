<template>
<div class="wrapper animated bounceInDown">
    <div id="content" :style="{width: '1100px', height: '357px'}">
    </div>
</div>

</template>

<script>
import * as http from '@/common/http'
import * as config from '@/common/config'
let rootUrl = config.default.apiUrl;
import * as draw from "@/common/drawing.js"
export default {
  data () {
    return {
    };
  },
  methods: {
  },
  mounted(){
      http.get('/api/wp-json/wp/v2/categories','','').then( (res)=> {
          this.count = res.data.count //此分类的数目
          this.name = res.data.name  //此分类的名字
      })
      draw.drawLine(this.count,this.name)
  }
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

