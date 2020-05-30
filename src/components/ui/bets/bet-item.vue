<template>
  <v-row
    no-gutters
  >
    <top-info
      :icon="'time'"
      :category="'Team 1'"
      :gameName="'Team 1 - Team 2'"
    />
    <v-col>
      <v-row
        no-gutters
      >
        <v-col cols="12">
          
          <table-header />
          
          <table-item
            :investment="10"
            :odds="2.75"
            :winnings="27.5"
          />
          
          <table-footer
            :time="'23:40'"
            :betId="2238642"
          />
        
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import topInfo from '../../ui/bets/top-info.vue'
import tableHeader from '../../ui/bets/table-header.vue'
import tableItem from '../../ui/bets/table-item.vue'
import tableFooter from '../../ui/bets/table-footer.vue'
export default {
  components: {
    topInfo,
    tableHeader,
    tableItem,
    tableFooter
  },
  props: {
  
  }
}
</script>