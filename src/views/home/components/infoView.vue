<template>
  <div>
    <div class="title-con">
      <span class="emotion" :class="{pos:data.emotion===0}" v-if="data.emotion===0">中性</span>
      <span class="emotion" :class="{neutral:data.emotion===1}" v-if="data.emotion===1">正面</span>
      <span class="emotion" :class="{neg:data.emotion===-1}" v-if="data.emotion===-1">负面</span>
      <p class="title">{{ data.subject }}</p>
      <!-- slice(beginIdx,endIdx) ，方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。同substring -->
      <!-- str.subStr(beginIdx(,length)) 不建议使用【MDN】-->
      <span
        class="tag"
        :class="{lenovo:data.keyTag.slice(0,1)==='1'}"
        v-if="data.keyTag.slice(0,1)==='1'"
      >{{ tagMap[data.keyTag]}}</span>
      <span
        class="tag"
        :class="{friend:data.keyTag.slice(0,1)==='0'}"
        v-if="data.keyTag.slice(0,1)==='0'"
      >{{ tagMap[data.keyTag]}}</span>
      <span
        class="tag"
        :class="{instruty:data.keyTag.slice(0,1)==='2'}"
        v-if="data.keyTag.slice(0,1)==='2'"
      >行业</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      tagMap: {
        "0_1": "友商:华为",
        "0_2": "友商:小米",
        "0_3": "友商:惠普",
        "0_4": "友商:戴尔",
        "0_5": "友商:阿里",
        "0_6": "友商:腾讯",
        "0_7": "友商:微软",
        "0_8": "友商:高通",
        "0_9": "友商:英特尔",
        "0_10": "友商:宏碁",
        "0_11": "友商:华硕",
        "0_12": "友商:百度",
        "0_13": "友商:苹果",
        "0_14": "友商:三星",
        "0_15": "友商:oppo",
        "0_16": "友商:vivo",
        "0_17": "友商:魅族",
        "0_18": "友商:NETAPP",
        "0_19": "友商:谷歌",
        "0_20": "友商:一加",
        "0_21": "友商:LG",
        "0_22": "友商:中兴",
        "0_23": "友商:其他",
        "1_0": "联想:敏感",
        "1_1": "联想:高层",
        "1_2": "联想:产品/服务",
        "1_3": "联想:品牌",
        "2": "行业"
      }
    };
  }
};
</script>

<style lang="less" scoped>
.title-con {
  display: flex;
  align-items: center;
  .emotion {
    padding: 2px 5px;
    border-radius: 4px;
    color: #fff;
    margin-right: 10px;
    background-color: #4c70f5;
  }
  .pos {
    background-color: #4c70f5;
  }
  .neutral {
    background-color: #8bb9f4;
  }
  .neg {
    background-color: #ed6a4c;
  }
  .tag {
    padding: 0px 4px;
    margin-left: 10px;
  }
  .lenovo {
    color: #53bad1;
    border: 1px solid #53bad1;
  }
  .friend {
    color: #78b178;
    border: 1px solid #78b178;
  }
  .instruty {
    color: #7e2c89;
    border: 1px solid #7e2c89;
  }
}
</style>