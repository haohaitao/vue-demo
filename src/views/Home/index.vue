<template>
  <div class="animated bounce">
    <Content></Content>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  mounted() {
    this.$store.commit('change_menu',false)
  },
  components: {
    Content: () => import('./PageContent')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
