<template>
  <div class="resource">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3">
        <div class="left">
          <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" :unique-opened="true" theme="dark">
            <el-submenu v-for="item in resourceList" :key="item.name" :index="item.name">
              <template slot="title">
                <i class="el-icon-message"></i>{{item.aliasname}}
              </template>
              <el-menu-item v-for="childitem in item.child" :key="childitem.name" :index="childitem.name">
                <i class="el-icon-message"></i>{{childitem.name}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3">
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
  }
}
</script>
<style lang="scss">
.resource {
  margin: 5px;
}
</style>

