import {
  TOGGLE_MENU,
  SET_BREADCRUMBS,
  TOGGLE_PARTICIPANTS_DETAIL
} from './interface/mutations-types'

const state = {
  drawer: null,
  breadcrumbs: [],
  toggleParticipantsControl: true,
  expandParticipantsDetail: false
};

const getters = {};

const actions = {};

const mutations = {
  [TOGGLE_MENU](state){
    state.drawer = !state.drawer;
  },
  [SET_BREADCRUMBS](state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs;
  },
  [TOGGLE_PARTICIPANTS_DETAIL](state) {
    state.expandParticipantsDetail = !state.expandParticipantsDetail;
    setTimeout(
      () => state.toggleParticipantsControl = !state.toggleParticipantsControl,
      state.toggleParticipantsControl ? 300 : 0
    );
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}