<template>
  <div class="columns">
    <div class="column is-6 is-offset-3">

      <div class="control is-grouped">
        <p class="control has-icon is-expanded">
          <input
            autofocus
            autocomplete="off"
            class="input"
            type="text"
            placeholder="Message"
            v-model="text"
            @keyup.enter="addMessage"
          >
        </p>
        <p class="control">
          <button
            class="button is-success"
            @click="addMessage"
          >
            Send
          </button>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageForm',

  computed: {

    text: {
      get () {
        return this.$store.getters.message.text
      },
      set (value) {
        this.$store.dispatch('bindText', value)
      }
    },
  },

  methods: {
    addMessage () {
      this.$store.dispatch('addMessage')
    }
  }
}
</script>
