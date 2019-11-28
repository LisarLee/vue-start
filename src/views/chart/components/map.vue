<template>
  <div>
    <div class="wrapper">
      <header class="tc">
        <h2 class="fs34">舆情监测平台</h2>
        <div class="time fs20 cr06">2017.03.01-2017.04.26</div>
      </header>
      <section class="main clearfix">
        <div class="m-r r">
          <div class="mCont mb10">
            <p class="line2">
              <img src="/themes/blue/html/images/keshihua/mcont-bg2.png" />
            </p>
            <h3 class="mCont-tit mCont-tit-bg2 fs24 ar">
              <label class>活跃公号</label>
            </h3>
            <div id="mostFansCity" class="echarTabs"></div>
          </div>
          <div class="mCont mb10">
            <p class="line2">
              <img src="/themes/blue/html/images/keshihua/mcont-bg2.png" />
            </p>
            <h3 class="mCont-tit mCont-tit-bg2 fs24 ar">
              <label>主题词云</label>
            </h3>
            <div id="hotwordsCloud" class="echarTabs"></div>
          </div>
        </div>
        <div class="m-l l">
          <div class="mCont mb10">
            <p class="line2">
              <img src="/themes/blue/html/images/keshihua/mcont-bg2.png" />
            </p>
            <h3 class="mCont-tit fs24">
              <label>舆情统计</label>
            </h3>
            <div class="mCont-echarts">
              <div id="publicNumbTop" class="echarTabs"></div>
              <div class="echarNubs fs16">
                <ul>
                  <li>
                    <span>27%</span>
                  </li>
                  <li>
                    <span>22%</span>
                  </li>
                  <li>
                    <span>18%</span>
                  </li>
                  <li>
                    <span>13%</span>
                  </li>
                  <li>
                    <span>12%</span>
                  </li>
                  <li>
                    <span>8%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mCont mb10">
            <p class="line2">
              <img src="/themes/blue/html/images/keshihua/mcont-bg2.png" />
            </p>
            <h3 class="mCont-tit fs24">
              <label>情感属性</label>
            </h3>
            <div class="echarTabs">
              <div id="emotion"></div>
              <div class="fans-cricle1">
                <img src="/themes/blue/html/images/keshihua/fans-cricle1.png" />
              </div>
              <div class="fans-cricle2">
                <img src="/themes/blue/html/images/keshihua/fans-cricle1.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="m-c l">
          <div id="publicNumMap" class="echarTabs"></div>
        </div>
        <div class="m-w50 r">
          <p class="line2">
            <img src="/themes/blue/html/images/keshihua/mcont-bg3.png" />
          </p>
          <h3 class="mCont-tit mCont-tit-bg4 fs24 ar">
            <label>热词走势</label>
          </h3>
          <div id="hotWord" class="echarTabs"></div>
        </div>
        <div class="m-w50 l">
          <p class="line2">
            <img src="/themes/blue/html/images/keshihua/mcont-bg3.png" />
          </p>
          <h3 class="mCont-tit mCont-tit-bg3 fs24">
            <label>负面情感走势</label>
          </h3>
          <div id="monitNum" class="echarTabs"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: value
    };
  },
  methods: {
    showPublicNumMap() {
      var docmW = $(".m-r").height();
      $("#publicNumMap").height(docmW);
      var box = echarts.init(document.getElementById("publicNumMap"));
      var data = [
        { name: "西安市", value: 300 },
        { name: "宝鸡市", value: 72 },
        { name: "咸阳市", value: 43 },
        { name: "渭南市", value: 72 },
        { name: "铜川市", value: 140 },
        { name: "汉中市", value: 52 },
        { name: "商洛市", value: 41 },
        { name: "安康市", value: 35 },
        { name: "延安市", value: 38 },
        { name: "榆林市", value: 39 }
      ];
      var geoCoordMap = {
        西安市: [108.95, 34.27],
        宝鸡市: [107.15, 34.38],
        咸阳市: [108.72, 34.36],
        渭南市: [109.5, 34.52],
        铜川市: [109.11, 35.09],
        汉中市: [107.045478, 33.081569],
        商洛市: [109.939776, 33.868319],
        安康市: [109.038045, 32.70437],
        延安市: [109.47, 36.6],
        榆林市: [109.745926, 38.279439]
      };

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value).concat(100)
            });
          }
        }
        return res;
      };

      option = {
        tooltip: {
          trigger: "item"
        },
        geo: {
          map: "shanxi1",
          left: "8%",
          right: "8%",
          label: {
            emphasis: {
              show: false
            }
          },
          layoutCenter: ["50%", "50%"],
          layoutSize: 580,
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#004999",
              borderColor: "#3178be",
              shadowBlur: 0,
              shadowColor: "#3178be"
            },
            emphasis: {
              areaColor: "#0e3f6b"
            }
          }
        },
        series: [
          {
            name: "pm2.5",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#ddb926"
              }
            }
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              data
                .sort(function(a, b) {
                  return b.value - a.value;
                })
                .slice(0, 6)
            ),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#f4e925",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          }
        ]
      };
      box.setOption(option);
    },
    publicNumbTop() {
      var box = echarts.init(document.getElementById("publicNumbTop"));
      var dataYxis = ["客户端", "微信", "微博", "报刊", "网页", "论坛"];
      var data = [920, 855, 803, 798, 734, 633];
      var yMax = 1920;
      var dataShadow = [];

      for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      var fontsz = winRate * 16;
      option = {
        grid: {
          left: "6%",
          right: "10%",
          top: "7%",
          bottom: "0",
          containLabel: true
        },
        xAxis: {
          type: "value",
          axisLabel: { show: false },
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false }
        },
        yAxis: {
          type: "category",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#c7c7c7",
              fontSize: fontsz
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          inverse: true,
          data: dataYxis
        },
        series: [
          {
            // For shadow
            type: "bar",
            itemStyle: {
              normal: {
                color: "#0b1e47",
                borderColor: "#00aeff",
                barBorderRadius: [10, 10, 10, 10]
              }
            },
            barGap: "-100%",
            barCategoryGap: "56%",
            z: 2,
            animation: false,
            data: [
              {
                value: dataShadow[0],
                name: dataYxis[0],
                itemStyle: {
                  normal: {
                    borderColor: "#00ffdd"
                  }
                }
              },
              {
                value: dataShadow[1],
                name: dataYxis[1],
                itemStyle: {
                  normal: {
                    borderColor: "#f83b3b"
                  }
                }
              },
              {
                value: dataShadow[2],
                name: dataYxis[2],
                itemStyle: {
                  normal: {
                    borderColor: "#ffff00"
                  }
                }
              },
              {
                value: dataShadow[3],
                name: dataYxis[3],
                itemStyle: {
                  normal: {
                    borderColor: "#00aeff"
                  }
                }
              },
              {
                value: dataShadow[4],
                name: dataYxis[4],
                itemStyle: {
                  normal: {
                    borderColor: "#00aeff"
                  }
                }
              },
              {
                value: dataShadow[5],
                name: dataYxis[4],
                itemStyle: {
                  normal: {
                    borderColor: "#00aeff"
                  }
                }
              }
            ]
          },
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#00ffdd",
                    "#f83b3b",
                    "#ffff00",
                    "#00aeff",
                    "#00aeff",
                    "#00aeff"
                  ];
                  return colorList[params.dataIndex];
                },
                barBorderRadius: [10, 10, 10, 10]
              }
            },
            barWidth: "22%",
            z: 3,
            data: data
          }
        ]
      };
      box.setOption(option);
    },
    emotionCharts() {
      var box = echarts.init(document.getElementById("emotion"));
      var data = [
        { value: 14, name: "正面" },
        { value: 26, name: "负面" },
        { value: 60, name: "中性" }
      ];
      var fontsz = winRate * 14;

      option = {
        color: ["#f85a3b", "#ff0", "#00aeff"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["42%", "63%"],
            hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: "#011137"
              },
              emphasis: {
                //图形在高亮状态下的样式
                borderColor: "#011137"
              }
            },
            label: {
              normal: {
                formatter: "{b} {c}%",
                textStyle: {
                  color: "#c7c7c7",
                  fontSize: fontsz
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "#d6e8ff"
                }
              }
            },
            data: data
          }
        ]
      };
      box.setOption(option);
    },
    monitNumCharts() {
      var box = echarts.init(document.getElementById("monitNum"));
      var dataAxis = [
        "16:10",
        "16:20",
        "16:30",
        "16:40",
        "16:50",
        "17:00",
        "17:10"
      ];
      var data = [420, 901, 934, 1290, 1430, 1720, 2320];
      var fontsz = winRate * 14;
      option = {
        tooltip: {
          //鼠标触发类型
          trigger: "axis", //item 和 axis 两种
          axisPointer: {
            //坐标轴指示器('line' ,'cross','shadow')
            lineStyle: {
              //线的颜色
              color: "#b38b0d",
              width: 1,
              type: "dashed"
            }
          }
        },

        textStyle: {
          color: "#c7c7c7",
          fontSize: fontsz
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "8%",
          top: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#0069d1"
              }
            },
            axisTick: {
              show: false
            },

            boundaryGap: false,
            data: dataAxis
          }
        ],
        yAxis: [
          {
            type: "value",

            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#0069d1"
              }
            },
            splitLine: {
              lineStyle: {
                color: "#00264d"
              }
            },
            data: dataAxis
          }
        ],
        series: [
          {
            name: "搜索引擎",
            type: "line",
            smooth: true,
            symbolSize: 8,
            itemStyle: {
              normal: { color: "#00fff8" }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(2,131,255,1)" },
                  { offset: 0.5, color: "rgba(2,131,255,0.7)" },
                  { offset: 1, color: "rgba(2,131,255,0.2)" }
                ])
              }
            },
            data: data
          }
        ]
      };

      box.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
</style>