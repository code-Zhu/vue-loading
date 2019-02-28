<template>
  <div css-twill>
    <div class="twill"></div>
  </div>
</template>
<style lang="scss" scoped>
[css-twill]{
  width: 630px;
  margin: 0 auto;
  position: relative;
  height: 50px;
  background: #666;
  overflow: hidden;
  .twill {
    width: 20px;
    height: 600px;
    background: skyblue;
    position: absolute;
    left: 0px;
    top: -500px;
    transform: rotateZ(30deg);
    transform-origin: top left;
    box-shadow: 40px 0px 1px 1px rgba(255, 255, 255,0.6),
      80px 0px 1px 1px rgba(255, 255, 255,0.6),
      120px 0px 1px 1px rgba(255, 255, 255,0.6),
      160px 0px 1px 1px rgba(255, 255, 255,0.6),
      200px 0px 1px 1px rgba(255, 255, 255,0.6),
      240px 0px 1px 1px rgba(255, 255, 255,0.6),
      280px 0px 1px 1px rgba(255, 255, 255,0.6),
      320px 0px 1px 1px rgba(255, 255, 255,0.6),
      360px 0px 1px 1px rgba(255, 255, 255,0.6),
      400px 0px 1px 1px rgba(255, 255, 255,0.6),
      440px 0px 1px 1px rgba(255, 255, 255,0.6),
      480px 0px 1px 1px rgba(255, 255, 255,0.6),
      520px 0px 1px 1px rgba(255, 255, 255,0.6),
      560px 0px 1px 1px rgba(255, 255, 255,0.6),
      600px 0px 1px 1px rgba(255, 255, 255,0.6),
      640px 0px 1px 1px rgba(255, 255, 255,0.6),
      680px 0px 1px 1px rgba(255, 255, 255,0.6),
      720px 0px 1px 1px rgba(255, 255, 255,0.6),
      760px 0px 1px 1px rgba(255, 255, 255,0.6);

  }
}
  @keyframes move {
    0% {
      left: 0px;
    }
  
    100% {
      left: 45px;
    }
  }
  .twill{
      animation: move 1s linear infinite ;
  }
</style>
