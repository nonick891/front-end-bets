import {
  SET_PARTICIPANTS,
  SET_GAME_ID
} from './game/mutations-types'

const state = {
  gameId: 0,
  participants: []
}

const getters = {}

const actions = {}

const mutations = {
  [SET_PARTICIPANTS](state, participants) {
    state.participants = participants;
  },
  [SET_GAME_ID](state, gameId) {
    state.gameId = gameId;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}