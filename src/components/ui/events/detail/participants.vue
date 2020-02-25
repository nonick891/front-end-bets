<template>
  <v-row>
    <v-col
      class="col-12 pa-0"
    >
      <v-card
        style="background-image: radial-gradient(circle 188px at top,#397300,#264d00); width: 100%"
        class="pa-2"
        outlined
        tile
      >
        <v-row>
          <v-col
            v-for="(participant, index) in participants"
            :key="index"
            class="col-6"
          >
            {{ participant.name.value }}
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'participants',
  computed: {
    ...mapState({ participants: state => state.game.participants })
  }
}
</script>