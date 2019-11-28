<template>
  <div>
    <h1>object</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name:'wer',
        age:23,
        count:67
      }
    }
  },
  mounted () {
    this.assign();
  },
  methods: {
    assign() {
      /**
       * Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
       */
      const newObj = Object.assign({},this.obj)
      console.log(newObj);
      
    }
  },
};
</script>

<style lang="less" scoped>
h1 {
    position: relative;
  &::after {
    content: "";
    background: url(../../../assets/img/mcont-bg.png) no-repeat left top;
    position: absolute;
    top: 0;
    left: 0;
    background-size: contain;
    height: 39px;
    width: 100%;
  }
}
</style>