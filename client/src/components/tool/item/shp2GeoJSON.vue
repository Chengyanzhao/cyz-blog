<template>
  <div class="shp2geojson">
    <input type="file" id="file" name="shpfile" ref="fileInput">
    <el-button type="primary" @click="shp2GeojsonConvert">确定</el-button>
    <div style="margin: 20px 0;"></div>
    <el-input type="textarea" :autosize="{ minRows: 30, maxRows: 36}" placeholder="请输入内容" v-model="geoJsonText" spellcheck="false">
    </el-input>
  </div>
</template>
<script>
import Util from '../../../assets/js/Util.js'
export default {
  data: function () {
    return {
      shp2GeoJsonApi: Util.GetApiRootPath() + 'tool/shp2geoJson',
      geoJsonText: ''
    }
  },
  methods: {
    shp2GeojsonConvert: function () {
      let fileInputDom = this.$refs.fileInput
      if (fileInputDom.files.length === 0) {
        this.$notify.error({
          title: '错误',
          message: '请选择shp文件',
          duration: 5000
        })
      }
      let file = fileInputDom.files[0]
      let formData = new FormData()
      formData.append('shpfile', file)
      this.$http.post(this.shp2GeoJsonApi, formData).then(res => {
        if (res.data.success) {
          this.geoJsonText = JSON.stringify(res.data.data, null, 2)
        } else {
          console.log(res.data.message)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.shp2geojson {}
</style>
