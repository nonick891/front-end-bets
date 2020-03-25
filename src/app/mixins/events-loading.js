import { mapState, mapGetters, mapMutations } from 'vuex'
import { sortByGroups, getExistsGroups } from '../groups/filters'
export default {
  computed: {
    ...mapState({
      fixture: state => state.data.fixture,
      groups: state => state.data.groups,
      participants: state => state.game.participants
    }),
    ...mapGetters({ groupIds: 'game/groupIds' })
  },
  methods: {
    initEvents() {
      this.setGameID(this.fixture.id);
      this.setGames(sortByGroups(this.fixture.games));
      this.setGroups(getExistsGroups(this.groupIds, this.groups));
      this.setParticipants(this.fixture.participants);
      this.setBreadcrumbs(this.getBreadcrumbsObject());
    },
    getBreadcrumbsObject() {
      return [
        {
          text: this.fixture.region.name.value
        },
        {
          text: this.fixture.competition.name.value
        }
      ];
    },
    ...mapMutations({
      setBreadcrumbs: 'interface/SET_BREADCRUMBS',
      setGroups: 'group/SET_GROUPS',
      setParticipants: 'game/SET_PARTICIPANTS',
      setGameID: 'game/SET_GAME_ID',
      setGames: 'game/SET_GAMES'
    })
  }
}