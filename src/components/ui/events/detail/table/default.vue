<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-simple-table
    class="custom-table"
  >
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
        @click="addOddClick(odd, result)"
        :class="getActiveClass(result.id)"
      >
        <td>{{ result.name.value }}</td>
        <td class="text-right"><b>{{ result.odds }}</b></td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import toggleRow from './toggle-row.vue'
import toggleTableMixin from '../../../../../app/mixins/table-toggle'
import addOddClickMixin from '../../../../../app/mixins/add-odd-click'
export default {
  mixins: [toggleTableMixin, addOddClickMixin],
  components: { toggleRow },
  props: {
    odd: Object
  }
}
</script>
<style>
  .custom-table.theme--dark.v-data-table thead tr:last-child th {
    border-bottom: none;
  }
  .custom-table.theme--dark.v-data-table tbody tr.result-added,
  .custom-table.theme--dark.v-data-table tbody tr.result-added:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: rgba(255,204,0,.300007);
  }
</style>