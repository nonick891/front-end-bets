<template>
  <v-card
    outlined
    color="dark"
  >
    <v-row
      no-gutters
      class="pa-1"
      style="border: 1px solid #4C4C4C; border-radius: 10px;"
    >
      <team-line
        v-for="(opponent, key) in opponents"
        :key="key"
        :name="opponent.name"
        :goals="opponent.goals"
        :time="opponent.time"
      />
    </v-row>
  </v-card>
</template>
<script>
import teamLine from './team-line.vue'
export default {
  name: 'TeamsCard',
  props: ['opponents'],
  components: { teamLine }
}
</script>