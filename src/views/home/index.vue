<template>
  <div class="home">
    <search />
    <sortList v-for="item in MenuTagList" :key="item.type" :content='item' :callBack='handleClick'/>
    <!-- <sortList v-for="(item,idxs) in MenuTagList" :key="idxs" :content='item' @callBack='handleClick'/> -->
    <infoView v-for="(item,idx) in data" :key="idx" :data='item' class="info-view"/>
  </div>
</template>

<script>
import infoView from "./components/infoView.vue"
import search from "./components/search.vue"
import sortList from "./components/sortList.vue"
import tagView from "./components/tagView.vue"
import { LenovoTagList, FriendsTagList, MenuTagList } from "./dynamics/json.js"

export default {
  data() {
    return {
      data: [
        {
          cid: "8dc1244768847c9fbf85018b9705ae18_all",
          sid: "d65d9588-0981-11ea-ac90-fa163ee69a87",
          subject: "市场监管总局中止调查联想垄断案",
          summary:
            "国家市场监管总局反垄断局日前披露，因积极配合调查整改，联想公司垄断案被监管部门中止调查。联想公司应于本月30日前向监管部门提交履行承诺情况的书面报告。根据举报线索，北京市市场监管局自2017年11月9日对联想公司涉嫌垄断行为开展了初步调查。调查情况显示，联想公司作为该品牌电脑及相关产品的生产、销售和售后服务企业，自2016年至2017年10月期间，要求品牌授权服务站执行在一定时期内、部分配件选件及服务产品的最低转售价格。",
          publishTime: "2019-11-18 11:20:42",
          url:
            "http://a.mp.uc.cn/article.html?uc_param_str=&from=media#!wm_cid=322973240702013440!!wm_aid=72d2f2a516bb25e941519ad64a19b066!!wm_id=b6ce593ab37949ec8a900202a616f943",
          source: "北京日报",
          platform: "大鱼号",
          similarCount: 122,
          emotion: 0,
          keyTag: "1_3",
          isIndustry: 0,
          warningLevel: 0,
          docTag:
            '{"lvl1_category_cd": 1, "lvl2_category_cd": 3, "is_sensitive": 0, "is_industry": 0, "is_coreMedia": 1}',
          sensitive: 0,
          publishDate: 1574047242000
        },
        {
          cid: "918b8b5b108fa937b336d205612a4568_all",
          sid: "e8bb7a98-09b2-11ea-a35e-fa163ee69a87",
          subject: "联想加码“智慧中国”，携手中国女排勇攀高峰",
          summary:
            "以“联想智慧中国”为主题的2019联想创新科技大会11月15日进行到个人智能日大会。大会全程高能，2000位嘉宾不仅倾听到大咖们畅谈未来产业变革图景，抢先一睹如ThinkPad折叠屏PC、motorolarazr折叠屏手机等产品的风采，更近距离地探秘智能科技在国产大飞机、气象站、传统生产制造等环节中的创新应用。",
          publishTime: "2019-11-18 10:59:00",
          url:
            "http://www.ce.cn/xwzx/gnsz/gdxw/201911/18/t20191118_33631650.shtml",
          source: "",
          platform: "中国经济网",
          similarCount: 1,
          emotion: 1,
          keyTag: "1_2",
          isIndustry: 0,
          warningLevel: 0,
          docTag:
            '{"lvl1_category_cd": 1, "lvl2_category_cd": 2, "is_sensitive": 0, "is_industry": 0, "is_coreMedia": 1}',
          sensitive: 0,
          publishDate: 1574045940000
        },
        {
          cid: "bb0a40391ae610ee51318afb8ce06192_all",
          sid: "0b8a2958-09ad-11ea-9005-fa163ee69a87",
          subject: "消费电子进入“折叠时代”，5G＋柔性屏上游产业链将受益",
          summary:
            "11月18日早盘，柔性屏概念涨幅居前，截至发稿，国风塑业、界龙实业、智云股份等4股涨停，同兴达涨逾9%，智动力涨近7%，传艺科技、深天马A、凯盛科技等多股纷纷拉升。近段时间，随着三星GalaxyFold、华为MateX相继开卖，以及还有一些智能设备也在以各种形态变身“折叠屏”，消费电子产品正在进入“折叠时代”。",
          publishTime: "2019-11-18 10:50:30",
          url: "https://new.qq.com/omn/20191118/20191118A061P100.html",
          source: "第一财经",
          platform: "腾讯网",
          similarCount: 11,
          emotion: 0,
          keyTag: "1_2",
          isIndustry: 0,
          warningLevel: 0,
          docTag:
            '{"lvl1_category_cd": 1, "lvl2_category_cd": 2, "is_sensitive": 0, "is_industry": 0, "is_coreMedia": 1}',
          sensitive: 0,
          publishDate: 1574045430000
        },
        {
          cid: "eff83035b887801d2c54dd7fef3ddfad_all",
          sid: "cee54968-093b-11ea-b05e-fa163ee69a87",
          subject: "折叠Razr的背后逻辑：联想能否打破智能手机的“情怀”魔咒？",
          summary:
            "2019联想科技创新大会，图片来源@视觉中国文丨孙永杰日前，联想在其第五届联想创新科技大会上发布了摩托罗拉Razr可折叠手机，一时间在海内外引起了强烈反响，而这可能是联想为数不多的能引起如此广泛关注和议论的手机。",
          publishTime: "2019-11-18 10:50:00",
          url:
            "https://ishare.ifeng.com/c/s/v0028-_JnbyV89--uPq4x8qg8XM8o7h8YDggxz8mzUWHhaqFQ__",
          source: "钛媒体",
          platform: "凤凰新闻",
          similarCount: 36,
          emotion: 0,
          keyTag: "1_2",
          isIndustry: 0,
          warningLevel: 0,
          docTag:
            '{"lvl1_category_cd": 1, "lvl2_category_cd": 2, "is_sensitive": 0, "is_industry": 0, "is_coreMedia": 1}',
          sensitive: 0,
          publishDate: 1574045400000
        },
        {
          cid: "e1b587da032d243da8c40566b0ac51b9_all",
          sid: "cd2c467c-09ad-11ea-b985-fa163ee69a87",
          subject: "联想开启个人云存储值得入手吗？",
          summary:
            "2017年开始，越来越多的用户开始关注NAS产品。最初的NAS设备价格较高，面向群体主要是企业，随着互联网及大数据的发展，个人及家庭对于数据存储的意识逐渐兴起，家庭私有云盘产品应运而生。品应运而生。联想开启个人云存储，在这样的市场背景下面世，作为联想消费SIoT的核心产品，致力打造低于1000元，性价比高、存储空间大、传输速度快的家庭云盘，全力提升家庭个人数据安全。",
          publishTime: "2019-11-18 10:43:38",
          url: "https://xueqiu.com/9144781031/135903887",
          source: "",
          platform: "雪球",
          similarCount: 9,
          emotion: 0,
          keyTag: "1_2",
          isIndustry: 0,
          warningLevel: 0,
          docTag:
            '{"lvl1_category_cd": 1, "lvl2_category_cd": 2, "is_sensitive": 0, "is_industry": 0, "is_coreMedia": 1}',
          sensitive: 0,
          publishDate: 1574045018000
        },
        {
          cid: "1db902c251e92e925f11c5c38d3838af_all",
          sid: "ce37900e-09ac-11ea-acc6-fa163ee69a87",
          subject:
            "数字化智库型财经媒体领跑者《21世纪经济报道》今日于广州举办2019中国智造业年会。华为云、联想集团",
          summary:
            "数字化智库型财经媒体领跑者《21世纪经济报道》今日于广州举办2019中国智造业年会。华为云、联想集团、美的集团、工业富联、渣打银行（中国）、京东物流、极飞科技、腾讯云、中国移动通信研究院、千寻位置、高新兴科技集团、哈啰出行、高德地图、如祺出行、上海西井、G7 、极智嘉等专家齐聚一堂，畅论 ​",
          publishTime: "2019-11-18 10:35:40",
          url: "http://weibo.com/1651428902/IgKGkmv8f",
          source: "21世纪经济报道",
          platform: "微博",
          similarCount: 1,
          emotion: 0,
          keyTag: "1_3",
          isIndustry: 0,
          warningLevel: 0,
          docTag:
            '{"lvl1_category_cd": 1, "lvl2_category_cd": 3, "is_sensitive": 0, "is_industry": 0, "is_coreMedia": 1}',
          sensitive: 0,
          publishDate: 1574044540000
        },
        {
          cid: "510c9a67a4d5ec863c705cda8d98f8ed_all",
          sid: "f146588c-09a7-11ea-9ed2-fa163ee69a87",
          subject: "联想开启个人云存储体验：多端互通易上手 海量数据巧备份",
          summary:
            "随着智能手机、移动互联网、通信技术、大数据和人工智能的革新和进步，数据成为未来最重要的价值，个人数据的存储问题，已经成为市场的重要痛点和刚需。2017年开始，越来越多的用户开始关注NAS产品。最初的NAS设备价格较高，面向群体主要是企业，随着互联网及大数据的发展，个人及家庭对于数据存储的意识逐渐兴起，家庭私有云盘产品应运而生。品应运而生。",
          publishTime: "2019-11-18 10:26:51",
          url: "https://xueqiu.com/9144781031/135902068",
          source: "",
          platform: "雪球",
          similarCount: 18,
          emotion: 0,
          keyTag: "1_2",
          isIndustry: 0,
          warningLevel: 0,
          docTag:
            '{"lvl1_category_cd": 1, "lvl2_category_cd": 2, "is_sensitive": 0, "is_industry": 0, "is_coreMedia": 1}',
          sensitive: 0,
          publishDate: 1574044011000
        },
        {
          cid: "64f05678339e326c3c5b1af817fd544c_impl",
          sid: "dca238a6-09b1-11ea-aab8-fa163e2c51fd",
          subject:
            "阿里巴巴这个时间点在港股上市，你们猜出其中奥妙了吗？ 这样庞",
          summary:
            "阿里巴巴这个时间点在港股上市，你们猜出其中奥妙了吗？这样庞大的企业帝国，必然与国家命运同相惜。今年8月就传言要尽快上市，但是一拖再拖，这次直接一路绿灯，审核都不需要，聆讯即可直接港股敲钟。为啥？为什么手里握着2400亿现金还要募集那么点资金呢？因为时不我待，王八蛋空头们正在希望我国乱，越乱她们越是有利可图，做空的可以赚取大把美金，香港那边已经可以说是造反上天了，这时候港独攻击港交所目的很明确，就是港股跌下去，空头们大赚特赚。",
          publishTime: "2019-11-18 10:19:36",
          url: "https://xueqiu.com/2602254471/135901345",
          source: "",
          platform: "雪球",
          similarCount: 1,
          emotion: 0,
          keyTag: "1_2",
          isIndustry: 1,
          warningLevel: 0,
          docTag:
            '{"lvl1_category_cd": 1, "lvl2_category_cd": 2, "is_sensitive": 0, "is_industry": 1, "is_coreMedia": 1}',
          sensitive: 0,
          publishDate: 1574043576000
        },
        {
          cid: "f5b619dd814ca9dfbd55fa9283fe58e3_impl",
          sid: "be965b24-09ae-11ea-b4b5-fa163e2c51fd",
          subject:
            "【华为Mate X & 三星Galaxy Fold[并不简单]它才是今年的折叠KING！】\n华为Ma",
          summary:
            "【华为Mate X & 三星Galaxy Fold[并不简单]它才是今年的折叠KING！】\n华为Mate X与三星Galaxy Fold，两款同样采用折叠屏设计的智能手机，都在2019年2月初次与世界见面，中间经历了各种各样工艺上的问题，又都在11月正式开售。如此相同的命运，又都同样被赋予了划时代的意义，[哆啦A梦吃惊]不得不让人们 ​",
          publishTime: "2019-11-18 10:18:22",
          url: "http://weibo.com/1856404484/IgKziwRtd",
          source: "凤凰网科技",
          platform: "微博",
          similarCount: 6,
          emotion: 0,
          keyTag: "1_2",
          isIndustry: 1,
          warningLevel: 0,
          docTag:
            '{"lvl1_category_cd": 1, "lvl2_category_cd": 2, "is_sensitive": 0, "is_industry": 1, "is_coreMedia": 1}',
          sensitive: 0,
          publishDate: 1574043502000
        },
        {
          cid: "5764d3c7ad9b12a6fe99bcf1a20ee038_all",
          sid: "ea566f38-06bb-11ea-9c5e-fa163ee69a87",
          subject: "童夫尧：智能基础架构奠定行业智能基石",
          summary:
            "中新网11月14日电11月14日，在以“联想智慧中国”为主题的联想创新科技大会2019上，联想集团高级副总裁、企业业务集团总裁童夫尧作主题演讲。他表示，针对企业智能化转型驱动企业计算力升级为智能计算，联想提出了端-边-云-网智能计算架构，为企业智能化转型和算力升级提供技术、产品和解决方案支持。",
          publishTime: "2019-11-18 10:09:00",
          url: "http://www.ce.cn/xwzx/kj/201911/18/t20191118_33630525.shtml",
          source: "",
          platform: "中国经济网",
          similarCount: 45,
          emotion: 1,
          keyTag: "1_1",
          isIndustry: 0,
          warningLevel: 0,
          docTag:
            '{"lvl1_category_cd": 1, "lvl2_category_cd": 1, "is_sensitive": 0, "is_industry": 0, "is_coreMedia": 1}',
          sensitive: 0,
          publishDate: 1574042940000
        }
      ],
      MenuTagList,
    };
  },
  components: {
    infoView,
    search,
    sortList,
    tagView
  },
  methods: {
    handleClick(val){
      console.log(val);
      
    }
  }
};
</script>

<style scoped lang="less">
.home{
  box-sizing: border-box;
  padding: 0 10%;
  .info-view{
    margin-bottom: 10px;
  }
}
.home {
  font-size: 14px;
  .transform {
    height: 40px;
    .down {
      transform: rotate(90deg); //方向向下
      color: darkred;
    }
    .rise {
      color: darkgreen;
      // transform: rotate(90deg);//方向向下
      transform: rotate(-90deg); //方向向下
      // transform: rotate(0.25turn);//方向向下
      //  transform: scale(0.7);//变大小
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
}
</style>