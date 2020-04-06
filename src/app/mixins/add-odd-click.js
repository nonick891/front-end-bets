import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('game', ['gameId']),
    ...mapGetters('bet', ['isSelectedOdd']),
    ...mapState('game', ['participants']),
    ...mapState('bet', ['selectedOdds']),
  },
  methods: {
    ...mapMutations({
      addFixtureId: 'bet/ADD_FIXTURE_ID',
      addParticipants: 'bet/ADD_PARTICIPANTS',
      addOdd: 'bet/ADD_ODD',
      addOddItem: 'bet/ADD_ODD_ITEM',
      setSelectedItem: 'bet/SET_SELECTED_ITEM',
      calculateAll: 'bet/CALCULATE_ALL',
      showDialog: 'bet/SHOW_DIALOG'
    }),
    addOddClick(odd, item) {
      let gameId = parseInt(this.gameId);
      this.addFixtureId(gameId);
      this.addParticipants({ gameId, participants: Object.assign({}, this.participants) });
      this.addOdd({ gameId, odd: { id: odd.id, name: odd.name }});
      this.addOddItem({ gameId, oddId: odd.id, item: { id: item.id, odds: item.odds, name: item.name.value } });
      this.setSelectedItem(item.id);
      this.calculateAll();
      this.showDialog();
    }
  }
}