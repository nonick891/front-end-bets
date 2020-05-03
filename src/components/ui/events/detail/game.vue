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
  .v-data-table__wrapper {
    border-radius: 5px;
  }
  table thead {
    background-color: #2e2e2e;
  }
  .theme--dark.v-data-table table thead tr th,
  .theme--dark.v-data-table table thead tr th div,
  .theme--dark.v-data-table tbody .odd-value {
    color: #fff;
    font-weight: 500;
  }
  .theme--dark.v-data-table table tbody tr td.small-text {
    font-size: 0.675rem;
  }
  .theme--dark.v-data-table table {
    color: #999;
    border-collapse: collapse;
  }
  .theme--dark.v-data-table table,
  .theme--dark.v-data-table tbody tr,
  .theme--dark.v-data-table tbody tr td.borders {
    border: 1px solid #2e2e2e;
  }
  .v-data-table table thead tr th,
  .v-data-table table tbody tr td {
    padding: 0 5px;
  }

  .theme--dark.v-data-table thead tr:last-child th,
  .custom-table.theme--dark.v-data-table thead tr:last-child th {
    border-bottom: none;
  }
  .custom-table.theme--dark.v-data-table tbody tr.result-added,
  .custom-table.theme--dark.v-data-table tbody tr.result-added:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: rgba(255,204,0,.3);
  }

  .theme--dark.v-data-table tbody tr td.result-added:not(.v-data-table__mobile-row) {
    background: rgba(255,204,0,.3);
  }
  .theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: transparent;
  }
  td.odd-value {
    position: relative;
  }
  td.odd-value.up-value:after {
    position: absolute;
    top: 30%;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-color: transparent #51b828 transparent transparent;
  }
  td.odd-value.low-value:after {
    position: absolute;
    bottom: 30%;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 8px 8px;
    border-color: transparent transparent #db3030 transparent;
  }
</style>