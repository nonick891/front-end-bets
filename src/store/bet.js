import { has } from 'lodash'
import decisions from './bet/decisions'
import {
  REMOVE_DECISION,
  CALCULATE_ALL,
  CLEAR_ALL
} from './bet/mutations-types'

const state = {
  decisions: decisions,
  amount: 0,
  count: 0,
  total: 0,
  dialog: true,
  games: [],
  chunkGames: [],
  lastIndex: []
}

const getters = {
  totalMoney: state => parseFloat((state.total * state.amount).toFixed(2))
}

const actions = {
  calculateAll({ commit, getters }) {
    commit('CALCULATE_ALL', getters)
  }
}

const mutations = {
  [CLEAR_ALL](state) {
    state.decisions = [];
    state.amount = 0;
    state.count = 0;
    state.total = 0;
    state.dialog = false;
  },
  [REMOVE_DECISION](state, index) {
    delete state.decisions[index];
  },
  [CALCULATE_ALL](state, getters) {
    state.count = 0;
    state.total = 1;
    const getOdds = (total, item) => Object.values(item.results).reduce((t, el) => t * el.odds, 1) * total;
    for (let index in state.decisions) {
      if (!has(state.decisions, index)) continue;
      let decision = state.decisions[index],
        items = decision.items;
      state.total *= Object.values(items).reduce(getOdds, 1);
    }
    state.total = getters.totalMoney;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}