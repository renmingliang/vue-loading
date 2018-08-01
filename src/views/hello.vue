<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="demo-btn">
      <li><button @click="showToast(false)">加载中</button></li>
      <li><button @click="showToast(true)">文字提示</button></li>
    </ul>
  </div>
</template>

<script>
import Load from '@/components/index.js'

export default {
  name: 'hello',
  data () {
    return {
      msg: '自定义vue组件Load'
    }
  },
  methods: {
    showToast(hideIcon) {
      if (hideIcon) {
        Load({
          msg: 'O(∩_∩)O哈哈~',
          hideIcon: true
        })
      } else {
        Load()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: .3em 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
}
.demo-btn{
  list-style-type: none;
  padding: 0 20px;
  top: 50%;
  position: absolute;
  width: 100%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  box-sizing: border-box;
}
</style>
