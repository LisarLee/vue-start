<template>
  <div>
    <h1>string</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "helloworld"
    };
  },
  mounted() {
    this.replace();
  },
  methods: {
    reg(){},
    replace() {
      /**
       * [xyz]一个字符集合。匹配方括号中的任意字符
       * [^xyz]一个反向字符集,匹配任何没有包含在方括号中的字符。
       *
       */
      // let string = "font-size:41.36px;"
      // let reg = /[^0-9\.]/g
      // let reg = /[^\d\.]/g
      // console.log(string.replace(reg,""));

      /**
       *
       * $1;$2
       * $&表示整个被匹配的字符串
       */
      //   var re = /(\w+)\s(\w+)/;
      //   var str = "John Smith";
      //   var newstr = str.replace(re, "$2, $1");
      //   console.log(newstr);//   Smith, John
      /**
       * 
       */
        //   const length = 15;
        //   const reg = new RegExp(`(.{${length}})`, "g");
        //   const subject =
        // data.subject.length > length
        //   ? data.subject.replace(reg, "$1<br/>")
        //   : data.subject;

      /**
      量词符
      +   ====>{1,}1到多个
      *   ====>{0，}0到多个
      ？   ====>{0，1}出现0次或1次
       */
      //  let str = 'sdfghjssuhbnnsall'
      //  let newStr = str.replace(/s/g,'yes')
      //  console.log(newStr);
      //  console.log(str);
      //  let newArr = str.split('')
      //  console.log(newArr);

      // newArr.forEach((item,idx)=>{
      //   if(item==='s'){
      //     newArr[idx]='yes'
      //   }
      // })
      // console.log(newArr);
      // let newStr = newArr.join('')
      // console.log(newStr);
      
      var str = 'asdfghjkl'
      let reg = /^as/
      console.log(reg.test(str));
      
      /***
          组匹配
       */
       
    }
  }
};
</script>

<style lang="less" scoped>
</style>