<template>
  <v-content
    class="pb-0"
  >
    <v-container
      fluid
      class="pa-0"
    >
      <slider />
      <v-row
        class="px-4 mt-9"
      >
        <list-title
          title="PREMIER LEAGUE"
          iconName="flagBritain"
        />
        <v-row>
          <event
            :key="index"
            v-for="(event, index) in events"
            :time="event.time"
            :type="event.type"
            :teams="event.teams"
          />
        </v-row>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import slider from '../../ui/events/list/slider.vue'
import listTitle from '../../ui/events/list/title.vue'
import event from '../../ui/events/list/event.vue'
export default {
  components: { slider, listTitle, event },
  data: () => ({
    events: [
      {
        time: '09:40',
        type: 'soon',
        teams: {
          team1: { name: 'Team 1' },
          team2: { name: 'Team 2' }
        }
      },
      {
        time: '45:01',
        type: 'live',
        teams: {
          team1: { name: 'Default team', score: 2 },
          team2: { name: 'Random team', score: 12 }
        }
      }
    ]
  })
}
</script>