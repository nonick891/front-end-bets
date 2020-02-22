import { TOGGLE_MENU } from './interface/mutations-types'

const state = {
  drawer: null
}

const getters = {}

const actions = {}

const mutations = {
  [TOGGLE_MENU](state){
    state.drawer = !state.drawer;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}