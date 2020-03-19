<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th
          colspan="3"
          class="text-left"
        >{{ odd.name.value }}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td></td>
        <td>Over</td>
        <td>Under</td>
      </tr>
      <tr>
        <td>{{ odd.attr }}</td>
        <td
          :key="key"
          v-for="(result, key) in odd.results"
        >{{ result.odds }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  props: {
    odd: Object
  },
}
</script>