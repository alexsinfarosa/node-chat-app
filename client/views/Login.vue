<template lang="html">
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">

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
    </div>
  </section>
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
