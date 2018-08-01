(function (doc, win) {
  var baseWidth = 930
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.getBoundingClientRect().width
    if (!clientWidth) return
    if (clientWidth >= baseWidth) clientWidth = baseWidth
    docEl.style.fontSize = 100 * (clientWidth / baseWidth) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
