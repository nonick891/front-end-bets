import decisions from './bet/decisions'

import { REMOVE_DECISION } from './bet/mutations-types'
import { CALCULATE_ALL } from './bet/mutations-types'

const state = {
  decisions: decisions,
  amount: 0,
  count: 0,
  total: 0,
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}