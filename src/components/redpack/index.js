import MYRedPack from './redpack'

let $vm

export default {
  install (Vue, options) {
    if (!$vm) {
      const redpackPlugin = Vue.extend(MYRedPack)
      $vm = new redpackPlugin({
        el: document.createElement('div')
      })
    }
    $vm.show = false
    let redpack = {
      show () {
        $vm.show = true
        document.body.appendChild($vm.$el)
      },
      hide () {
        $vm.show = false
      }
    }
    if (!Vue.$redpack) {
      Vue.$redpack = redpack
    }
    Vue.mixin({
      created () {
        this.$redpack = Vue.$redpack
      }
    })
  }
}