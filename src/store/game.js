import { get, keys } from 'lodash'
import {
  SET_PARTICIPANTS,
  SET_GAME_ID,
  SET_GAMES,
  SET_CHUNK_GAMES,
  GET_CHUNK_GAMES
} from './game/mutations-types'

const state = {
  gameId: 0,
  participants: []
}

const getters = {
  groupIds: state => keys(state.games)
}

const actions = {
  loadChunkGames({ commit }, id) {
    let chunk = commit('GET_CHUNK_GAMES', { id, chunkCount: 10 });
    commit('SET_CHUNK_GAMES', { id, chunk })
  }
}

const mutations = {
  [SET_PARTICIPANTS](state, participants) {
    state.participants = participants;
  },
  [SET_GAME_ID](state, gameId) {
    state.gameId = gameId;
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}