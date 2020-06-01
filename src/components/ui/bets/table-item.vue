<template>
  <v-row
    no-gutters
  >
    <v-col
      cols="4"
      class="item-text"
    >
      {{ investment }} EUR
    </v-col>
    <v-col
      cols="4"
      class="item-text text-center"
    >
      {{ odds }}
    </v-col>
    <v-col
      cols="4"
      class="item-text text-right"
    >
      {{ winnings }} EUR
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: ['investment', 'odds', 'winnings']
}
</script>
<style>
  .item-text {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
  }
</style>