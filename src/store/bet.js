import decisions from './bet/decisions'

import { REMOVE_DECISION } from './bet/mutations-types'

const state = {
  decisions: decisions
}

const getters = {}

const actions = {}

const mutations = {
  [REMOVE_DECISION](state, index) {
    state.decisions.splice(index, 1);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}