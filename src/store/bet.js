import { get, keys } from 'lodash'
import {
  REMOVE_DECISION,
  CALCULATE_ALL,
  CLEAR_ALL,
  CLEAR_COUNTERS,
  FETCH_DECISION,
  ADD_FIXTURE_ID,
  REMOVE_FIXTURE_ID,
  ADD_PARTICIPANTS,
  REMOVE_PARTICIPANTS,
  ADD_ODD,
  REMOVE_ODD,
  REMOVE_ODDS,
  ADD_ODD_ITEM,
  REMOVE_ODD_ITEM,
  REMOVE_ODD_ITEMS,
  ADD_SELECTED_ITEM,
  REMOVE_SELECTED_ITEM,
  REMOVE_SELECTED_ITEMS,
  SHOW_DIALOG,
  HIDE_DIALOG
} from './bet/mutations-types'

const getShort = (participants, i) =>
  get(participants, `${i}.name.short`, '');

const getGameName = participants =>
  `${getShort(participants, 0)} vs ${getShort(participants, 1)}`;

const getRemoveItemsIndexesById = gameId =>
  (arr, e, i) => ((e.gameId === gameId) && arr.push(i), arr);

const state = {
  dialog: false,
  amount: 0,
  count: 0,
  total: 0,
  fixtureIds: [],
  decisionParticipants: {},
  odds: [],
  oddItems: [],
  games: [],
  selectedOdds: [],
  chunkGames: [],
  lastIndex: []
}

const getters = {
  totalMoney: state => parseFloat((state.total * state.amount).toFixed(2)),
  getOdds: state => gameId => get(state, 'odds', []).filter(odd => odd.gameId === gameId),
  getOddItems: state => (gameId, oddId) => get(state, 'oddItems', []).filter(item => item.gameId === gameId && item.oddId === oddId),
  isSelectedOdd: state => itemId => state.selectedOdds.find(id => id === itemId)
}

const actions = {
  calculateAll({ commit, getters }) {
    commit('CALCULATE_ALL', getters)
  },
  addDialogItem({ commit }, { gameId, participants, odd, item }) {
    let simpleOdd = { id: odd.id, name: odd.name },
        oddItem = { id: item.id, odds: item.odds, name: item.name.value };
    commit('ADD_FIXTURE_ID', gameId);
    commit('ADD_PARTICIPANTS', { gameId, participants });
    commit('ADD_ODD', { gameId, odd: simpleOdd });
    commit('ADD_ODD_ITEM', { gameId, oddId: odd.id, item: oddItem });
    commit('ADD_SELECTED_ITEM', item.id);
    commit('SHOW_DIALOG');
    commit('CALCULATE_ALL', getters);
  },
  removeDialogItem({ state, commit, getters }, { gameId, oddId, itemId }) {
    commit('REMOVE_SELECTED_ITEM', itemId);
    commit('REMOVE_ODD_ITEM', itemId);
    state.count = state.count - 1;
    if (getters.getOddItems(gameId, oddId).length === 0) {
      commit('REMOVE_ODD', oddId);
    }
    if (getters.getOdds(gameId).length === 0) {
      commit('REMOVE_PARTICIPANTS', gameId);
    }
    let participantsLength = keys(state.decisionParticipants).length;
    if (participantsLength === 0) {
      commit('REMOVE_FIXTURE_ID', gameId);
      commit('HIDE_DIALOG');
      commit('CLEAR_COUNTERS');
    }
    return participantsLength;
  }
}

const mutations = {
  [CLEAR_ALL](state) {
    state.dialog = false;
    state.fixtureIds = [];
    state.decisionParticipants = {};
    state.odds = [];
    state.oddItems = [];
    state.selectedOdds = [];
    state.amount = 0;
    state.count = 0;
    state.total = 0;
  },
  [CLEAR_COUNTERS](state) {
    state.amount = 0;
    state.count = 0;
    state.total = 0;
  },
  [SHOW_DIALOG](state) {
    state.dialog = true;
  },
  [HIDE_DIALOG](state) {
    state.dialog = false;
  },
  [ADD_FIXTURE_ID](state, gameId){
    if (state.fixtureIds.indexOf(gameId) === -1) {
      let newFixtures = [...state.fixtureIds];
      newFixtures.push(gameId);
      state.fixtureIds = newFixtures;
    }
  },
  [REMOVE_FIXTURE_ID](state, gameId) {
    let index = state.fixtureIds.findIndex(id => id === gameId);
    if (index > -1) state.fixtureIds.splice(index, 1);
  },
  [ADD_PARTICIPANTS](state, {gameId, participants}) {
    let part = Object.assign({}, state.decisionParticipants);
    part[gameId] = getGameName(participants);
    state.decisionParticipants = part;
  },
  [REMOVE_PARTICIPANTS](state, gameId) {
    delete state.decisionParticipants[gameId];
  },
  [ADD_ODD](state, { gameId, odd }) {
    if (!state.odds.find(item => item.id === odd.id)) {
      state.odds.push({ gameId, id: odd.id, name: odd.name.value });
    }
  },
  [REMOVE_ODD](state, oddId) {
    let index = state.odds.findIndex(odd => odd.id === oddId);
    if (index > -1) state.odds.splice(index, 1);
  },
  [REMOVE_ODDS](state, gameId) {
    let removeElements = state.odds.reduce((arr, e, i) => ((e.gameId === gameId) && arr.push(i), arr), []);
    for (let i = removeElements.length -1; i >= 0; i--) {
      state.odds.splice(removeElements[i],1);
    }
  },
  [ADD_ODD_ITEM](state, { gameId, oddId, item }) {
    if (!state.oddItems.find(oddItem => oddItem.id === item.id)) {
      state.oddItems.push({gameId, oddId, ...item});
    }
  },
  [REMOVE_ODD_ITEM](state, itemId) {
    let index = state.oddItems.findIndex(item => item.id === itemId);
    if (index > -1) state.oddItems.splice(index, 1);
  },
  [REMOVE_ODD_ITEMS](state, gameId) {
    let removeElements = state.oddItems.reduce(getRemoveItemsIndexesById(gameId), []);
    for (let i = removeElements.length -1; i >= 0; i--) {
      state.oddItems.splice(removeElements[i], 1);
    }
  },
  [ADD_SELECTED_ITEM](state, itemId) {
    state.selectedOdds.push(itemId);
  },
  [REMOVE_SELECTED_ITEM](state, itemId) {
    let index = state.selectedOdds.findIndex(id => id === itemId);
    if (index > -1) state.selectedOdds.splice(index, 1);
  },
  [REMOVE_SELECTED_ITEMS](state, gameId) {
    let removeElements = state.oddItems.reduce(getRemoveItemsIndexesById(gameId), []);
    for (let i = removeElements.length -1; i >= 0; i--) {
      state.selectedOdds.splice(removeElements[i], 1);
    }
  },
  [FETCH_DECISION](state) {
    return state.decisions;
  },
  [REMOVE_DECISION](state, index) {
    delete state.decisions[index];
  },
  [CALCULATE_ALL](state) {
    const getOdds = (total, el) => total * el.odds;
    state.count = state.oddItems.length;
    state.total = state.oddItems.reduce(getOdds, 1);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}