import { keys } from 'lodash'
import { getKeyPairs } from '../app/scoreboard/filters'
import {
  SET_SCOREBOARD
} from './scoreboard/mutations-types'

const state = {
  messages: [],
  goals: {},
  redCards: {},
  yellowCards: {},
  corners: {},
  penalties: {}
}

const getters = {}

const actions = {}

const mutations = {
  [SET_SCOREBOARD](state, scoreboard) {
    let convertKeys = keys(getKeyPairs());
    state.messages = scoreboard.messages;
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