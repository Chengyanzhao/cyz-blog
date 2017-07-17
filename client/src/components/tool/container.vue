<template>
  <div class="tool">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4">
        <div class="left">
          <el-menu default-active="2" class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>导航一
              </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-message"></i>GIS工具
              </template>
              <el-menu-item index="tool/shp2geojson">shp转GeoJSON</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>导航三</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="12" :offset="1">
        <div class="right">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Util from '../../assets/js/Util.js'
import shp2GeoJson from './item/shp2GeoJSON'
export default {
  data: function () {
    return {
      menuApi: Util.GetApiRootPath() + 'tool/shp2geoJson',
      toolMenu: null
    }
  },
  components: {
    'shp-geojson': shp2GeoJson
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
<style lang="scss">
.tool {
  padding-top: 60px;
}
</style>
