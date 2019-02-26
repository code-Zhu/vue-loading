import Vue from 'vue'
import App from './App.vue'
import myLoading from './components/loading/index.js'

Vue.use(myLoading)
new Vue({
  el: '#app',
  render: h => h(App)
})
