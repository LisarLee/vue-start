<template>
  <div>
    <div id="cloud"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      var option = {
        backgroundColor: "#1b1b1b",
        tooltip: {
          trigger: "item",
          formatter: function(param) {
            return param.marker + param.name + "：" + param.value;
          },
          extraCssText: "box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);",
          backgroundColor: "#fff",
          textStyle: {
            fontSize: "12",
            color: "#333"
          }
        },
        series: [
          {
            type: "wordCloud",
            width: "95%",
            height: "95%",
            gridSize: 1,
            rotationRange: [0, 0, 0, 0], //数据翻转范围
            textPadding: 0,
            sizeRange: [12, 35],
            textStyle: {
              normal: {
                fontFamily: "sans-serif",
                color: function(params) {
                  console.log(params);
                  // let lightWords = [
                  //   "智慧中国",
                  //   "中国",
                  //   "国家",
                  //   "时代",
                  //   "社会",
                  //   "35周年",
                  //   "各尽所能",
                  //   "无所不能",
                  //   "善行者",
                  //   "未来",
                  //   "致敬"
                  // ];
                  // if (lightWords.indexOf(params.name) > -1) {
                  //   return "#1bd8c2";
                  // }
                  const colors = [
                    "#ec380d",
                    "#1db5ca",
                    "#39ca75",
                    "#8b2cf8",
                    "#5c862d",
                    "#ac278d",
                    "#79a038",
                    "#be9e40",
                    "#5fa99f"
                  ];
                  return colors[Math.floor(Math.random() * 9)];
                }
              },
              emphasis: {
                shadowBlur: 5, //阴影距离
                shadowColor: "#333" //阴影颜色
              }
            }
          }
        ]
      };
      let mockData = [
        { name: "赞", value: 4832 },
        { name: "中国女排", value: 4449 },
        { name: "good", value: 4006 },
        { name: "女排", value: 3681 },
        { name: "中国", value: 3082 },
        { name: "辛苦", value: 1879 },
        { name: "骄傲", value: 1447 },
        { name: "鼓掌", value: 1193 },
        { name: "世界", value: 1151 },
        { name: "鲜花", value: 1085 },
        { name: "郎导", value: 1011 },
        { name: "祖国", value: 1003 },
        { name: "姑娘", value: 924 },
        { name: "太棒了", value: 879 },
        { name: "第一", value: 876 },
        { name: "升国旗", value: 799 },
        { name: "厉害", value: 785 },
        { name: "精神", value: 783 },
        { name: "奏国歌", value: 778 },
        { name: "威武", value: 753 },
        { name: "冠军", value: 685 },
        { name: "给力", value: 587 },
        { name: "恭喜", value: 556 },
        { name: "世界杯", value: 553 },
        { name: "卫冕", value: 407 },
        { name: "好样", value: 355 },
        { name: "郎平", value: 346 },
        { name: "开心", value: 321 },
        { name: "真棒", value: 310 },
        { name: "祝贺", value: 310 },
        { name: "比心", value: 281 },
        { name: "国家", value: 255 },
        { name: "感动", value: 253 },
        { name: "优秀", value: 248 },
        { name: "教练", value: 222 },
        { name: "夺冠", value: 216 },
        { name: "奥运会", value: 215 },
        { name: "憧憬", value: 214 },
        { name: "男足", value: 203 },
        { name: "致敬", value: 186 }
      ];
      this.chart = this.$echarts.init(document.getElementById("cloud"));
      option.series[0].data = mockData;
      this.chart.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
#cloud {
  width: 500px;
  height: 400px;
}
</style>