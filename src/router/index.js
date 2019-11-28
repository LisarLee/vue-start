import Vue from 'vue'
import Router from 'vue-router'
const layout =  ()=> import('@/components/layout.vue')

const home =  ()=> import('@/views/home')
const marketing =  ()=> import('@/views/marketing')
const pass =  ()=> import('@/views/pass')
const scroll =  ()=> import('@/views/scroll.vue')
const chart =  ()=> import('@/views/chart')
const array =  ()=> import('@/views/Array')
const jsonArray =  ()=> import('@/views/jsonArray')
const css =  ()=> import('@/views/CSS')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout, 
      redirect: '/home',
      children:[
        {
          path: '/home',
          name: 'home',
          component: home,
        },
        {
          path: '/marketing',
          name: 'marketing',
          component: marketing,
        },
        {
          path: '/pass',
          name: 'pass',
          component: pass,
        },
        {
          path: '/scroll',
          name: 'scroll',
          component: scroll,
        },
        {
          path: '/chart',
          name: 'chart',
          component: chart,
        },
        {
          path: '/array',
          name: 'array',
          component: array,
        },
        {
          path: '/jsonArray',
          name: 'jsonArray',
          component: jsonArray,
        },
        {
          path: '/css',
          name: 'css',
          component: css,
        },
      ]
    }
  ]
})
