<template lang="html">
  <div>
    <transition
      appear
      appear-class="ciccio"
      appear-active-class="animated fadeInLeft"
    >
      <logo></logo>
    </transition>

    <loginForm></loginForm>
    <br>

    <router-link
      to="/room/:id"
      class="button is-success is-outlined is-large"
    >
      LOG IN
    </router-link>
</div>
</template>

<script>
// COMPONENTS
import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm'

export default {
  name: 'Login',

  components: {
    Logo,
    LoginForm
  }

}
</script>

<style lang="css">
</style>
