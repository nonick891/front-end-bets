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
  period: '1H',
  selectedPeriodTab: null
}

const getters = {}

const actions = {}

const mutations = {
  [SET_SCOREBOARD](state, scoreboard) {
    let convertKeys = keys(getKeyPairs());
    state.stage = scoreboard.stage;
    state.startDate = scoreboard.startDate;
    state.messages = scoreboard.messages;
    state.period = scoreboard.period;
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