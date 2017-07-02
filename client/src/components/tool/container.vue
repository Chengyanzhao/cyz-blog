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
      <input type="file" ref="fileinput" @change.prevent="postFile($event)">
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
  created: function () {
    // this.$http.get(this.menuApi).then(response => {
    //   this.toolMenu = response.data
    // })
  },
  methods: {
    postFile: function (event) {
      let formdata = new FormData()
      formdata.append('file', event.target.files[0])
      // formdata.append('action', 'test')
      this.$http.post(this.menuApi, {
        data: formdata,
        test: 'asd'
      },
        {
          'headers': { 'Content-Type': 'multipart/form-data' }
        }).then((res) => { console.log(res) })
    }
  }
}
</script>
<style lang="scss">

</style>
