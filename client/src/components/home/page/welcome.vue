<template>
  <div class="welcome">
    <div class="center">
      <div class="main-mark">
        <div class="inner-mark">
          <span>Cheng</span>
        </div>
      </div>
      <div class="motto">
        <span v-text="typingCn"></span>
        <br>
        <span v-text="typingEn"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      msg: 'welcome',
      textChinese: '心之所愿，无事不成。',
      textEnglish: 'Nothing is impossible to a willing heart.',
      typingCn: '',
      typingEn: ''
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.typingCnFn(this.typingCn, this.textChinese)
      this.typingEnFn(this.typingEn, this.textEnglish)
    })
  },
  methods: {
    typingCnFn: function () {
      let curIndex = 0
      let timer = setInterval(() => {
        curIndex++
        this.typingCn = this.textChinese.substring(0, curIndex) + '_'
        if (curIndex === this.textChinese.length) {
          clearInterval(timer)
        }
      }, 100)
    },
    typingEnFn: function () {
      let curIndex = 0
      let timer = setInterval(() => {
        curIndex++
        this.typingEn = this.textEnglish.substring(0, curIndex) + '_'
        if (curIndex === this.textEnglish.length) {
          clearInterval(timer)
        }
      }, 70)
    }
  }
}
</script>
<style lang="scss">
.welcome {
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 2rem;
  background-color: rgb(96, 169, 64);
  text-align: center;
  user-select: none; // -webkit-animation-name: fadeOut;
  // /*动画名称*/
  // -webkit-animation-duration: 5s;
  // /*动画持续时间*/
  // -webkit-animation-iteration-count: 1;
  // /*动画次数*/
  // -webkit-animation-delay: 0s;
  // /*延迟时间*/
  .center {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);

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
  }
}
</style>
