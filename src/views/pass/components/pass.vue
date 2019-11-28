<template>
  <div>
    <h1>pass</h1>
    <div v-for="(item,index) in list" :key="index" class="pass">
      <div class="title">
        <p>【{{ item.title }}】</p>
        <div class="subject-con">
          <div class="core-subject">
            {{ item.subject }}
            <template v-if="item.subject.length > maxLength">{{ item.subject }}</template>
          </div>
        </div>
      </div>
      <div class="bar-con">
        <div class="bar" :style="{ width:`${item.amount/list[0].amount*100}%`}"></div>
        <p>{{ item.amount }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "标题1",
          subject:
            "梵蒂冈缓解客流机会解客流机会冈缓解客流机会冈缓解客流机会冈缓解客流机会",
          amount: "78"
        },
        {
          title: "标题2",
          subject:
            "梵蒂冈缓解客流机会梵蒂冈缓解客流机会梵蒂冈缓解客流机会梵蒂冈缓解客流机会",
          amount: "68"
        },
        { title: "标题3", subject: "梵蒂冈缓解客流机会", amount: "58" },
        {
          title: "标题4",
          subject: "梵蒂冈缓解客流机会梵蒂冈缓解客流机会",
          amount: "48"
        },
        {
          title: "标题5",
          subject: "梵蒂冈缓解客流机会梵蒂冈缓解客流机会梵蒂冈缓解客流机会",
          amount: "38"
        },
        { title: "标题6", subject: "梵蒂冈缓解客流机会", amount: "28" }
      ],
      scrollIndex: 0,
      maxLength: 20
    };
  },
  mounted() {
    this.passSelf();
  },
  methods: {
    passSelf() {
      // debugger
      let subjectGroup = Array.from(
        document.getElementsByClassName("core-subject")
      );
      //Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例,返回一个新的数组实例。
      const isPass = subjectGroup.some(
        item => item.innerText.length >= this.maxLength
      );
      subjectGroup.some(item => item.innerText.length >= this.maxLength);
      if (!isPass) return;
      if (subjectGroup[this.scrollIndex].innerText.length <= this.maxLength) {
        this.scrollIndex === 5 ? (this.scrollIndex = 0) : this.scrollIndex++;
        this.passSelf();
        return;
      }
      subjectGroup.filter(item => (item.style.animation = ""));
      //Array.filter()  ||filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
      const time = subjectGroup[this.scrollIndex].innerText.length * 0.15;
      subjectGroup[
        this.scrollIndex
      ].style.animation = `${time}s scrollleft linear infinite normal`;
      this.outTimer = setTimeout(() => {
        this.scrollIndex === 5 ? (this.scrollIndex = 0) : this.scrollIndex++;
        this.passSelf();
      }, time * 1000);
    }
  }
};
</script>

<style>
@keyframes scrollleft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
<style scoped lang="less">
.pass {
  width: 500px;
  display: flex;
  flex-direction: column;
  .title,
  .bar-con {
    display: flex;
    width: 100%;
  }
  .title {
    display: flex;
    .subject-con{

      overflow: hidden;
    }
    p {
      white-space: nowrap;
    }
    .core-subject {
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
    }
  }
  .bar {
    height: 30px;
    background-color: green;
  }
}
</style>