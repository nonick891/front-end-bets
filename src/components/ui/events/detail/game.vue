<template>
  <v-row>
    <v-col>
      <correct-score
        v-if="getMarketType(odd) === 'CorrectScore'"
        :odd="odd"
      />
      <over-under-table
        v-else-if="getMarketType(odd) === 'OverUnder'"
        :odd="odd"
      />
      <triple-columns
        v-else-if="isGroupType(odd, 20) && odd.results.length === 3"
        :odd="odd"
      />
      <double-columns
        v-else-if="isGroupType(odd, 20)"
        :odd="odd"
      />
      <default-table
        v-else
        :odd="odd"
      />
    </v-col>
  </v-row>
</template>
<script>
import { get } from 'lodash'

import defaultTable from './table/default.vue'
import overUnderTable from './table/over-under.vue'
import correctScore from './table/correct-score.vue'
import doubleColumns from './table/double-column.vue'
import tripleColumns from './table/triple-column.vue'
export default {
  props: {
    odd: Object
  },
  components: {
    defaultTable,
    overUnderTable,
    correctScore,
    doubleColumns,
    tripleColumns
  },
  methods: {
    getMarketType(odd) {
      return get(odd, 'grouping.parameters.marketType', '')
    },
    isGroupType(odd, id) {
      for(let group of odd.grouping.detailed) {
        if (group.group === id) {
          return true;
        }
      }
      return false;
    }
  }
}
</script>
<style>
  .v-data-table table thead tr th,
  .v-data-table table tbody tr td {
    padding: 0 5px;
  }
</style>