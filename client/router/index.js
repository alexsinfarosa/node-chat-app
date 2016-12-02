import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../views/Chat'
import Login from '../views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/room/:id',
      component: Chat
    }
  ]
})
