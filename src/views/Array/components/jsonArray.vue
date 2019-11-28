<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      jeo: [
        { id: 0, name: "微博", source: "一块钱四个", target: "呵呵" },
        { id: 1, name: "微信", source: "一块钱四个", target: "嘿嘿" },
        { id: 2, name: "客户端", source: "一块钱四个", target: "哈哈" },
        { id: 3, name: "网页", source: "一块钱四个", target: "嘻嘻" },
        { id: 4, name: "联想", source: "一块钱四个", target: "咳咳" },
        { id: 5, name: "阿里", source: "一块钱四个", target: "哒哒" },
        { id: 6, name: "小米", source: "一块钱四个", target: "呼呼" },
        { id: 7, name: "菠菜", source: "一块钱四个", target: "嘿嘿" },
        { id: 8, name: "窝窝头", source: "一块钱四个", target: "嘻嘻" },
        { id: 9, name: "烤山药", source: "一块钱四个", target: "咳咳" },
        { id: 10, name: "惠普", source: "一块钱四个", target: "嘿嘿" }
      ],
      link: [
        { name: "微博", count: 101, color: "red1" },
        { name: "微信", count: 62, color: "red2" },
        { name: "客户端", count: 43, color: "red3" },
        { name: "网页", count: 84, color: "red4" },
        { name: "联想", count: 75, color: "red5" },
        { name: "阿里", count: 86, color: "red6" },
        { name: "小米", count: 97, color: "red7" },
        { name: "菠菜", count: 88, color: "red8" },
        { name: "窝窝头", count: 89, color: "red9" },
        { name: "烤山药", count: 90, color: "red11" },
        { name: "惠普", count: 91, color: "red22" }
        //43,62,75,84,86,88,89,90,91,97,101
      ]
    };
  },
  mounted() {
    // this.jsonConcat(this.jeo, this.link);
    // this.norepeat(this.jeo);
    this.test();
    // this.jsonSort(this.link);
  },
  methods: {
    test() {
      let dataList = ["swdefrgthj", "dsfghjkl", "sdfghjk", "azsxdcfvgbhnj"];
      for (var i = 0; i < [...dataList]; i++) {
        console.log(i);
      }
      console.log([...dataList]);
      //   for(var i=0;i<dataList.length;i++){
      //       console.log(i);
      //   }
    },
    //jsonArr拼接
    jsonConcat(arr1, arr2) {
      //此方法改变arr1
      //   for (var i = 0; i < arr1.length; i++) {
      //     for (var j = 0; j < arr2.length; j++) {
      //       if (arr1[i].name === arr2[j].name) {
      //         arr1[i].count = arr2[j].count;
      //         arr1[i].color = arr2[j].color;
      //       }
      //     }
      //   }
      //   arr1.forEach((element, index) => {
      //     arr2.forEach((item, idx) => {
      //       if (element.name === item.name) {
      //         element.count = item.count;
      //         element.color = item.color;
      //       }
      //     });
      //   });
      //   arr1.forEach((element, index) => {
      //     arr2.forEach((item, idx) => {
      //       if (arr1[index].name === arr2[idx].name) {
      //         arr1[index].count = arr2[idx].count;
      //         arr1[index].color = arr2[idx].color;
      //       }
      //     });
      //   });
      //   console.log(arr1);
    },
    //jsonArr去重
    norepeat(arr) {
      /**
       * some只支持IE9+火狐1.5+
       */
      let newArr = [];
      newArr.push(arr[0]);
      //   for (var i = 0; i < arr.length; i++) {
      //     if (!newArr.some(ele => ele.target === arr[i].target)) {//some可替换为every
      //       newArr.push(arr[i]);
      //     }
      //   }

      //   arr.forEach((item, index) => {
      //     if (!newArr.some(ele => ele.target === item.target)) {
      //   //  if (newArr.some(ele => ele.target !== item.target)) {//此方法为错误的，不报错，但不生效
      //       newArr.push(item);
      //     }
      //   });
      console.log(newArr);
    },
    //jsonArr排序
    jsonSort(arr) {
      /**
       * 冒泡排序1
       */
      //   var i = arr.length;
      //   var tempExchangVal
      //   while (i > 0) {
      //     for (var j = 0; j < i - 1; j++) {
      //       if (arr[j].count > arr[j + 1].count) {
      //         tempExchangVal = arr[j];
      //         arr[j] = arr[j + 1];
      //         arr[j + 1] = tempExchangVal;
      //       }
      //     }
      //     i--;
      //   }
      /**
       * 冒泡排序2
       */
      var i, j;
      var tempExchangVal;
      for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j].count > arr[j + 1].count) {
            tempExchangVal = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tempExchangVal;
          }
        }
      }
      console.log(arr);

      // var arr = [1,52,6,9,15,47]

      // arr.sort((a,b)=>{return b-a})
      // console.log(arr);//[52, 47, 15, 9, 6, 1]

      // arr.sort((a,b)=>{return a-b})
      // console.log(arr);//[1, 6, 9, 15, 47, 52]
    }
  }
};
</script>

<style lang="less" scoped>
</style>