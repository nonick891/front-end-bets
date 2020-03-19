import { SET_GROUPS } from './groups/mutations-types'

const state = {
  groups: []
}

const getters = {}

const actions = {}

const mutations = {
  [SET_GROUPS](state, groups) {
    state.groups = groups;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}