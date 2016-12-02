<template lang="html">
  <section class="hero is-fullheight has-text-centered">

    <!-- HEADER -->
    <div class="hero-head">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h1 class="title">SimpleChat</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-body">
      <div class="container">

        <!-- MESSAGES -->
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <article v-for="message in messages" class="media">
              <figure class="media-left">
                <p class="image is-64x64">
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
                <span>{{message.formattedTime}}</span>
              </div>
          </article>
          </div>
        </div>

        <!-- SPACING -->
        <div class="columns">
          <div class="column is-4 is-offset-4">
          </div>
        </div>

        <!-- FORM -->
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">

            <div class="control is-grouped">
              <p class="control has-icon is-expanded">
                <input
                  autofocus
                  autocomplete="off"
                  class="input"
                  type="text"
                  placeholder="Message"
                  v-model.lazy="message"
                  @keyup.enter="createMessage"
                >
              </p>
              <p class="control">
                <button
                  class="button is-success"
                  @click='createMessage'
                >
                  Send
                </button>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
// COMPONENTS
export default {
  name: 'Chat'
}
</script>

<style lang="css">
</style>
