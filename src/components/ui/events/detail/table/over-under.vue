<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
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
      </tr>
      </thead>
      <tbody v-show="showed">
      <tr>
        <td></td>
        <td
          class="text-center small-text"
          :key="key"
          v-for="(result, key) in odd.results"
        >{{ result.name.value.replace(odd.attr, '') }}</td>
      </tr>
      <tr>
        <td class="text-center borders">{{ odd.attr }}</td>
        <td
          class="text-center borders odd-value"
          :key="key"
          v-for="(result, key) in odd.results"
          @click="addOddClick(odd, result)"
          :class="getActiveClass(result.id)"
        >{{ result.odds }}</td>
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