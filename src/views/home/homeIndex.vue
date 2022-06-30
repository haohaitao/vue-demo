<!--
 * @Description: 
 * @Author: pacino
 * @Date: 2022-06-29 17:05:38
 * @LastEditTime: 2022-06-30 13:44:53
 * @LastEditors: pacino
-->
<template>
  <div class="animated bounce">
    <content-list></content-list>
  </div>
</template>

<script>
export default {
  name: "homeIndex",
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("change_menu", false);
  },
  components: {
    contentList: () => import("./pageContent"),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
