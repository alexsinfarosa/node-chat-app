import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const state = {
  message: {},
  messages: []
}

const getters = {
  message: state => state.message,
  messages: state => state.messages
}

const mutations = {
  'BIND_TEXT': (state, value) => {
    state.message.text = value
  },

  'ADD_MESSAGE': (state) => {
    const uDate = new Date().getTime()
    const message = {
      from: 'Alex',
      text: state.message.text,
      createdAt: moment(uDate).format('h:mm a')
    }
    state.messages.push(message)
    state.message = {}
  }
}

const actions = {
  bindText: ({commit}, value) => {
    commit('BIND_TEXT', value)
  },
  addMessage: ({commit}, value) => {
    commit('ADD_MESSAGE', value)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
