<template>
  <div>
    <ul ref="weibo">
      <li v-for="(item,index) in showData" :key="index">【{{item.count}}】:{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
// import { resolve } from "q";
export default {
  data() {
    return {
      itemWidth: "",
      showData: [],
      data: [],
      left:'',
      orginData: [
        { count: 21, title: "对方过后就哭" },
        { count: 22, title: "对方过后就哭" },
        { count: 23, title: "对方过后就哭" },
        { count: 24, title: "对方过后就哭" },
        { count: 25, title: "对方过后就哭" },
        { count: 26, title: "对方过后就哭" },
        { count: 27, title: "对方过后就哭" },
        { count: 28, title: "对方过后就哭" },
        { count: 29, title: "对方过后就哭" },
        { count: 30, title: "对方过后就哭" },
        { count: 31, title: "对方过后就哭" },
        { count: 32, title: "对方过后就哭" },
        { count: 33, title: "对方过后就哭" },
        { count: 34, title: "对方过后就哭" },
        { count: 35, title: "对方过后就哭" },
        { count: 36, title: "对方过后就哭" }
      ]
    };
  },
  mounted() {
    this.getData();
    this.getItemWidth();
    // setInterval(()=>{
    //     if(this.showData.length===0||this.data.length===0)return
    //     const single = this.data.shift()
    //     console.log(single);

    //     this.showData.push(single)
    //     this.showData.shift()

    //     if(this.showData.length<3){
    //         this.data.push(single)
    //     }
    //     console.log(this.showData);
    //     console.log(this.data);
    // },200)
  },
  methods: {
    getData() {
      this.showData = this.orginData.splice(0, 3);
      this.data = this.orginData.splice(3, 15);
    },
    getItemWidth() {
      this.itemWidth = this.$refs["weibo"].getBoundingClientRect().width / 3;
    },
    tableScroll(len, timer) {
      return new Promise(resolve => {
        let glob;
        let num = 0;
        let { itemWidth } = this;
        const step = (len*-itemWidth)/(timer*60)
        const numFun=()=>{
            num+=step
            this.left = num 
            if(num<=len*-itemWidth){
                window.cancelAnimationFrame(glob)
                this.left = 0
                resolve(true)
            }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  width: 50%;
  display: flex;
  flex-direction: row;
  // li{
  //     width: 30%;
  // }
}
</style>