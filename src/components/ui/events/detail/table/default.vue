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
export default {
  mixins: [toggleTableMixin],
  components: { toggleRow },
  props: {
    odd: Object
  },
  computed: {
  
  },
  mounted() {
    console.log(this.odd);
  }
}
</script>