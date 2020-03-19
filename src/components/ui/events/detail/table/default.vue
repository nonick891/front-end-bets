<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th
          colspan="2"
          class="text-left"
        >
          {{ odd.name.value }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        :key="key"
        v-for="(result, key) in odd.results"
      >
        <td>{{ result.name.value }}</td>
        <td>{{ result.odds }}</td>
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
  mounted() {
    console.log(this.odd);
  }
}
</script>