import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import index from '../components/index.vue'
import logout from '../components/logout.vue'
import NotFound from '../components/404.vue'
import auth from '../store/auth'

Vue.use(Router)

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
      component: logout,
      meta: { requiresAuth: true}
    },
    {
      path: '/',
      name: 'index',
      component: index,
      meta: { requiresAuth: true}
    },
    {
      path: '/404',
      component: NotFound,
      meta: { requiresAuth: true}
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.isAuth()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;


