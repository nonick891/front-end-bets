import { get } from 'lodash'
import {
  REMOVE_DECISION,
  CALCULATE_ALL,
  CLEAR_ALL,
  FETCH_DECISION,
  ADD_FIXTURE_ID,
  REMOVE_FIXTURE_ID,
  ADD_PARTICIPANTS,
  REMOVE_PARTICIPANTS,
  ADD_ODD,
  REMOVE_ODDS,
  ADD_ODD_ITEM,
  SET_SELECTED_ITEM,
  REMOVE_SELECTED_ITEMS,
  REMOVE_ODD_ITEMS,
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
    if (index > -1) {
      state.fixtureIds.splice(index, 1);
    }
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
  [REMOVE_ODD_ITEMS](state, gameId) {
    let removeElements = state.oddItems.reduce(getRemoveItemsIndexesById(gameId), []);
    for (let i = removeElements.length -1; i >= 0; i--) {
      state.oddItems.splice(removeElements[i], 1);
    }
  },
  [SET_SELECTED_ITEM](state, itemId) {
    state.selectedOdds.push(itemId);
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