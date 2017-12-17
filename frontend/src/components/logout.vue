<script>
  import router from '../router/index'
  import store from '../store/index'

  export default {
    name: 'logout',
    mounted () {
      localStorage.removeItem('token')
      store.commit('LOGOUT_USER')
      router.push('login')
    }
  }
</script>
