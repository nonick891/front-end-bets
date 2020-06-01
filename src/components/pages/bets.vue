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
      
    </v-container>
  </v-content>
</template>
<script>
import titleDate from '../ui/events/list/title.vue'
import betItem from '../ui/bets/bet-item.vue'
export default {
  components: { titleDate, betItem },
  data: () => ({
    bets: [
      {
        id: 2238642,
        icon: 'time',
        category: 'Team 1',
        name: 'Team 1 - Team 2',
        investment: 10,
        odds: 2.75,
        winnings: 0,
        time: '23:40'
      },
      {
        id: 2238641,
        icon: 'thumbsUp',
        category: 'Team 2',
        name: 'Team 1 - Team 2',
        investment: 2,
        odds: 1.75,
        winnings: 3.5,
        time: '12:01'
      },
      {
        id: 2238640,
        icon: 'thumbsDown',
        category: 'Team 1',
        name: 'Team 1 - Team 2',
        investment: 1,
        odds: 1.05,
        winnings: 0,
        time: '12:01'
      }
    ]
  })
}
</script>