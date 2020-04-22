import {
  TOGGLE_MENU,
  SET_BREADCRUMBS,
  TOGGLE_SCOREBOARD,
  SHOW_PARTICIPANTS_DETAIL,
  HIDE_PARTICIPANTS_DETAIL
} from './interface/mutations-types'

const state = {
  drawer: null,
  breadcrumbs: [],
  toggleParticipantsControl: true,
  expandParticipantsDetail: false,
  toggleScoreboardControl: false
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
  [TOGGLE_SCOREBOARD](state) {
    state.toggleScoreboardControl = !state.toggleScoreboardControl;
  },
  [SHOW_PARTICIPANTS_DETAIL](state) {
    state.expandParticipantsDetail = true;
    setTimeout(
      () => state.toggleParticipantsControl = false,
      150
    );
  },
  [HIDE_PARTICIPANTS_DETAIL](state) {
    state.expandParticipantsDetail = false;
    state.toggleParticipantsControl = true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}