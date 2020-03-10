<template>
  <v-row
    no-gutters
    align="stretch"
    class="dialog-item"
  >
    <v-col
      cols="10"
      class="pb-3 pl-1"
    >
      <v-row
        no-gutters
        class="mt-2 mb-1"
      >
        <v-col class="bet-game-name">
          {{ decision.name }}
        </v-col>
      </v-row>
      <v-row
        no-gutters
        :key="key"
        v-for="(item, key) in decision.items"
      >
        <v-col class="bet-decision">
          {{ item.name }}
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="2"
    >
      <v-container
        fill-height
      >
        <v-row
          no-gutters
          align="stretch"
          justify="center"
          class="text-right mt-4"
        >
          <v-col
            :key="key"
            v-for="(item, key) in decision.items"
            class="bet-decision"
          >{{ item.value }}</v-col>
        </v-row>
      </v-container>
  
      <!--<remove-bet />-->
    </v-col>
  </v-row>
</template>
<script>
//import RemoveBet from './remove-bet.vue'
export default {
  name: 'DialogItem',
//  components: { RemoveBet },
  props: {
    decision: Object
  }
}
</script>
<style>
  .dialog-item {
    background-color: #4C4C4C;
    border-top: 1px solid #999999;
  }
  .dialog-item.no-border-top {
    border-top: none;
  }
  .bet-game-name {
    font-size: 16px;
    line-height: 19px;
  }
  .bet-decision {
    line-height: 16px;
    font-size: 14px;
  }
</style>