import Vue from 'vue'
import App from './App.vue'
import plugins from  './plugins'
Vue.config.productionTip = false

// 使用插件,可以传参
Vue.use(plugins)
new Vue({
  el:'#App',
  render: h => h(App),
})
