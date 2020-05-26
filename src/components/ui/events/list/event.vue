<template>
  <v-col
    cols="12"
    class="px-5 list-event-border"
  >
    <team :team="teams.team1"/>
    <team :team="teams.team2"/>
    <v-row no-gutters>
      <v-col>
        <span
          class="list-type-text"
        >
          {{ typeText }} {{ isSoon ? time : '' }}
        </span>
        <span
          v-if="!isSoon"
          class="list-time-text"
        >
          {{ time }}
        </span>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
import team from './team.vue'
export default {
  components: { team },
  props: {
    teams: Object,
    time: String,
    type: {
      default: 'soon',
      type: String
    }
  },
  computed: {
    isSoon() {
      return this.type === 'soon';
    },
    typeText() {
      return this.isSoon ? 'STARTING SOON at' : 'LIVE'
    }
  }
}
</script>
<style>
  .list-type-text {
    font-size: 11px;
    line-height: 13px;
    color: #F3C515;
  }
  .list-time-text {
    font-size: 11px;
    line-height: 13px;
    color: #999999;
  }
  .list-event-border {
    border-bottom: .5px solid #4C4C4C;
  }
  .list-event-border:last-child {
    border-bottom: none;
  }
</style>