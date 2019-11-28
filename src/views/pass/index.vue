<template>
  <div>
    <nav-list :call-back="changeNav" :navList="navList" />
    <row v-if="current==='row'" />
    <pass v-if="current==='pass'" />
    <colum v-if="current==='colum'" />
    <player v-if="current==='player'" />
  </div>
</template>

<script>
import navList from "@/views/common/navList.vue";
import row from "./components/row.vue";
import pass from "./components/pass.vue";
import colum from "./components/colum.vue";
import player from "./components/player.vue";
export default {
  data() {
    return {
      current:"row",
      navList: [
        { name: "横滚", key: "row" },
        { name: "竖滚", key: "colum" },
        { name: "混合", key: "pass" },
        { name: "RTMP", key: "player" },
        // { name: "花式", key: "more" }
      ]
    };
  },
  components: {
    navList,
    row,
    pass,
    player,
    colum
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