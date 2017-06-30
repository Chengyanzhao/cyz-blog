<template>
  <div class="dashboard">
    <el-card v-if="item">
      <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
      <div style="padding: 14px;">
        <span>{{item.name}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      msg: '',
      currentDate: new Date()
    }
  },
  props: [
    'item'
  ]
}
</script>
<style lang="scss">
.dashboard{
  margin-bottom: 20px;
}
</style>
