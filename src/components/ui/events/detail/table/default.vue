<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th
          @click="handleTable"
          colspan="2"
          class="text-left"
        >
          <toggle-row
            :show="showed"
            :title="odd.name.value"
          />
        </th>
      </tr>
      </thead>
      <tbody v-show="showed">
      <tr
        :key="key"
        v-for="(result, key) in odd.results"
        @click="click(odd, result)"
      >
        <td>{{ result.name.value }}</td>
        <td class="text-right"><b>{{ result.odds }}</b></td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import toggleRow from './toggle-row.vue'
import toggleTableMixin from '../../../../../app/mixins/table-toggle'
export default {
  mixins: [toggleTableMixin],
  components: { toggleRow },
  props: {
    odd: Object
  },
  computed: {
    ...mapGetters('game', ['gameId']),
    ...mapState('bet', ['decisions']),
    ...mapState('game', ['participants'])
  },
  methods: {
    ...mapMutations({
      addFixtureId: 'bet/ADD_FIXTURE_ID',
      addParticipants: 'bet/ADD_PARTICIPANTS',
      addOdd: 'bet/ADD_ODD',
      addOddItem: 'bet/ADD_ODD_ITEM',
      calculateAll: 'bet/CALCULATE_ALL'
    }),
    click(odd, item) {
      let gameId = parseInt(this.gameId);
      this.addFixtureId(gameId);
      this.addParticipants({gameId, participants: Object.assign({}, this.participants)});
      this.addOdd({gameId, odd: { id: odd.id, name: odd.name }});
      this.addOddItem({gameId, oddId: odd.id, item: { id: item.id, odds: item.odds, name: item.name.value } });
      this.calculateAll();
    }
  }
}
</script>