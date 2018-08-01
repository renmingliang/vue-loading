<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f40;
  margin-top: 60px;
  padding: 20px 0;
  border-radius: 5px;
  box-shadow: 0 0 20px #000;
}
</style>
