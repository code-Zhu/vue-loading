import MYLoadingComponents from './loading'

let $vm

export default {
  install(Vue, options) {
    if (!$vm) {
      const loadingPlugin = Vue.extend(MYLoadingComponents)
      $vm = new loadingPlugin({
        el: document.createElement('div')
      })
    }
    $vm.show = false
    let loading = {
      show(text, delay=2000) {
        $vm.show = true
        $vm.text = text
        $vm.type = 'default'
        $vm.delay = delay
        document.body.appendChild($vm.$el)
      },
      hide() {
        $vm.show = false
      },
      success(text, delay=2000) {
        $vm.show = true
        $vm.text = text
        $vm.type = 'success'
        $vm.delay = delay
      }
    }
    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    // Vue.prototype.$loading = Vue.$loading
    Vue.mixin({
      created() {
          this.$loading = Vue.$loading;
      }
    })
  }
}