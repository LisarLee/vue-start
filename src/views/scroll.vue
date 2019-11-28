<template>
  <div>
    <h1>scroll</h1>
    <div id="trend"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      data:[
              {
                amount: 124,
                value: 124,
                date: "2019-10-22 18:00:00",
                platform: "微博",
                subject:
                  "他们家的电脑我是非常的喜欢//@乔健Gina:听到这些同伴#各尽所能 无所不能# 的声音，感慨万千。",
                uname: "睁着眼睛睡觉的花狗达"
              },
              {
                amount: 104,
                value: 104,
                date: "2019-10-22 18:00:00",
                platform: "微博",
                subject:
                  "他们家的电脑我是非常的喜欢//@乔健Gina:听到这些同伴#各尽所能 无所不能# 的声音，感慨万千。",
                uname: "睁着眼睛睡觉的花狗达"
              },
              {
                amount: 64,
                value: 64,
                date: "2019-10-22 18:00:00",
                platform: "微博",
                subject:
                  "他们家的电脑我是非常的喜欢//@乔健Gina:听到这些同伴#各尽所能 无所不能# 的声音，感慨万千。",
                uname: "睁着眼睛睡觉的花狗达"
              },
              {
                amount: 144,
                value: 144,
                date: "2019-10-22 18:00:00",
                platform: "微博",
                subject:
                  "他们家的电脑我是非常的喜欢//@乔健Gina:听到这些同伴#各尽所能 无所不能# 的声音，感慨万千。",
                uname: "睁着眼睛睡觉的花狗达"
              },
              {
                amount: 94,
                value: 94,
                date: "2019-10-22 18:00:00",
                platform: "微博",
                subject:
                  "他们家的电脑我是非常的喜欢//@乔健Gina:听到这些同伴#各尽所能 无所不能# 的声音，感慨万千。",
                uname: "睁着眼睛睡觉的花狗达"
              },
              {
                amount: 124,
                value: 124,
                date: "2019-10-22 18:00:00",
                platform: "微博",
                subject:
                  "他们家的电脑我是非常的喜欢//@乔健Gina:听到这些同伴#各尽所能 无所不能# 的声音，感慨万千。",
                uname: "睁着眼睛睡觉的花狗达"
              },
              {
                amount: 84,
                value: 84,
                date: "2019-10-22 18:00:00",
                platform: "微博",
                subject:
                  "他们家的电脑我是非常的喜欢//@乔健Gina:听到这些同伴#各尽所能 无所不能# 的声音，感慨万千。",
                uname: "睁着眼睛睡觉的花狗达"
              },
            ]
    };
  },
  mounted() {
    this.drawArea();
  },
  methods: {
    drawArea() {
        let trend = []
      this.data.map(item => {
         trend.push(item.amount)
      })
      let option = {
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#4466F4"
            }
          },
          textStyle: {
            fontSize: this.tooltipSize
          },
          backgroundColor: "#000",
          formatter: function(params) {
            if (params[0].data.amount === 0) {
              return "";
            }
            const data = params[0].data;
            const length = 15;
            const reg = new RegExp(`(.{${length}})`, "g");
            const subject =
              data.subject.length > length
                ? data.subject.replace(reg, "$1<br/>")
                : data.subject;
            return `${params[0].marker}${data.platform}${
              data.uname ? "—" + data.uname : ""
            }<br/>${subject}`;
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.data,
            type: "line",
            areaStyle: {
              color: "#feb90e"
            }
          }
        ]
      };
      this.chart = this.$echarts.init(document.getElementById("trend"));
      this.chart.setOption(option);
    },
    startShowTip() {
      this.chart.dispatchAction({
        type: "hideTip"
      });
      this.chart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: this.activeIndex,
        position: "top"
      });
    }
  }
};
</script>

<style lang="less" scoped>
#trend {
  width: 500px;
  height: 400px;
}
</style>