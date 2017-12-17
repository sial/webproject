import router from '../router/index'
import store from './index'

export default {
  name: 'login',
  data () {
    return {
      loader: false,
      infoError: false,
      email: '',
      password: ''
    }
  },
  beforeCreate () {
    if (store.state.isLogged) {
      router.push('/')
    }
  },
  methods: {
    login () {
      this.loader = true
      this.infoError = false
      this.$http.post('http://localhost:8080/login', {
        email: this.email,
        password: this.password
      }).then((response) => {
        localStorage.setItem('token', response.body.token)
        store.commit('LOGIN_USER')
        router.push('/')
      }, () => {
        this.infoError = true
        this.loader = false
        this.password = ''
      })
    },
    greet: function (event) {
      // `this` внутри методов указывает на экземпляр Vue
      alert('Привет, ' + this.email + '!')
      // `event` — нативное событие DOM
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
