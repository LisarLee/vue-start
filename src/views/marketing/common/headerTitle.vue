<template>
  <div>
    <div class="title-header">
      <h2>{{ title }}</h2>
      <i class="el-icon-more"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Markting Influenced Piprline"
    }
  }
};
</script>

<style lang="less" scoped>
.title-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #666666;
  box-sizing: border-box;
  padding: 0 3%;
  color: #fff;
  .el-icon-more {
    color: #fff;
    transform: rotate(90deg);
  }
}
</style>