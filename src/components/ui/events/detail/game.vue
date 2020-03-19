<template>
  <v-row>
    <v-col>
      <over-under-table
        v-if="getMarketType(odd) === 'OverUnder'"
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
export default {
  props: {
    odd: Object
  },
  components: { defaultTable, overUnderTable },
  methods: {
    getMarketType(odd) {
      return get(odd, 'grouping.parameters.marketType', '')
    }
  }
}
</script>