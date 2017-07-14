<template>
  <div class="shp2geojson">
    <el-upload class="upload-demo" drag action="https://localhost:3000/tool/shp2geoJson" :on-success="handleAvatarSuccess" :on-progress="handleProgress">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      msg: 'shp2geojson'
    }
  },
  methods: {
    handleAvatarSuccess: function (response, file, fileList) {
      console.log('handleAvatarSuccess')
    },
    handleProgress: function (event, file, fileList) {
      console.log('progress')
    }
  }
}
</script>
<style lang="scss">

</style>
