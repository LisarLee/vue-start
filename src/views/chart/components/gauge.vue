<template>
  <div>
    <h2>联想净情感指数PSI</h2>
    <div class="psi-chart">
      <div id="psi-chart"></div>
      <!-- <div class="psi-detail">
        <p class="pos">
          <span>正:</span>
          <span>{{ positive }}</span>
        </p>
        <p class="neutral">
          <span>中:</span>
          <span>{{ neutral }}</span>
        </p>
        <p class="neg">
          <span>负:</span>
          <span>{{ negative }}</span>
        </p>
      </div>-->
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      chart: null,
      psi: 0,
      positive: 0,
      neutral: 0,
      negative: 0,
      option: {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            name: "净情感指数PSI",
            type: "gauge",
            radius: "75%",
            center: ["45%", "50%"],
            startAngle: 225,
            endAngle: -45,
            clockwise: true,
            min: -100,
            max: 100,
            splitNumber: 10,
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: "#b22b5d"
                      },
                      {
                        offset: 0.1,
                        color: "#6e1d49"
                      },
                      {
                        offset: 0.5,
                        color: "#19132e"
                      },
                      {
                        offset: 0.5,
                        color: "#19132e"
                      },
                      {
                        offset: 0.8,
                        color: "#273679"
                      },
                      {
                        offset: 1,
                        color: "#3953b9"
                      }
                    ])
                  ]
                ]
              }
            },
            splitLine: {
              show: false
            },

            axisTick: {
              show: false
            },

            axisLabel: {
              show: false
            },

            pointer: {
              show: true,
              length: "50%",
              width: 4
            },

            itemStyle: {
              normal: {
                color: "#fff",
                opacity: 1,
                borderWidth: 0,
                borderType: "solid",
                borderColor: "#fff"
              }
            },
            title: {
              show: true,
              offsetCenter: [0, "20%"],
              color: "#fff",
              fontSize: 20
            },
            detail: {
              show: true,
              color: "#666",
              formatter: function(value) {
                let val;
                val = value >= 0 ? "+" + value : value;
                return val;
              }
            },
            data: [
              {
                value: 0,
                label: {
                  textStyle: {
                    fontSize: 12
                  }
                }
              }
            ]
          },
          {
            type: "gauge",
            center: ["45%", "50%"],
            radius: "50%",
            startAngle: "0",
            endAngle: "-359.99",
            splitNumber: "100",
            pointer: {
              show: false
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            // data: [{ value: 95, name: "完成率" }],
            axisLine: {
              lineStyle: {
                width: 20,
                opacity: 0
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              length: 2,
              lineStyle: {
                // color: "rgba(255,255,255,1)",
                color: "#6e1d49",
                width: 2,
                type: "solid"
              }
            },
            axisLabel: {
              show: false
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.getPsi();
    // this.timer = setInterval(() => {
    //   this.getPsi()
    // }, 1 * 60 * 1000)
  },
  beforeDestroy() {
    // this.timer && clearInterval(this.timer)
  },
  methods: {
    getPsi() {
      this.chart = this.$echarts.init(document.getElementById("psi-chart"));
      this.option.series[0].data[0].value = 80;
      this.chart.setOption(this.option);
      //   this.numFun.call(this, this.positive, result['1'] || 0, 'positive')
      //   this.numFun.call(this, this.neutral, result['0'] || 0, 'neutral')
      //   this.numFun.call(this, this.negative, result['-1'] || 0, 'negative')
    }
  }
};
</script>

<style lang="less" scoped>
.psi-chart {
  flex: 1;
  display: flex;
  align-items: center;
  #psi-chart {
    width: 500px;
    height: 500px;
  }
  .psi-detail {
    width: 30%;
    p {
      font-size: 0.24rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.39rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .pos span {
      color: #4467f6;
    }
    .neutral span {
      color: #1bd8c2;
    }
    .neg span {
      color: #ff106e;
    }
  }
}
</style>
