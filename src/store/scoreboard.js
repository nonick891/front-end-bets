import { keys } from 'lodash'
import { getKeyPairs } from '../app/scoreboard/filters'
import {
  SET_SCOREBOARD
} from './scoreboard/mutations-types'

const state = {
  stage: '',
  startDate: '',
  messages: [],
  goals: {},
  redCards: {},
  yellowCards: {},
  corners: {},
  score: {},
  penalties: {},
  timer: {},
  dateTimer: {},
  period: '1H',
  periodIndex: 1,
  selectedPeriodTab: null
}

const getters = {}

const actions = {}

const mutations = {
  [SET_SCOREBOARD](state, scoreboard) {
    let convertKeys = keys(getKeyPairs());
    console.log(scoreboard.dateTimer);
    state.stage = scoreboard.stage;
    state.startDate = scoreboard.startDate;
    state.messages = scoreboard.messages;
    state.period = scoreboard.period;
    state.dateTimer = scoreboard.dateTimer;
    state.timer = scoreboard.timer;
    state.selectedPeriodTab = `tab-${scoreboard.period.toLowerCase()}`;
    for(let value of convertKeys) {
      state[value] = scoreboard[value];
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}