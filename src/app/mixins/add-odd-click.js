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
    ...mapActions({
      addDialogItem: 'bet/addDialogItem',
      removeDialogItem: 'bet/removeDialogItem',
    }),
    get() {
      return get(...arguments);
    },
    addOddClick(odd, item) {
      let gameId = parseInt(this.gameId),
          participants = Object.assign({}, this.participants);
      if (this.isSelectedOdd(item.id)) {
        this.removeDialogItem({ gameId, oddId: odd.id, itemId: item.id });
      } else {
        this.addDialogItem({ gameId, participants, odd, item });
      }
    }
  }
}