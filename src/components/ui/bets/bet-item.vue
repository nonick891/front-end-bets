<template>
  <v-row
    no-gutters
    v-if="bet"
    class="bet-item my-2 py-1"
  >
    <top-info
      :icon="bet.icon"
      :category="bet.category"
      :name="bet.name"
      class="px-4 my-1"
    />
    <v-col
      class="px-4 separator"
    >
      <v-row
        no-gutters
        class="mt-1 mb-2"
      >
        <v-col cols="12">
          
          <table-header
          />
          
          <table-item
            class="pl-2 mt-1"
            :investment="bet.investment"
            :odds="bet.odds"
            :winnings="bet.winnings"
          />
          
          <table-footer
            class="mt-2"
            :id="bet.id"
            :time="bet.time"
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
  props: ['bet']
}
</script>
<style>
  .bet-item {
    border: 1px solid #4C4C4C;
    border-radius: 15px;
  }
  .separator {
    border-top: .5px solid #4C4C4C;
  }
</style>