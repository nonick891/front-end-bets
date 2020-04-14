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
      <tr
        :key="number"
        v-for="number in resultsLength"
      >
        <td
          v-if="number%2 !== 0 && getResult(number-1) !== undefined"
          class="text-center borders odd-value"
          :colspan="getResult(number) === undefined ? 2 : false"
          :class="getActiveClass(getResult(number-1).id)"
          @click="addOddClick(odd, getResult(number-1))"
        >
          {{ getResult(number-1).name.value }} <b>{{ getResult(number-1).odds }}</b>
        </td>
        <td
          v-if="number%2 !== 0 && getResult(number) !== undefined"
          class="text-center borders odd-value"
          @click="addOddClick(odd, getResult(number))"
          :class="getActiveClass(getResult(number).id)"
        >
          {{ getResult(number).name.value }} <b>{{ getResult(number).odds }}</b>
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