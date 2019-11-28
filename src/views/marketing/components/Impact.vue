<template>
  <div class="impact">
    <headerTitle  :title="title"/>
    <div class="impact_con"></div>
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
          title: 'Marketing Impact'
      }
  },
};
</script>

<style lang="less" scoped>
.impact{
    width: 600px;
}
</style>