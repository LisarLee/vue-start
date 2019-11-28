<template>
  <div class="influenced">
    <headerTitle  :title="title"/>
    <div class="influenced_con"></div>
  </div>
</template>

<script>
import headerTitle from "../common/headerTitle.vue";
export default {
  components: {
    headerTitle
  },
  data() {
      return {
          title:'Marketing Influenced Pipeline'
      }
  },
};
</script>

<style lang="less" scoped>
.influenced{
    width: 600px;
}
</style>