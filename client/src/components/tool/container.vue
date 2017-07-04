<template>
  <div class="tool">
    <div class="left">
      <el-menu>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
    <div class="right">
      <form id="form-demo" method="POST" enctype="multipart/form-data" :action="menuApi" ref="uploadform">
        <label for="file">选择上传的文件</label>
        <input type="file" id="file" name="file">
        <button :click="postFile">确定</button>
      </form>
    </div>
  </div>
</template>
<script>
import Util from '../../assets/js/Util.js'
export default {
  data: function () {
    return {
      menuApi: Util.GetApiRootPath() + 'tool',
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
