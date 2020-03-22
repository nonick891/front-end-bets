<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th
          @click="handleTable"
          colspan="3"
          class="text-left pr-0"
        >
          <toggle-row
            :show="showed"
            :title="odd.name.value"
          />
        </th>
      </tr>
      </thead>
      <tbody v-show="showed">
      <tr>
        <td
          :key="key"
          v-for="(result, key) in odd.results"
        >{{ result.name.value }} <b>{{ result.odds }}</b></td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import toggleRow from './toggle-row.vue'
import toggleTableMixin from '../../../../../app/mixins/table-toggle'
export default {
  mixins: [toggleTableMixin],
  components: { toggleRow },
  props: {
    odd: Object
  }
}
</script>