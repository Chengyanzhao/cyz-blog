<template>
  <div class="resource">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="8" :md="6" :lg="4">
        <div class="left">
          <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" :unique-opened="true" theme="dark" @select="handleSelect" @open="handleOpen">
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
      <el-col :xs="16" :sm="16" :md="18" :lg="20">
        <div class="right">
          <el-card class="box-card">
            <template v-if="!activeGroup">
              <h1>资源库</h1>
              <p>此栏目收集一些开发或者其他工作经常用到的资源，并对每一个资源进行简单介绍，非常方便。</p>
            </template>
            <template v-if="activeGroup">
              <h1>{{activeGroup.aliasname}}</h1>
              <el-row :gutter="10">
                <template v-for="item in activeGroup">
                  <el-col :xs="12" :sm="12" :md="12" :lg="12">
                    <dashboard :item="item"></dashboard>
                  </el-col>
                </template>
              </el-row>
            </template>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Util from '../../assets/js/Util.js'
import dashboard from './dashboard'
export default {
  data: function () {
    return {
      reslistApi: Util.GetApiRootPath() + 'resource',
      resourceList: null,
      activeGroupIndex: null,
      activeGroup: null,
      activeItemIndex: null
    }
  },
  components: {
    dashboard
  },
  mounted: function () {
    this.$http.get(this.reslistApi).then((res) => {
      this.resourceList = res.data
    })
  },
  methods: {
    handleOpen: function (index, indexPath) {
      this.activeGroupIndex = index
      this.activeGroup = this.resourceList.find((item) => {
        return item.name === this.activeGroupIndex
      })
    },
    handleSelect: function (key, keyPath) {
      this.activeItemIndex = key
    }
  }
}
</script>
<style lang="scss">
.resource {
  margin: 5px;
  .right {
    h1 {
      text-align: center;
    }
    p {
      text-indent: 2em;
    }
    .el-row {
      margin-bottom: 20px;
    }
  }
}
</style>

