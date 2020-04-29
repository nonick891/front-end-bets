<template>
  <v-row>
    <v-col
      class="col-12 pa-0"
    >
      <v-card
        tile
        outlined
        class="participants"
      >
        <v-row
          no-gutters
          align="center"
        >
          <v-col
            class="col-5 text-center font-weight-bold team-title"
          >
            {{ get(participants, '0.name.short', '') }}
          </v-col>
          <score v-if="stage === 'Live'" />
          <start-date v-else-if="stage === 'PreMatch'" />
          <v-col
            class="col-5 text-center font-weight-bold team-title"
          >
            {{ get(participants, '1.name.short', '') }}
          </v-col>
        </v-row>
        <v-row
          v-if="stage === 'Live'"
          no-gutters
          class="mt-2"
        >
          <v-col
            class="text-center time"
          >
            {{ timer.running ? period : '' }} 43:30
          </v-col>
        </v-row>
        <v-row
          v-if="!expandParticipantsDetail && stage === 'Live'"
          class="mt-4"
          no-gutters
        >
          <score-messages />
          <v-col class="flex-shrink-1 flex-grow-0">
            <toggle-button
              :rotate="toggleScoreboardControl"
              @click.native="toggleScoreboard"
            />
          </v-col>
        </v-row>
        <v-row
          v-if="expandParticipantsDetail && stage === 'Live'"
          no-gutters
          class="pt-1"
        >
          <v-col>
            <scoreboard-period />
          </v-col>
        </v-row>
        <scoreboard-details
          v-if="expandParticipantsDetail && stage === 'Live'"
        />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { get } from 'lodash'
import { mapState, mapMutations } from 'vuex'
import toggleButton from '../../buttons/toggle.vue'
import scoreboardPeriod from '../../tabs/scoreboard-period.vue'
import scoreboardDetails from './scorboard/scoarboard-details.vue'
import scoreMessages from './scorboard/score-messages.vue'
import score from './scorboard/score.vue'
import startDate from './scorboard/start-date.vue'
export default {
  name: 'participants',
  components: {
    toggleButton,
    score,
    startDate,
    scoreMessages,
    scoreboardPeriod,
    scoreboardDetails
  },
  data: () => ({
    get: get
  }),
  computed: {
    ...mapState('game', ['participants']),
    ...mapState('scoreboard', ['stage', 'period', 'timer']),
    ...mapState('interface', ['expandParticipantsDetail', 'toggleScoreboardControl'])
  },
  methods: {
    ...mapMutations({
      toggleScoreboard: 'interface/TOGGLE_SCOREBOARD'
    })
  }
}
</script>
<style>
  .time {
    font-size: 11px;
  }
  .team-title {
    font-size: 16px;
  }
  .participants {
    width: 100%;
    border: none!important;
    background: linear-gradient(180deg, #009918 -22.02%, rgba(7, 150, 39, 0) 122.02%);
  }
  .details {
    font-size: 12px;
    line-height: 14px;
  }
</style>