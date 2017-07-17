<template>
  <div class="colorConvert">
    <h1>颜色转换器</h1>
    <p>十六进制颜色值与rgb互相转换</p>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="10">
        <el-input size="large" v-model="inputColor" placeholder="rgb或十六进制颜色值" spellcheck="false"></el-input>
      </el-col>
      <el-col :span="10" :offset="1">
        <el-input size="large" :readonly="true" v-model="outputColorStr" placeholder="转换结果"></el-input>
      </el-col>
    </el-row>
    <el-card class="color-card" :style="{backgroundColor:outputColor}">
    </el-card>
    <!-- <el-color-picker v-model="color1"></el-color-picker> -->
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      inputColor: '',
      outputColor: ''
    }
  },
  computed: {
    outputColorStr: function () {
      if (this.inputColor.length < 4) {
        return ''
      }
      if (this.inputColor.startsWith('#')) {
        // 十六进制
        let hexadecimal = this.inputColor.substr(1)
        if (hexadecimal.length === 3) {
          let [r, g, b] = hexadecimal.split('')
          let rr = parseInt('' + r + r, 16)
          let gg = parseInt('' + g + g, 16)
          let bb = parseInt('' + b + b, 16)
          this.outputColor = `rgb(${rr},${gg},${bb})`
          return `${rr},${gg},${bb}`
        } else if (hexadecimal.length === 6) {
          let [r, g, b] = this._.chunk(hexadecimal.split(''), 2)
          let rr = parseInt(r, 16)
          let gg = parseInt(g, 16)
          let bb = parseInt(b, 16)
          this.outputColor = `rgb(${rr},${gg},${bb})`
          return `${rr},${gg},${bb}`
        }
      } else {
        let rgbArr = this.inputColor.split(',')
        if (rgbArr.length === 3) {
          this.outputColor = `rgb(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]})`
          return `${rgbArr[0]},${rgbArr[1]},${rgbArr[2]}`
        } else {
          return ''
        }
      }
    }
  }
}
</script>
<style lang="scss">
.colorConvert {
  h1 {
    margin: 0 0 1em;
    font-size: 2em;
    font-weight: 600;
    color: #2c3e50;
  }
}
</style>
