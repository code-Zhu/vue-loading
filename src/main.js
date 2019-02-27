import Vue from 'vue'
import App from './App.vue'
import myLoading from './components/loading/index.js'
import myRedPack from './components/redpack/index.js'

Vue.use(myLoading)
Vue.use(myRedPack)
new Vue({
  el: '#app',
  render: h => h(App)
})
