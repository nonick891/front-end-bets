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
          class="text-center borders"
          @click="addOddClick(odd, result)"
          :class="getActiveClass(result.id)"
        >
          {{ result.name.value }} <b>{{ result.odds }}</b>
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
  computed: {
    resultsLength() {
      let length = get(this.odd, 'results.length', false);
      return length ? length + 1 : 0;
    }
  },
  methods: {
    getResult(number) {
      return this.odd.results[number];
    }
  }
}
</script>