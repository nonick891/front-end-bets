import { mapState, mapGetters, mapMutations } from 'vuex'
import { sortByGroups, getExistsGroups } from '../groups/filters'
export default {
  computed: {
    ...mapState({
      fixture: state => state.data.fixture,
      groups: state => state.data.groups,
      participants: state => state.game.participants
    }),
    ...mapGetters({ groupIds: 'bet/groupIds' })
  },
  methods: {
    initEvents() {
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
      setGroups: 'group/SET_GROUPS',
      setParticipants: 'game/SET_PARTICIPANTS',
      setBreadcrumbs: 'interface/SET_BREADCRUMBS',
      setGames: 'bet/SET_GAMES'
    })
  }
}