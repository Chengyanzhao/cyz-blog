<template>
  <div class="welcome-container">
    <div class="main-mark">
      <div class="inner-mark">
        <span>Cheng</span>
      </div>
    </div>
    <div class="motto">
      <span>心之所愿，无事不成。</span>
      <br>
      <span>Nothing is impossible to a willing heart.</span>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      msg: 'welcome'
    }
  }
}
</script>
<style lang="scss">
.welcome-container {
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 2rem;
  background-color: rgb(96, 169, 64);
  text-align: center;
  user-select: none;
  // -webkit-animation-name: fadeOut;
  // /*动画名称*/
  // -webkit-animation-duration: 5s;
  // /*动画持续时间*/
  // -webkit-animation-iteration-count: 1;
  // /*动画次数*/
  // -webkit-animation-delay: 0s;
  // /*延迟时间*/
  .main-mark {
    position: relative;
    margin: 0 auto;
    border: 3px solid #fff;
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    border-radius: 50%;
    padding: .3rem;
    .inner-mark {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #fff;
      span {
        font-weight: bolder;
        color: rgb(96, 169, 64);
      }
    }
  }
  .motto {
    margin: 5vh;
    color: #fff;
  }
  .note {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5vh;
  }
}
</style>
