import decisions from './bet/decisions'

import {
  REMOVE_DECISION,
  CALCULATE_ALL,
  CLEAR_ALL,
  SET_GAMES,
  SET_CHUNK_GAMES,
  GET_CHUNK_GAMES
} from './bet/mutations-types'

const state = {
  decisions: decisions,
  amount: 0,
  count: 0,
  total: 0,
  dialog: true,
  games: [],
  chunkGames: [],
  lastIndex: 0
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
    state.decisions.splice(index, 1);
  },
  [CALCULATE_ALL](state, getters) {
    state.count = 0;
    state.total = 1;
    const getOdds = (total, item) => item.value * total;
    for (let decision of state.decisions) {
      let items = decision.items;
      state.count += items.length;
      state.total *= items.reduce(getOdds, 1);
    }
    state.total = getters.totalMoney;
  },
  [SET_GAMES](state, games) {
    state.games = games;
  },
  [SET_CHUNK_GAMES](state, chunk) {
    state.lastIndex = state.lastIndex + chunk.length - 1;
    state.chunkGames = state.chunkGames.concat(chunk)
  },
  [GET_CHUNK_GAMES](state) {
    return state.games.splice(state.lastIndex, state.lastIndex + 10);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}