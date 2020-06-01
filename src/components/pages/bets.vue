<template>
  <v-content
    class="pb-0"
  >
    <v-container
      fluid
      class="pa-1"
    >
      <title-date
        class="mt-4 px-1"
        title="Date"
      />
      
      <bet-item
        :key="index"
        v-for="(bet, index) in bets"
        :bet="bet"
      />
      
      <title-date
        class="mt-1 px-1"
        title="Date"
      />
      
      <bet-item
        :key="index2"
        v-for="(bet2, index2) in bets"
        :bet="bet2"
      />
    </v-container>
  </v-content>
</template>
<script>
import titleDate from '../ui/events/list/title.vue'
import betItem from '../ui/bets/bet-item.vue'
export default {
  components: { titleDate, betItem },
  data: () => ({
    bets: [{
      id: 2238642,
      icon: 'time',
      category: 'Team 1',
      name: 'Team 1 - Team 2',
      investment: 10,
      odds: 2.75,
      winnings: 27.5,
      time: '23:40'
    }]
  })
}
</script>