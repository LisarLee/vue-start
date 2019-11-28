// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import elementUI from 'element-ui';
Vue.use(elementUI)
import "element-ui/lib/theme-chalk/index.css"

// import MPVcontroller from 'mpv-controller';
// Vue.prototype.$MPVcontroller = MPVcontroller
// Vue.use(MPVcontroller)



Vue.config.productionTip = false
// let echarts = require('echarts')
import echarts from 'echarts'
// 引入折线图,饼图,柱状图组件
// require('echarts/lib/chart/line')
// require('echarts/lib/chart/bar')
// require('echarts/lib/chart/pie')
// require('echarts/lib/chart/tree')
// require('echarts/lib/chart/scatter')
require('echarts/lib/chart/graph')
require('echarts-wordcloud')
require('echarts/lib/chart/gauge')
// // 引入提示框和title组件，图例
// require('echarts/lib/component/polar')
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// require('echarts/lib/component/legend')
// require('echarts/lib/component/legendScroll') //图例翻译滚动

Vue.prototype.$echarts = echarts

import './assets/less/common.less'

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
export default new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
