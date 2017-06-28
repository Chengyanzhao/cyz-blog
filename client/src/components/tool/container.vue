<template>
  <div class="tool">
    <div class="left">
      <el-menu>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
  </div>
</template>
<script>
import Util from '../../assets/js/Util.js'
export default {
  data: function () {
    return {
      menuApi: Util.GetApiRootPath() + 'tool/toolmenu',
      toolMenu: null
    }
  },
  created: function () {
    this.$http.get(this.menuApi).then(response => {
      this.toolMenu = response.data
    })
  }
}
</script>
<style lang="scss">

</style>
