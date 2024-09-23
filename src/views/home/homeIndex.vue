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
