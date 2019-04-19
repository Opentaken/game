import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import data from '@/components/data'
import setting from '@/components/setting'
import overview from '@/components/overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview',
      component: overview
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/data',
      name: 'data',
      component: data
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    }
  ]
})
