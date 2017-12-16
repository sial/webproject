<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<script>
  import "../node_modules/bootstrap/dist/css/bootstrap.css"
  import "../node_modules/admin-lte/dist/css/AdminLTE.css"
</script>

<style>
  #app{
    font-family: 'Open-Sans';
  }
</style>
<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
  <!-- -webkit-font-smoothing: antialiased;-->
  <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
