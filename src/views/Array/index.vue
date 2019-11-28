<template>
  <div>
    <nav-list :call-back="changeNav" :navList="navList"/>
    <!-- <ul>
      <li v-for="item in navList" :key="item.key" @click="changeNav(item.key)">{{ item.name }}</li>
    </ul> -->
    <string-con v-if="current==='string'" />
    <object-con v-if="current==='object'" />
    <array-con  v-if="current==='array'"/>
    <json-array  v-if="current==='jsonArray'"/>
    <!-- span.$*4 -->
    <!-- span{$}*5 -->
  </div>
</template>

<script>
/**
 * 张震
 * 你的酒窝没有酒
 * 我却醉的像条狗
 * Array.splice会改变原数组
 */
import navList from "@/views/common/navList.vue";
import stringCon from "./components/string.vue";
import objectCon from "./components/object.vue";
import arrayCon from "./components/array.vue";
import jsonArray from "./components/jsonArray.vue";
export default {
  name:'array',
  data() {
    return {
      navList: [
        { name: "string", key: "string" },
        { name: "object", key: "object" },
        { name: "array", key: "array" },
        { name: "jsonArray", key: "jsonArray" },
      ],
      current:"string"
    };
  },
  components: {
    stringCon,
    navList,
    objectCon,
    arrayCon,
    jsonArray
  },
  mounted() {},
  methods: {
    changeNav(val) {
      this.current =val
    }
  }
};
</script>

<style lang="less" scoped>
</style>