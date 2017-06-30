<template>
  <div class="topnav">
    <el-menu :default-active="activeIndex" class="topnav-menu" mode="horizontal" :router="true" @select="handleSelect">
      <el-menu-item index="index">首页</el-menu-item>
      <el-menu-item index="blog">博客</el-menu-item>
      <el-menu-item index="resource">资源</el-menu-item>
      <el-menu-item index="tool">工具</el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      activeIndex: 'index'
    }
  },
  methods: {
    handleSelect: function (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.topnav {
  .topnav-menu {
    background-color: rgba(255, 255, 255, 0.4)
  }
}
</style>

