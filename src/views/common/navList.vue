<template>
  <div>
    <ul>
      <li
        v-for="item in navList"
        :key="item.key"
        :class="{active:currentNav===item.key}"
        @click="changeNav(item.key)"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => {
        return [
          { name: "string", key: "string" },
          { name: "object", key: "object" },
          { name: "array", key: "array" }
        ];
      }
    },
    callBack: {
      type: Function,
      default: index => index
    }
  },
  data() {
    return {
      currentNav: ""
    };
  },
  mounted() {
    this.currentNav =
      window.sessionStorage.getItem(`${this.$route.name}`) || this.navList[0].key;
    this.callBack(this.currentNav);
  },
  methods: {
    changeNav(val) {
      this.currentNav = val;
      this.callBack(val);
      window.sessionStorage.setItem(`${this.$route.name}`, val);
    }
  }
};
</script>

<style scoped lang="less">
ul {
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  li{
    box-sizing: border-box;
    padding: 3px 8px;
    border-radius: 15px;
    background-color: #fff;
    border: 1px solid steelblue;
  }
  li.active {
    background-color: steelblue;
    color: #fff;
  }
}
</style>