import Vue from 'vue'
const loading = require('./Load.vue')

const LoadConstructor = Vue.extend(loading)
let loadPool = []

// 获取实例 -- 并移除
let getAnInstance = () => {
  if (loadPool.length > 0) {
    let instance = loadPool[0]
    loadPool.splice(0, 1)
    return instance
  }
  return new LoadConstructor({
    el: document.createElement('div')
  })
}

// 返回实例
let returnAnInstance = instance => {
  if (instance) {
    loadPool.push(instance)
  }
}

// 移除DOM
let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

// 核心功能: 关闭
LoadConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
  this.closed = true
  returnAnInstance(this)
}

// 对外暴露的组件名
let Load = (options = {}) => {
  let duration = options.duration || 3000

  let instance = getAnInstance()
  instance.closed = false
  clearTimeout(instance.timer)
  instance.msg = typeof options === 'string' ? options : (options.msg || '加载中')
  instance.hideIcon = options.hideIcon || false
  instance.styleBG = options.styleBG || 'transparent'

  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.visible = true
    instance.$el.removeEventListener('transitionend', removeDom)
    instance.timer = setTimeout(function () {
      if (instance.closed) return false
      instance.close()
    }, duration)
  })
  return instance
}

export default Load
