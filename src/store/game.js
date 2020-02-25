import { SET_PARTICIPANTS } from './game/mutations-types'

const state = {
  participants: []
}

const getters = {}

const actions = {}

const mutations = {
  [SET_PARTICIPANTS](state, participants) {
    state.participants = participants;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}