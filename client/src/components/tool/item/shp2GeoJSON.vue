<template>
  <div class="shp2geojson">
    <form id="form-demo" ref="uploadform">
      <label for="file">选择上传的文件</label>
      <input type="file" id="file" name="shpfile">
    </form>
    <button @click="shp2GeojsonConvert">确定</button>
    <div style="margin: 20px 0;"></div>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="geoJsonText">
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
      let file = this.$refs.uploadform.file.files[0]
      let formData = new FormData()
      formData.append('shpfile', file)
      this.$http.post(this.shp2GeoJsonApi, formData).then(res => {
        if (res.data.success) {
          this.geoJsonText = JSON.stringify(res.data.data)
        } else {
          console.log(res.data.message)
        }
      })
    }
  }
}
</script>
<style lang="scss">

</style>
