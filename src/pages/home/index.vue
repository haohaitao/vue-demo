<template>
  <div class="home_wrapper">
    {{msg}}
    <div v-for="item in listData" :key="item.id">
        <ul v-for="item in listData" :key="item.id">
            <li v-html="item.content.rendered"></li>
        </ul>
    </div>
  </div>
</template>

<script>
import * as http from '../../common/http'
import * as config from '../../common/config'
let rootUrl = config.default.apiUrl;
export default {
  name: 'Home',
  data () {
    return {
      msg: '这里是home页面',
      listData:[] ,//存接口返回的数据
    }
  },methods:{

  },
  mounted(){
      http.get('/wp-json/wp/v2/comments','',rootUrl).then( (res)=> {
          console.log(res)
          this.listData = res.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
