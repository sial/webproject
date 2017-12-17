import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {title: 'Login'}
    }
  ]
})


Vue.use(Router)
