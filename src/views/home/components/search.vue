<template>
  <div class="search-wrapper">
    <div class="navmenuSelect">
      <el-select v-model="value" placeholder="请选择" @change="selectChange(value)">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          size="mini"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <input
      v-model.trim="val"
      maxlength="40"
      type="text"
      :placeholder="placeholder"
      @keyup="keyup"
      @change="handleChange"
    />
    <i class="iconfont icon-Clear clear-input" v-show="val != ''" @click="clear"></i>
    <i @click="search" class="iconfont icon-fangdajing fangdajing">搜索</i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "",
      value: "all",
      options: [
        {
          value: "all",
          label: "全部"
        },
        {
          value: "subject",
          label: "标题"
        },
        {
          value: "uname",
          label: "作者"
        },
        {
          value: "platform",
          label: "平台"
        }
      ]
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "搜索"
    }
  },
  methods: {
    selectChange(val) {
      console.log(val);
    },
    keyup(e) {
      if (e.keyCode === 13) {
        console.log(e.keyCode);
        this.search();
      }
    },
    handleChange() {},
    clear() {},
    search() {}
  }
};
</script>

<style lang="less">
.navmenuSelect {
  .el-input__inner {
    height: 38px;
    border: none;
    outline: none;
    border-right: #333;
    border-radius: 20px;
  }
}
</style>
<style lang="less" scoped>
.search-wrapper {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #333;
  border-radius: 20px;
  display: flex;
  height: 40px;
  //   overflow: hidden;
  .navmenuSelect {
    height: 40px;
    width: 10%;
  }
  input {
    border: none;
    outline: none;
    width: 80%;
  }
  input::placeholder {
    font-size: 14px;
  }
  .fangdajing {
    width: 11%;
    line-height: 40px;
    cursor: pointer;
    background-color: #409eff;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: #fff;
  }
}
</style>