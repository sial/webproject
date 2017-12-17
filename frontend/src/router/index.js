import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import index from '../components/index.vue'
import logout from '../components/logout.vue'

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

export default router;

Vue.use(Router)
