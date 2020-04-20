<template>
  <v-row>
    <v-col
      cols="12"
      class="pt-4 pb-1"
    >
      <v-row
        no-gutters
        align="center"
        justify="center"
      >
        <scoreboard-event
          name="Yellow Card"
          :left="yellowCards.player1"
          icon="yellowCard"
          :right="yellowCards.player2"
          color="#F7AC16"
        />
        <scoreboard-event
          name="Goal"
          :left="goals.player1"
          icon="ball"
          :right="goals.player2"
          color="#fff"
        />
        <scoreboard-event
          name="Corner"
          :left="corners.player1"
          icon="flag"
          :right="corners.player2"
          color="#fff"
        />
      </v-row>
    </v-col>
    <v-col
      cols="12"
      class="pb-5 pt-2"
    >
      <v-row
        no-gutters
        align="center"
        justify="center"
      >
        <scoreboard-event
          name="Red Card"
          :left="redCards.player1"
          icon="redCard"
          :right="redCards.player2"
          color="#D32030"
        />
        <scoreboard-event
          name="Penalty"
          :left="penalties.player1"
          icon="sanction"
          :right="penalties.player2"
          color="#fff"
        />
        <scoreboard-event
          name="Subs"
          :left="2"
          icon="exchange"
          :right="0"
          color="#fff"
        />
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from 'vuex'
import scoreboardEvent from './scoreboard-event.vue'
export default {
  components: { scoreboardEvent },
  computed: {
    ...mapState('scoreboard', [
      'goals',
      'redCards',
      'yellowCards',
      'corners',
      'penalties'
    ])
  }
}
</script>