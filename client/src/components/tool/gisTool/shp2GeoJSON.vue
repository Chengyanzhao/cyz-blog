<template>
  <div class="shp2geojson">
    <input type="file" id="file" name="shpfile" ref="fileInput">
    <el-button type="primary" @click="shp2GeojsonConvert">确定</el-button>
    <div style="margin: 20px 0;"></div>
    <el-input type="textarea" :autosize="{ minRows: 30, maxRows: 36}" placeholder="请输入内容" v-model="geoJsonText" spellcheck="false">
    </el-input>
    <el-row type="flex" class="row-bg">
      <el-col :span="24">
        <el-card class="box-card">
          <div id="map">
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Util from '../../../assets/js/Util.js'
import ol from 'openlayers'
import 'openlayers/css/ol.css'
export default {
  data: function () {
    return {
      shp2GeoJsonApi: Util.GetApiRootPath() + 'tool/shp2geoJson',
      geoJsonText: '',
      map: null,
      geoJsonLayer: null
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.initMap()
    })
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
    },
    initMap: function () {
      this.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      })
    },
    addGeoJson: function () {
      this.geoJsonLayer = new ol.layer.Vector({
        title: 'GeoJsonLayer',
        source: new ol.source.Vector({
          projection: 'EPSG:4326',
          format: new ol.format.GeoJSON().readFeatures(this.geoJsonText)
        })
      })
      this.map.addLayer(this.geoJsonLayer)
    }
  }
}
</script>
<style lang="scss">
.shp2geojson {}
</style>
