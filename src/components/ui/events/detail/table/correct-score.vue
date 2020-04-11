<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <th
        @click="handleTable"
        colspan="3"
        class="text-left"
      >
        <toggle-row
          :show="showed"
          :title="odd.name.value"
        />
      </th>
      </thead>
      <tbody v-show="showed">
      <tr>
        <th class="text-center">1</th>
        <th class="text-center">x</th>
        <th class="text-center">2</th>
      </tr>
      <tr
        :key="index"
        class="text-center"
        v-for="index in maxIndex-1"
      >
        <td
          :class="team1[index] ? getActiveClass(team1[index].id) : null"
          @click="team1[index] ? addOddClick(odd, team1[index]) : function(){}"
        >
          {{ get(team1, `${index}.name.value`) }} <b>{{ get(team1, `${index}.odds`) }}</b>
        </td>
        <td
          :class="x[index] ? getActiveClass(x[index].id) : null"
          @click="x[index]? addOddClick(odd, x[index]) : function(){}"
        >
          {{ get(x, `${index}.name.value`) }} <b>{{ get(x, `${index}.odds`) }}</b>
        </td>
        <td
          :class="team2[index] ? getActiveClass(team2[index].id) : null"
          @click="team2[index] ? addOddClick(odd, team2[index]) : function(){}"
        >
          {{ get(team2, `${index}.name.value`) }} <b>{{ get(team2, `${index}.odds`) }}</b>
        </td>
      </tr>
      <tr class="text-center">
        <td
          colspan="3"
          @click="addOddClick(odd, any)"
          :class="any ? getActiveClass(any.id) : null"
        >
          {{ any.name.value }} <b>{{ any.odds }}</b>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { get } from 'lodash'
import toggleRow from './toggle-row.vue'
import toggleTableMixin from '../../../../../app/mixins/table-toggle'
import addOddClickMixin from '../../../../../app/mixins/add-odd-click'
export default {
  mixins: [toggleTableMixin, addOddClickMixin],
  components: { toggleRow },
  props: {
    odd: Object
  },
  data: () => ({
    'team1': [],
    'x': [],
    'team2': [],
    any: null,
  }),
  computed: {
    maxIndex() {
      return Math.max(this.team1.length, this.team2.length, this.x.length);
    }
  },
  created() {
    this.sortResults();
  },
  methods: {
    sortResults() {
      this.odd.results.map(el => {
        let value = get(el, 'name.value', ''),
            score = value.length === 3 ? value.split('-').map(n => parseInt(n)) : [];
        if (score[0] > score[1]) {
          this.team1.push(el);
        } else if (score[0] < score[1]) {
          this.team2.push(el);
        } else if (score[0] === score[1] && score.length > 0) {
          this.x.push(el);
        } else {
          this.any = el;
        }
      });
    },
    get(results, path) {
      return get(results, path, '');
    }
  }
}
</script>
<style>
  .theme--dark.v-data-table tbody tr td.result-added:not(.v-data-table__mobile-row) {
    background: rgba(255,204,0,.300007);
  }
  .theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: transparent;
  }
</style>