<template>
  <div class="imageConvert">
    <input type="file" @change="imageConvert" ref="inputFile">
    <el-row type="flex" class="row-bg">
      <el-col span="12">
        <el-card>
          <img :src="base64Code" alt="图片预览">
        </el-card>
      </el-col>
      <el-col span="12">
        <el-input type="textarea" :autosize="{ minRows: 30, maxRows: 36}" placeholder="请选择图片" v-model="base64Code" spellcheck="false" :readonly="true">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      base64Code: ''
    }
  },
  methods: {
    imageConvert: function () {
      let inputDom = this.$refs.inputFile
      let files = inputDom.files
      if (files.length > 0) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.base64Code = e.target.result
        }
        reader.readAsDataURL(files[0])
      }
    }
  }
}
</script>
<style lang="scss">

</style>
