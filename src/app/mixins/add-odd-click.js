import { get } from 'lodash'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('game', ['gameId']),
    ...mapGetters('bet', ['isSelectedOdd']),
    ...mapState('game', ['participants']),
    ...mapState('bet', ['selectedOdds']),
  },
  methods: {
    ...mapActions({ toggleDialogItem: 'bet/toggleDialogItem' }),
    get() {
      return get(...arguments);
    },
    getActiveClass(resultId) {
      return this.isSelectedOdd(resultId) ? 'result-added' : null;
    },
    addOddClick(odd, item) {
      let gameId = parseInt(this.gameId),
          participants = Object.assign({}, this.participants);
      this.toggleDialogItem({ item, gameId, odd, participants });
    }
  }
}