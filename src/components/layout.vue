<template>
  <div>
    <navMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import navMenu from './navMenu.vue';
export default {
  name: "layout",
  components: {
    navMenu,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bro: 'mobile分支特有'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
