<template>
  <div class="tool">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4">
        <div class="left">
          <el-menu>
            <el-menu-item-group title="分组一">
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="right">
          <!--<form id="form-demo" method="POST" enctype="multipart/form-data" :action="menuApi" ref="uploadform">
                    <label for="file">选择上传的文件</label>
                    <input type="file" id="file" name="shpfile">
                    <button :click="postFile">确定</button>
                  </form>-->
          <router-view></router-view>
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
      menuApi: Util.GetApiRootPath() + 'tool/shp2geoJson',
      toolMenu: null
    }
  },
  mounted: function () {

  },
  methods: {
    postFile: function () {
      let file = this.$refs.uploadform.file
      debugger
      let formData = new FormData()
      formData.append('file', file)
      this.$http.post(this.menuApi, formData).then(response => {
        this.toolMenu = response.data
      })
    }
  }
}
</script>
<style lang="scss">

</style>
