<template>
  <div>
    <nav-list :call-back="changeNav" :navList="navList" />
    <text v-if="current='text'"/>
  </div>
</template>

<script>
import navList from "@/views/common/navList.vue";
import text from './components/text.vue';
export default {
  components: {
    navList,
    text
  },
  data() {
    return {
      navList: [
        { name: "文字相关", key: "text" },
        // { name: "去重", key: "unique" },
        // { name: "合集", key: "recycle" }
      ]
    };
  },
  methods: {
      changeNav(val) {
      this.current = val;
    }
  },
};
</script>

<style lang="less" scoped>
.line{
    text-decoration: line-through;
}
</style>