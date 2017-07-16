<template>
  <div class="home">
    <welcome></welcome>
    <div class="yearprocess"></div>
    <div class="cards"></div>
  </div>
</template>
<script>
import welcome from './page/welcome'
export default {
  data: function () {
    return {
      msg: 'home'
    }
  },
  components: {
    welcome
  }
}
</script>
<style lang="scss">
.home {
  height: 100%;
}
</style>

