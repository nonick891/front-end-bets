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
      
      <bet-item />
      
      <title-date
        class="mt-1 px-1"
        title="Date"
      />
      <bet-item />
    </v-container>
  </v-content>
</template>
<script>
import titleDate from '../ui/events/list/title.vue'
import betItem from '../ui/bets/bet-item.vue'
export default {
  components: { titleDate, betItem }
}
</script>