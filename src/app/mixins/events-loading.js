import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      fixture: state => state.data.fixture,
      participants: state => state.game.participants,
    })
  },
  methods: {
    initEvents() {
      this.setParticipants(this.fixture.participants);
    },
    ...mapMutations({ setParticipants: 'game/SET_PARTICIPANTS' })
  }
}