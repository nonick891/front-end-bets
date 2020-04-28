import fixture from './data/fixture-before-game.json'
import fixtureData from './data/fixture-data-before-game.json'

const state = {
	fixture: fixture.fixture,
	groups: fixtureData.gameGroups
};

const getters = {};

const actions = {};

const mutations = {};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}