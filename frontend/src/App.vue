<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

  document.title = 'Webproject';
</script>

<style>
  #app {
    font-family: 'Open-Sans Regular', sans-serif;
    height: 100%;
  }

</style>
