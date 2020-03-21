<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th
          colspan="3"
          class="text-left"
        >
          {{ odd.name.value }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{ odd.results[0].name.value }} <b>{{ odd.results[0].odds }}</b></td>
        <td>{{ odd.results[1].name.value }} <b>{{ odd.results[1].odds }}</b></td>
        <td>{{ odd.results[2].name.value }} <b>{{ odd.results[2].odds }}</b></td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  props: {
    odd: Object
  }
}
</script>