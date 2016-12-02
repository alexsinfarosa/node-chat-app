import Vue from 'vue'
import Router from 'vue-router'
import App from '../views/App'
import Login from '../views/Login'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/app',
      component: App
    },
    {
      path: '/',
      component: Login
    }
  ]
})
