<template>
  <div class="red-pack-box" v-if="show" @click.self="show=false">
    <div class="red-pack"></div>
  </div>
</template>
<script>
export default {
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss" scoped>
.red-pack-box{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .red-pack{
    width: 65vw;
    height: 50vh;
    background-color: #ff0000;
  }
}
</style>
