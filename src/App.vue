<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h3 @click="show('姓名不能为空')">姓名不能为空</h3>
    <h3 @click="show('手机不能为空')">手机不能为空</h3>
    <vue-slider v-model="musice.ctime" :max="this.musice.dtime" :min="0" tooltip="false"
      @drag-start="changeValue('start')" @drag-end="changeValue('end')"/>
    <span>当前值：{{musice.ctime | time}}</span>
    <audio ref="player" src="http://qtest.pstech360.com/test/static/1/test.mp3"></audio>
    <span>总值{{this.musice.dtime | time}}</span>
    <p @click="play">开始</p>
    <p @click="pause">暂停</p>
    <p @click="redpack">redpack</p>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component'
export default {
  name: 'app',
  components: {vueSlider},
  data () {
    return {
      audio: null,
      msg: 'Welcome to Your Vue.js App',
      musice: {
        ctime: 0,
        dtime: 0
      },
      redpackShow: false
    }
  },
  filters: {
    time (value) {
      value = Number(value)
      return `${parseInt(value/60)}分${parseInt(value%60)}秒`
    }
  },
  methods: {
    redpack () {
      if (this.redpackShow) {
        this.$redpack.show()
      } else {
        this.$redpack.hide()
      }
      this.redpackShow = !this.redpackShow
    },
    show (text) {
      this.$loading.show(text)
    },
    play () {
      this.audio.currentTime = this.musice.ctime
      this.audio.play()
    },
    pause() {
      this.audio.pause()
    },
    changeValue (value) {
      if (value === 'start') {
        this.audio.pause()
      } else if (value === 'end') {
        this.audio.currentTime = this.musice.ctime
        this.audio.play()
      }
    }
  },
  mounted () {
    this.audio = this.$refs.player
    this.audio.addEventListener('canplay', () => { //加载完成
      this.musice.dtime = this.audio.duration
    })
    this.audio.addEventListener('timeupdate', () => {
      this.musice.ctime = this.audio.currentTime
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
