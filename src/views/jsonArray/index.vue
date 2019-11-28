<template>
  <div>
    <nav-list :call-back="changeNav" :navList="navList" />
    <area v-if="current==='area'" />
    <gauge v-if="current==='gauge'" />
    <recycle v-if="current==='recycle'" />
  </div>
</template>

<script>
/**
 * 一. 根据对象属性值得到相应对象
 * 二. 删除其中一个对象
 * 三. 修改其中一个对象的属性值
 * 四. 往数组中添加一个对象
 * 五.将两个json数组进行拼接
 * 六.JSONArray进行排序
 * 七.json数组前端循环
 */
import navList from "@/views/common/navList.vue";
import concat from "./components/concat.vue";
import unique from "./components/unique.vue";
import recycle from "./components/recycle.vue";
export default {
  name: "jsonArray",
  data() {
    return {
      current: "concat",
      navList: [
        { name: "拼接", key: "concat" },
        { name: "去重", key: "unique" },
        { name: "合集", key: "recycle" },
      ]
    };
  },
  components: {
    navList,
    concat,
    unique,
    recycle,
  },
  methods: {
    changeNav(val) {
      this.current = val;
    }
  }
};
</script>

<style lang="less" scoped>
</style>