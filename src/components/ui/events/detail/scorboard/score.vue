<template>
  <v-col
    class="col-2 px-0 text-center"
  >
    <span class="font-weight-bold score">{{ score.player1['255'] }}</span>
    <span class="divider"></span>
    <span class="font-weight-bold score">{{ score.player2['255'] }}</span>
  </v-col>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('scoreboard', ['score']),
  }
}
</script>
<style>
  .score {
    font-size: 22px;
  }
  .divider {
    margin: 0 9px;
    border: 1px solid #999999;
  }
</style>