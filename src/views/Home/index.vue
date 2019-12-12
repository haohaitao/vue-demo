<template>
  <div>
    <Content></Content>
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
    }
  },
  methods:{},
  mounted(){},
  components: {
    Content: () => import('./PageContent')
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
