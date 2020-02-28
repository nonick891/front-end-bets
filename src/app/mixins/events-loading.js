import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState({
      fixture: state => state.data.fixture,
      participants: state => state.game.participants
    })
  },
  methods: {
    initEvents() {
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
      setParticipants: 'game/SET_PARTICIPANTS',
      setBreadcrumbs: 'interface/SET_BREADCRUMBS'
    })
  }
}