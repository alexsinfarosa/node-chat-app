<template lang="html">
  <section class="hero is-fullheight">

    <div class="hero-head">
      <div class="container has-text-centered">
        <myHeader></myHeader>
      </div>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <messageTable></messageTable>

        <messageForm></messageForm>
      </div>
    </div>

  </section>
</template>

<script>
import moment from 'moment'
import MyHeader from '../components/MyHeader'
import MessageTable from '../components/MessageTable'
import MessageForm from '../components/MessageForm'

export default {
  name: 'Chat',

  components: {
    MyHeader,
    MessageTable,
    MessageForm
  }


}
</script>

<style lang="css">
</style>
