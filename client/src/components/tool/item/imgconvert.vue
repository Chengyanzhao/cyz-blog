<template>
  <div class="img-convert">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <!--<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                                                          <i class="el-icon-plus"></i>
                                                        </el-upload>
                                                        <el-dialog v-model="dialogVisible" size="tiny">
                                                          <img width="100%" :src="dialogImageUrl" alt="">
                                                        </el-dialog>-->
        <form id="uploadform" method="POST" enctype="multipart/form-data" :action="postImgApi" ref="uploadform">
          <input type="file" name="imagefile" @change="upload" ref="inputfile">
        </form>
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
import axios from 'axios'
import Util from '../../../assets/js/Util.js'
export default {
  data: function () {
    return {
      postImgApi: Util.GetApiRootPath() + 'tool/imgconvert',
      dialogImageUrl: '',
      dialogVisible: false,
      textarea: ''
    }
  },
  mounted: function () {

  },
  methods: {
    upload: function () {
      let http = axios.create()
      http.defaults.headers.post['Content-Type'] = 'multipart/form-data'
      let uploadform = this.$refs.uploadform
      let inputfile = this.$refs.inputfile
      let formData = new FormData(uploadform)
      formData.append('imagefile', inputfile)
      http.post(this.postImgApi, formData).then(res => {
        debugger
        this.textarea = res.data
      })
      // formData.getLength((err, length) => {
      //   if (!err) {
      //     let headers = Object.assign({ 'Content-Length': length }, formData.getHeaders())
      //     http.post(this.postImgApi, formData, { headers: headers }).then(res => {
      //       debugger
      //       this.textarea = res.data
      //     })
      //   }
      // })
    },
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

