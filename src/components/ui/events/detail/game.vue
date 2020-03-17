<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-row>
    <v-col>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th colspan="2" class="text-left">{{ odd.name.value }}</th>
          </tr>
          </thead>
          <tbody>
          <tr
            :key="key"
            v-for="(game, key) in odd.results"
          >
            <td>{{ game.name.value }}</td>
            <td>{{ game.odds }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    odd: Object
  }
}
</script>