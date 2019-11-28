<template>
  <div>
    <h1>array</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        { id: 0, name: "分号", count: 10 },
        { id: 1, name: "句号", count: 11 },
        { id: 2, name: "逗号", count: 12 },
        { id: 3, name: "问号", count: 10 },
        { id: 4, name: "感叹号", count: 14 }
      ],
      formList: [
        { fid: 0, name: "语文", count: 10 },
        { fid: 1, name: "数学", count: 11 },
        { fid: 2, name: "英语", count: 12 },
        { fid: 3, name: "物理", count: 13 },
        { fid: 4, name: "化学", count: 14 }
      ],
      obj: {
        newid: 12,
        count: 89,
        mount: 90,
        name: "dfgh"
      }
    };
  },
  mounted() {
    // this.splice();
    this.from();
    // this.slice();
    // this.filter();
    // this.reverse()
    // this.sort();
    // this.circle();
    // this.concat();
  },
  methods: {
    from() {
      //合并去重
      function combine() {
        let arr = [].concat.apply([], arguments); //没有去重复的新数组
        return Array.from(new Set(arr));
      }
      var m = [1, 2, 2],
        n = [2, 3, 3];
      console.log(combine(m, n));
    },
    slice() {
      // let newArr = this.dataList.slice(10, 20);
      var myHonda = {
        color: "red",
        wheels: 4,
        engine: { cylinders: 4, size: 2.2 }
      };
      var myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
      var newCar = myCar.slice(0, 2);

      // 输出 myCar、newCar 以及各自的 myHonda 对象引用的 color 属性。
      console.log(" myCar = " + JSON.stringify(myCar));
      console.log("newCar = " + JSON.stringify(newCar));
    },
    splice() {
      let data = ["one", "two", "three", "four", "five"];
      let newArr = data.splice(0, 2, "first");
      console.log(newArr);
      console.log(data);
    },
    //插入
    insert() {
      let formdata = { id: 4, name: "感叹号", count: 14 };
      this.dataList.splice(1, 0, formdata);
    },
    /**
     * concat()合并
     * 不改变原数组，返回新数组
     */
    concat() {
      // let newArr = this.dataList.concat(this.formList)
      // console.log(newArr);
      let getters = this.dataList.values();
      // console.log(getters);
      for (const value of getters) {
        console.log(value);
      }
    },
    circle() {
      for (var i of this.dataList) {
        console.log(i);
      }
      // for(var i in this.obj){
      //     console.log(i);//key
      // }
    },
    sort() {
      let arr = [12, 5, 9, 34, 65];
      // console.log(arr.sort((a,b)=>a-b));//[5,9,12,34,65]
      console.log(arr.sort((a, b) => b - a)); //[,65,34,12,9,5]
      console.log(arr); //改变原数组
    },
    reverse() {
      let arr = [12, 5, 9, 34, 65];
      arr.reverse();
      console.log(arr);
    },
    filter() {
      this.dataList = this.dataList.filter(item => {
        return item.count !== 10;
      });
      // this.dataList = this.dataList.filter(item=>item.count!==10)
      console.log(this.dataList);
    }
  }
};
</script>

<style lang="less" scoped>
</style>