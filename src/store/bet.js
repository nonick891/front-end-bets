const state = {
  decisions: [
    {
      name: 'Game team 1',
      items: [
        {
          name: 'Bet decision 1',
          value: 2.75
        },
        {
          name: 'Bet decision 2',
          value: 1.75
        },
        {
          name: 'Bet decision 3',
          value: 0.35
        },
      ]
    },
    {
      name: 'Game team 2',
      items: [
        {
          name: 'Bet decision 1',
          value: 2.75
        }
      ]
    }
  ]
}

const getters = {}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}