<template>
  <div class="tool">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4">
        <div class="left">
          <el-menu :router="true">
            <el-menu-item-group title="分组一">
              <el-menu-item index="/tool/imgconvert">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="right">
          <!-- <shp-geojson></shp-geojson> -->
          <form id="form-demo" method="POST" enctype="multipart/form-data" :action="menuApi" ref="uploadform">
            <label for="file">选择上传的文件</label>
            <input type="file" id="file" name="shpfile">
          </form>
          <button @click="postFile">确定</button>
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
  mounted: function () {

  },
  methods: {
    postFile: function () {
      let file = this.$refs.uploadform.file.files[0]
      // let file = document.getElementById('file').files[0]
      debugger
      let formData = new FormData()
      formData.append('shpfile', file)
      this.$http.post(this.menuApi, formData).then(response => {
        if (response.data.success) {
          console.log(response.data.data)
        } else {
          console.log(response.data.message)
        }
      })
    }
  }
}
</script>
<style lang="scss">

</style>
