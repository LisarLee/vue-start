<template>
  <div class="quarter">
    <headerTitle :title="title"/>
    <div class="quarter_con">
        
    </div>
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
          title:'Responses Over Quarter To Date'
      }
  },
};
</script>

<style lang="less" scoped>
.quarter{
    width: 600px;
}
</style>