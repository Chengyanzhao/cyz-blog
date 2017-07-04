<template>
  <div id="app">
    <header class="header">
      <topnav></topnav>
    </header>
    <router-view></router-view>
    <foot v-once></foot>
  </div>
</template>

<script>
import topnav from './components/common/topnav'
import foot from './components/common/foot'
export default {
  name: 'app',
  components: {
    topnav,
    foot
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  .header {
    position: fixed;
    width: 100%;
    z-index: 1;
  }
}
</style>
