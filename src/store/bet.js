import { get, keys } from 'lodash'
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
  lastIndex: []
}

const getters = {
  totalMoney: state => parseFloat((state.total * state.amount).toFixed(2)),
  groupIds: state => keys(state.games)
}

const actions = {
  calculateAll({ commit, getters }) {
    commit('CALCULATE_ALL', getters)
  },
  loadChunkGames({ commit }, id) {
    let chunk = commit('GET_CHUNK_GAMES', { id, chunkCount: 10 });
    commit('SET_CHUNK_GAMES', { id, chunk })
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
  [SET_CHUNK_GAMES](state, {id, chunk}) {
    let lastIndex = get(state.lastIndex, id, 0);
    state.lastIndex[id] = lastIndex + chunk.length - 1;
    state.chunkGames[id] = state.chunkGames[id].concat(chunk)
  },
  [GET_CHUNK_GAMES](state, { id, chunkCount }) {
    chunkCount = chunkCount ? chunkCount : 10;
    let lastIndex = get(state.lastIndex, id, 0);
    return state.games[id].splice(lastIndex, lastIndex + chunkCount);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}