// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/admin-lte/dist/css/AdminLTE.min.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import "./assets/css/app.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
