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
      <triple-inline
        v-else-if="odd.results.length === 3"
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
import tripleInline from './table/triple-inline.vue'
export default {
  props: {
    odd: Object
  },
  components: { defaultTable, overUnderTable, correctScore, tripleInline },
  methods: {
    getMarketType(odd) {
      return get(odd, 'grouping.parameters.marketType', '')
    }
  }
}
</script>