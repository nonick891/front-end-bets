import {
  TOGGLE_MENU,
  SET_BREADCRUMBS
} from './interface/mutations-types'

const state = {
  drawer: null,
  breadcrumbs: []
};

const getters = {};

const actions = {};

const mutations = {
  [TOGGLE_MENU](state){
    state.drawer = !state.drawer;
  },
  [SET_BREADCRUMBS](state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}