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
          Game team 1
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="bet-decision">
          Bet decision 1
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="bet-decision">
          Bet decision 2
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="2"
    >
      
      <!--<v-row
        no-gutters
        justify="center"
      >
        <v-row
          no-gutters
          class="mt-2 mb-1"
        >
          <v-col class="bet-game-name">test</v-col>
        </v-row>
        <v-row
          no-gutters
        >
          <v-col class="bet-decision">2.75</v-col>
        </v-row>
        <v-row
          no-gutters
        >
          <v-col class="bet-decision">1.65</v-col>
        </v-row>
      </v-row>-->
      
      <v-container
        fill-height
        style="background-color: #7D2227"
      >
        <v-row
          no-gutters
          justify="center"
        >
          <close-button />
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>
<script>
import CloseButton from '../buttons/close.vue'
export default {
  name: 'DialogItem',
  components: { CloseButton }
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