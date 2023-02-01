import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),//将App放入容器中
}).$mount('#app')//$mount('#app')相当与el:'#app'
