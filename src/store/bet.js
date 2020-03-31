import { get, has } from 'lodash'
import decisions from './bet/decisions'
import {
  REMOVE_DECISION,
  CALCULATE_ALL,
  CLEAR_ALL,
  FETCH_DECISION,
  ADD_FIXTURE_ID,
  ADD_PARTICIPANTS,
  ADD_ODD,
  ADD_ODD_ITEM
} from './bet/mutations-types'

const getShort = (participants, i) =>
  get(participants, `${i}.name.short`, '');

const getGameName = participants =>
  `${getShort(participants, 0)} vs ${getShort(participants, 1)}`;

const state = {
  decisions: decisions,
  amount: 0,
  count: 0,
  total: 0,
  fixtureIds: [],
  decisionParticipants: {},
  odds: [],
  oddItems: [],
  dialog: true,
  games: [],
  chunkGames: [],
  lastIndex: []
}

const getters = {
  totalMoney: state => parseFloat((state.total * state.amount).toFixed(2)),
  getOdds: state => gameId => get(state, 'odds', []).filter(odd => odd.gameId === gameId),
  getOddItems: state => (gameId, oddId) => get(state, 'oddItems', []).filter(item => item.gameId === gameId && item.oddId === oddId)
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
  [ADD_FIXTURE_ID](state, gameId){
    if (state.fixtureIds.indexOf(gameId) === -1) {
      let newFixtures = [...state.fixtureIds];
      newFixtures.push(gameId);
      state.fixtureIds = newFixtures;
    }
  },
  [ADD_PARTICIPANTS](state, {gameId, participants}) {
    let part = Object.assign({}, state.decisionParticipants);
    part[gameId] = getGameName(participants);
    state.decisionParticipants = part;
  },
  [ADD_ODD](state, { gameId, odd }) {
    if (!state.odds.find(item => item.id === odd.id)) {
      state.odds.push({ gameId, id: odd.id, name: odd.name.value });
    }
  },
  [ADD_ODD_ITEM](state, { gameId, oddId, item }) {
    if (!state.oddItems.find(oddItem => oddItem.id === item.id)) {
      state.oddItems.push({gameId, oddId, ...item});
    }
  },
  [FETCH_DECISION](state) {
    return state.decisions;
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