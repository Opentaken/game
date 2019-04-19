// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import Qs from 'qs'
import * as filters from '../static/filter/index'
 
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts

console.log(filters.default)
Object.keys(filters.default).forEach(key => {
  console.log('key', key)
  Vue.filter(key, filters.default[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
