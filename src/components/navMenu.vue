<template>
  <div class="navMenu">
    <nav>
      <ul class="menu-list">
        <router-link
          v-for="(item,index) in navList"
          :key="index"
          tag="li"
          :class="{active:activeMenu === item.path}"
          :to="item.path"
          @click.native="changNav(item.path)"
        >{{item.title}}</router-link>
          <!-- :class="{active:$route.path.toLowerCase().indexOf(item.path)>-1}" -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { title: "首页", path: "/home" },
        { title: "marketing", path: "/marketing" },
        { title: "推送", path: "/pass" },
        { title: "滚动", path: "/scroll" },
        { title: "图表", path: "/chart" },
        { title: "数组", path: "/array" },
        { title: "json数组", path: "/jsonArray" },
        { title: "css样式", path: "/css" },
      ],
      activeMenu:''
    };
  },
  mounted () {
    this.activeMenu = window.localStorage.getItem('navMenu')||this.navList[0].path
  },
  watch: {
    $route: {
      handler: function() {
        console.log(111);
      }
    },
    // $route() {
    //   this.activeMenu = this.$route.path
    //   console.log(this.$route.path);
    // }
  },
  methods: {
    changNav(val) {
      this.vConsole.log('1234', 1)
    }
  }
};
</script>

<style lang="less" scoped>
@myheight: 38px;
.navMenu {
  width: 100%;
  background-color: #282b5e;
  font-weight: bold;
  height: @myheight;
  line-height: @myheight;
  margin-bottom: @myheight/4;
  .menu-list {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    li {
      color: #fff;
      cursor: pointer;
    }
    .active{
      color: #4787f7;
    }
  }
}
</style>