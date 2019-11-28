<template>
  <div></div>
</template>

<script>
export default {
  props: {
    colorRange: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    getOption() {
      return {
        legend: {
          show: false,
          data: [
            { name: "红色预警", icon: "circle" },
            { name: "黄色预警", icon: "circle" },
            { name: "橙色预警", icon: "circle" },
            { name: "蓝色预警", icon: "circle" }
          ]
        },
        color: ["#fec2b6", "#fff0c6", "#ffdabb", "#afbfff"],
        tooltip: {
          trigger: "axis",
          extraCssText: "box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);",
          backgroundColor: "#fff",
          textStyle: {
            fontSize: "12",
            color: "#333"
          },
          axisPointer: {
            type: "line"
          }
        },
        grid: {
          bottom: "3%",
          left: "10",
          right: "34px",
          top: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: ["20%", "20%"],
          data: [],
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff",
              width: "0"
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 90,
            textStyle: {
              color: "#4A4A4A",
              fontSzie: "14px"
            }
          }
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
                width: "0"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#EFEFEF", "#EFEFEF"],
                width: 1,
                type: "solid"
              }
            },
            splitArea: {
              areaStyle: {
                color: ["rgba(200,200,200,0.2)", "rgba(250,250,250,0.3)"]
              }
            },
            axisLabel: {
              formatter: "{value}",
              color: "#4A4A4A",
              fontSize: "14px"
            }
          }
        ],
        series: [
          {
            name: "蓝色预警",
            type: "bar",
            stack: "总量",
            barMinWidth: 12, //最小柱图宽度
            barMaxWidth: 12, //最大柱图宽度
            itemStyle: {
              normal: {
                color: "#607fff",
                barBorderRadius: [0, 0, 12, 12]
              }
            },
            label: {
              normal: {
                show: false,
                position: "inside",
                align: "center"
              }
            },
            data: []
          },
          {
            name: "黄色预警",
            type: "bar",
            stack: "总量",
            barMinWidth: 12, //最小柱图宽度
            barMaxWidth: 12, //最大柱图宽度
            itemStyle: {
              normal: {
                color: "#ffe18e"
              }
            },
            label: {
              normal: {
                show: false,
                position: "inside",
                align: "center"
              }
            },
            data: []
          },
          {
            name: "橙色预警",
            type: "bar",
            stack: "总量",
            barMinWidth: 12, //最小柱图宽度
            barMaxWidth: 12, //最大柱图宽度
            itemStyle: {
              normal: {
                color: "#ffb577"
              }
            },
            label: {
              normal: {
                show: false,
                position: "inside",
                align: "center"
              }
            },
            data: []
          },
          {
            name: "红色预警",
            type: "bar",
            stack: "总量",
            barMinWidth: 12,
            barMaxWidth: 12,
            itemStyle: {
              normal: {
                color: "#fd866e",
                barBorderRadius: [12, 12, 0, 0]
              }
            },
            label: {
              normal: {
                show: false,
                position: "inside",
                align: "center"
              }
            },
            data: []
          }
        ]
      };
    }
  }
};
</script>

<style lang="less" scoped>
</style>