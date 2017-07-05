<template>
  <div id="footer-wrapper">
    <div id="contact">
  
    </div>
    <div id="copyright">
      <span>{{copyRightInfo}}</span>
      </br>
      <span>{{poweredByInfo}}</span>
  
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-wrapper',
  data: function () {
    return {
      poweredByInfo: 'Powered by Chengyanzhao',
      copyRightInfo: '© 2017 darkclouds.top  京ICP备 16067694号'
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/css/share.scss';
#footer-wrapper {
  @include default-theme;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  height: 80px;
  & #copyright {
    height: inherit;
    transform: translate(0, 35%);
    font-weight: 300;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
  }
}
</style>
