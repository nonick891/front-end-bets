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
          <v-col
            class="col-2 px-0 text-center"
          >
            <span class="font-weight-bold score">1</span>
            <span class="divider"></span>
            <span class="font-weight-bold score">3</span>
          </v-col>
          <v-col
            class="col-5 text-center font-weight-bold team-title"
          >
            {{ get(participants, '1.name.short', '') }}
          </v-col>
        </v-row>
        <v-row
          no-gutters
          class="mt-2"
        >
          <v-col
            class="text-center time"
          >
            43:30
          </v-col>
        </v-row>
        <v-row
          class="mt-4"
          no-gutters
        >
          <v-col class="flex-grow-1">
            <span>
              <v-icon size="14">$vuetify.icons.flag</v-icon>
            </span>
            <span class="details">
              7th corner for Team 1
            </span>
          </v-col>
          <v-col class="flex-shrink-1 flex-grow-0">
            <toggle-button
              :rotate="expandParticipantsDetail"
              @click.native="toggleParticipants"
            />
          </v-col>
        </v-row>
        <v-row
          v-if="expandParticipantsDetail"
          no-gutters
          class="pt-1"
        >
          <v-col>
            <half-time />
          </v-col>
        </v-row>
        <participant-events
          v-if="expandParticipantsDetail"
        />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { get } from 'lodash'
import { mapState, mapMutations } from 'vuex'
import toggleButton from '../../buttons/toggle.vue'
import halfTime from '../../tabs/participants-halftime.vue'
import participantEvents from './participant-events.vue'
export default {
  name: 'participants',
  components: { toggleButton, halfTime, participantEvents },
  data: () => ({
    get: get
  }),
  computed: {
    ...mapState('game', ['participants']),
    ...mapState('interface', ['expandParticipantsDetail', 'toggleParticipantsControl'])
  },
  methods: {
    ...mapMutations({ toggleParticipants: 'interface/TOGGLE_PARTICIPANTS_DETAIL' })
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
  .score {
    font-size: 22px;
  }
  .divider {
    margin: 0 9px;
    border: 1px solid #999999;
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