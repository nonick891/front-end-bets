import fixture from './data/fixture.json'
import fixtureData from './data/fixture-data.json'

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