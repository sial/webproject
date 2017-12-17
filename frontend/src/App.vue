<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import router from './router/index'
  import store from './store/index'


  export default {

    beforeCreate() {
      if (!store.state.isLogged) {
        router.push('/login')
      }
    }
  }

  document.title = 'Webproject';
</script>

<style>
  #app {
    font-family: 'Open-Sans Regular', sans-serif;
    height: 100%;
  }

</style>
