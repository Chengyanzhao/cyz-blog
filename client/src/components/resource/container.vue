<template>
  <div class="resource">
    <h1>test</h1>
    <div class="left">
  
    </div>
    <div class="right">
  
    </div>
  </div>
</template>
<script>
import Util from '../../assets/js/Util.js'
export default {
  data: function () {
    return {
      reslistApi: Util.GetApiRootPath() + 'resource',
      resourceList: null
    }
  },
  mounted: function () {
    this.$http.get(this.reslistApi).then((res) => {
      this.resourceList = res.data
    })
  }
}
</script>
