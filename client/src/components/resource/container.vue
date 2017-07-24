<template>
  <div class="resource">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4">
        <div class="left">
          <el-menu default-active="2" class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>色彩
              </template>
              <el-menu-item index="resource/colorhunt">colorhunt</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-message"></i>字体
              </template>
              <el-menu-item index="resource/sourceCodePro">Source Code Pro</el-menu-item>
              <el-menu-item index="resource/HelveticaNeue">Helvetica Neue</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>导航三</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="12" :offset="1">
        <div class="right">
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Util from '../../assets/js/Util.js'
export default {
  data: function () {
    return {
      reslistApi: Util.GetApiRootPath() + 'resource',
      resourceList: null
    }
  },
  mounted: function () {
    this.$http.get(this.reslistApi).then((res) => {
      this.resourceList = res.data
    })
  },
  methods: {
    handleOpen: function (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose: function (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
