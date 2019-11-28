<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          pid: -1,
          id: 1,
          name: "1"
        },
        {
          pid: 1,
          id: 2,
          name: "2"
        },
        {
          pid: 2,
          id: 3,
          name: "3"
        },
        {
          pid: 3,
          id: 4,
          name: "4"
        },
        {
          pid: 2,
          id: 5,
          name: "5"
        },
        {
          pid: 5,
          id: 6,
          name: "6"
        },
        {
          pid: 6,
          id: 7,
          name: "7"
        },
        {
          pid: 3,
          id: 8,
          name: "8"
        }
      ]
    };
  },
  mounted() {
    let a = this.getTree(this.data);
    console.log(JSON.stringify(a));
  },
  methods: {
    getTree(arr) {
      let menu = [];
      let mapObj = {};
      arr.forEach(item => {
        item.child = [];
        mapObj[item.id] = item;
        if (item.pid == -1) {
          menu.push(item);
        } else {
          if (mapObj[item.pid]) {
            mapObj[item.pid].child.push(item);
          }
        }
      });
      return menu;
    }
  }
};
</script>

<style lang="less" scoped>
</style>