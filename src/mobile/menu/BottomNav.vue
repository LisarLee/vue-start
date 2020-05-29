<template>
  <div>
    <ul>
      <li v-for="item in menuList" :key="item.path">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        { title: '环境健康1', path: '/health1' },
        { title: '环境健康2', path: '/health2' },
        { title: '环境健康3', path: '/health3' },
        { title: '环境健康4', path: '/health4' }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
</style>