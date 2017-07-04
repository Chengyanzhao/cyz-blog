<template>
  <div class="img-convert">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  mounted: function () {

  },
  methods: {
    handleRemove: function (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview: function (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss">
.img-convert {
  width: 100;
}
</style>

