<template>
  <div>
      <div class="scroll">
          <ul class="scroll-box" ref='scroll-box'>
              <li v-for="(item,index) in showData" :key="index"></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          subject: "水你喝对了吗？哪些水可以大量喝，又有哪些不可以呢",
          url: "http://h_.thehaunt.org/wei/?id=5959510",
          uname: "民生健康视频",
          platform: "淘新闻"
        },
        {
          subject: "保持思考，青年不老",
          url: "http://www.toutiao.com/item/6723073013106868739",
          uname: "",
          platform: "今日头条"
        },
        {
          subject: "奔跑吧兄弟，鹿晗吃了孙俪的亏，决定帮助陈赫，即便杨颖是女生",
          url: "http://h_.thehaunt.org/wei/?id=5890895",
          uname: "好多娱视频",
          platform: "淘新闻"
        },
        {
          subject: "回复:今天,我要顶风帮“美帝良心想”说句话",
          url:
            "http://tieba.baidu.com/p/6217741556?pid=126952027056&cid=0#126952027056",
          uname: "树ZJH",
          platform: "百度贴吧"
        },
        {
          subject: "中关村“下海”的先驱们",
          url: "http://www.chinavalue.net/Biz/Blog/2019-8-6/1817283.aspx",
          uname: "杜猛",
          platform: "价值中国网"
        },
        {
          subject: "今天,我要顶风帮“美帝良心想”说句话",
          url:
            "http://tieba.baidu.com/p/6216827179?pid=126937146000&cid=0#126937146000",
          uname: "树ZJH",
          platform: "百度贴吧"
        },
        {
          subject: "又一国产巨头深陷泥潭 曾是民族企业骄傲 今业绩下滑“人设崩塌”",
          url:
            "https://finance.sina.com.cn/stock/relnews/hk/2019-08-02/doc-ihytcitm6433601.shtml",
          uname: "",
          platform: "新浪网"
        },
        {
          subject: "又一国产巨头深陷泥潭 曾是民族企业骄傲 今业绩下滑“人设崩塌”",
          url: "http://baijiahao.baidu.com/s?id=1640734417931688028",
          uname: "商媒体",
          platform: "百家号"
        },
        {
          subject: "如何合理规避财税风险，为企业间接性带来“利润”",
          url:
            "http://mp.weixin.qq.com/s?__biz=MzA3NDIzNTExOQ==&mid=2651444011&idx=2&sn=848c4e2d01062da6cf488332a632557f&chksm=84ff9eabb38817bd19dd445eb89594bcbe30f7cf5bf6da817d34109a63e01fcc3483fab6a7a6&scene=27#wechat_redirect",
          uname: "企业管理读书会",
          platform: "微信"
        },
        {
          subject: "企业经营萧条？对观金钱的价值和意义！",
          url: "http://www.pinlue.com/article/2019/07/2913/219405698704.html",
          uname: "完美自己",
          platform: "品略 "
        },
        {
          subject: "坐下听我讲个中国电子元器件干爆小日本的故事",
          url: "http://www.toutiao.com/item/6718943137542177292",
          uname: "",
          platform: "谈谈芯"
        },
        {
          subject: "万乃容谈财商与家庭教育——丢了品格，钱就象顺着指缝流走的沙",
          url: "https://zhuanlan.zhihu.com/p/75601738",
          uname: "远东谈营养",
          platform: "知乎"
        },
        {
          subject: "为什么国企中没有一个像华为、阿里、腾讯、百度一样的企业……？",
          url: "https://www.zhihu.com/question/325486398/answer/764976127",
          uname: "沙羡君",
          platform: "知乎"
        },
        {
          subject:
            "【浪潮信息最终没有跟上浪潮】让我们回到上世纪80年代末90年代初吧。彼时，信息化浪潮开始席卷神州大地",
          url: "http://www.toutiao.com/item/1639475848891395",
          uname: "",
          platform: "投行大师兄"
        },
        {
          subject: "工厂将撤出中国？并站队高通拒绝华为，网友：“美国良心企业”",
          url:
            "http://mp.weixin.qq.com/s?__biz=MzU5MjY2Nzc0Ng==&mid=2247487107&idx=6&sn=43b2401a528f3c1acbce8d0ab71cd796&scene=0",
          uname: "励志班",
          platform: "微信"
        },
        {
          subject: "中国散伙人",
          url:
            "http://mp.weixin.qq.com/s?__biz=MzU5NTgzOTA2OA==&mid=2247484132&idx=1&sn=f7ea707ef4933581b059c5bde69616d6&scene=0",
          uname: "正天股份",
          platform: "微信"
        },
        {
          subject: "那些口碑崩塌的企业，最后都怎么样了？",
          url: "https://ishare.ifeng.com/c/s/7oPHV52OP68",
          uname: "科技怪人",
          platform: "凤凰新闻"
        },
        {
          subject: "杨元庆豪言高通最强，移动“直接打脸”，网友：支持华为很难吗？",
          url: "http://dy.163.com/v2/article/detail/EK5EC16G0529UH4S.html",
          uname: "盛夏的淘金客",
          platform: "网易号"
        },
        {
          subject: "杨元庆豪言高通最强，移动“直接打脸”，网友：支持华为很难吗？",
          url: "http://dy.163.com/v2/article/detail/EK55D73H05318X7Y.html",
          uname: "聚友科技说",
          platform: "网易号"
        },
        {
          subject: "杨元庆豪言高通最强，移动“直接打脸”，网友：支持华为很难吗？",
          url: "http://baijiahao.baidu.com/s?id=1639116539199604397",
          uname: "聚友科技说",
          platform: "百家号"
        }
      ],
      showData:[],
      gitData:[],
      scrollTop:0,
    };
  },
  mounted () {
      this.scrollTop();
  },
  methods: {
      scrollTop() {
          this.scrollTop = this.$refs.getBoundingClientRect().height
          console.log(this.scrollTop);
          
      }
  },
};
</script>

<style lang="less" scoped>
.scroll{
    width: 230px;
    height: 400px;
    background-color: #fff;
}
</style>