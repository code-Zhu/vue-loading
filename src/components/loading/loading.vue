<template>
  <div>
    <transition name="fade">
      <div class="loading-plugin" v-if="show">
        <div>{{text}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
        show: Boolean,
        text: "正在加载中...",
        type: '',
        delay: 2000
    },
    watch: {
      show() {
        if(this.show){
          setTimeout(()=>{
            this.show = false
          }, this.delay)
        }
      }
    }
  }
</script> 
<style lang="scss" scoped>
.loading-plugin{
  color: #fff;
  position: fixed;
  line-height: 30px;
  width: 100%;
  top: 0;
  background-color: #ff0000;
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  top: -30px;
}
</style>
