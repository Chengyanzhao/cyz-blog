var typingDirective = {}
var opt = {
  speed: 200,
  text: 'The typewriter is typing...',
  cursorChart: '_'
}

typingDirective.install = function (Vue, options) {
  var _this = this
  Vue.directive('typing', {
    inserted: function (el, binding, vnode) {
      console.log(el)
      debugger
      var opts = binding || opt
      _this.init(el, opts, vnode)
    }
    // componentUpdated: function (el, binding, vnode) {
    //   var opts = binding || opt
    //   _this.init(el, opts, vnode)
    // }
  })
}
typingDirective.assignOpts = function (option) {
  var _this = typingDirective
  var o = option || {}
  for (var key in opt) {
    if (!o.hasOwnProperty(key)) {
      o[key] = opt[key]
    }
  }
  _this.o = o
}
typingDirective.init = function (el, options, vnode) {
  var _this = typingDirective
  _this.assignOpts(options)
  console.log('安装指令')
  var text = _this.o.text
  var speed = _this.o.speed
  var cursorChart = _this.o.cursorChart

  var addString = ''
  var curIndex = 0

  var timer = setInterval(function () {
    addString = text[curIndex]
    curIndex++
    vnode.text = vnode.text.substr(0, vnode.text.length - 1) + addString + cursorChart
    if (curIndex === text.length - 1) {
      clearInterval(timer)
    }
  }, speed)
}

export default typingDirective
