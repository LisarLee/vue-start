<template>
  <div class="sort-list">
    <p>{{content.title}}:</p>
    <ul>
      <li
        v-for="(item,index) in content.list"
        :key="index"
        @click="getTagVal(item)"
        :class="{active:current===item.id}"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ""
    };
  },
  props: {
    content: {
      type: Object || Array
    },
    callBack: {
      type: Function,
      default: str => str
    }
  },
  mounted () {
      this.getList();
      this.callBack(this.current)
  },
  methods: {
      getList(){
          this.current = this.content.default?this.content.default:this.content.list[0].id
      },
    getTagVal(val) {
      this.current = val.id;
      this.callBack({[this.content.type]:val});
    }
  }
};
</script>

<style lang="less" scoped>
.sort-list {
  display: flex;
  line-height: 38px;
  p {
    font-weight: bold;
  }
  ul {
    display: flex;
    li {
      margin-right: 5px;
    }
    li.active{
        color:#409eff;
    }
  }
}
</style>