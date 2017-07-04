<template>
  <div id="app">
    <header class="header">
      <topnav></topnav>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
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
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  .header {
    position: fixed;
    width: 100%;
    z-index: 1;
  }
  .main{
    position: relative;
    padding-top:80px;
  }
}
</style>
