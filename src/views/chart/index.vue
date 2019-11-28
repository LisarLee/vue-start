<template>
  <div>
    <nav-list :call-back="changeNav" :navList="navList" />
    <tree v-if="current==='tree'" />
    <gauge v-if="current==='gauge'" />
    <group v-if="current==='group'" />
    <words v-if="current==='words'" />
  </div>
</template>

<script>
import navList from "@/views/common/navList.vue";
import tree from "./components/tree.vue";
import gauge from "./components/gauge.vue";
import group from "./components/group.vue";
import words from "./components/drawCloud.vue";
export default {
  data() {
    return {
      current:"tree",
      navList: [
        { name: "树图", key: "tree" },
        { name: "方向盘", key: "gauge" },
        { name: "混合", key: "group" },
        { name: "词云", key: "words" }
      ]
    };
  },
  components: {
    navList,
    tree,
    gauge,
    words,
    group
  },
  methods: {
    changeNav(val) {
      this.current =val
    }
  },
};
</script>

<style lang="less" scoped>
</style>