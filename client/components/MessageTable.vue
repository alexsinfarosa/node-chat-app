<template lang="html">
  <div class="columns">
    <div class="column is-6 is-offset-3">
      <article v-for="message in messages" class="media">
        <figure class="media-left">
          <p class="image is-48x48">
            <img class="my-image" src="../../dist/alex.jpg">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{message.from}}</strong>
              <br>
              {{ message.text }}
            </p>
          </div>
        </div>
        <div class="media-right">
          <span>{{ message.createdAt }}</span>
        </div>
    </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageTable',

  computed: {

    messages () {
      return this.$store.getters.messages
    }

  }

}
</script>

<style lang="css">
.my-image {
  border-radius: 5px;
}
</style>
