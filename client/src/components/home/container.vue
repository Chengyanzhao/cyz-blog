<template>
  <div class="home">
    <div class="welcome">
      <welcome></welcome>
    </div>
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
.home {}
</style>

