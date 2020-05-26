<template>
  <v-row no-gutters>
    <v-col
      cols="11"
      class="list-team-text"
    >
      {{ team.name }}
    </v-col>
    <v-col
      class="text-center list-score-text"
      v-if="team.score"
    >
      {{ team.score }}
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    team: Object
  }
}
</script>
<style>
  .list-team-text {
    font-size: 14px;
    line-height: 16px;
  }
  .list-score-text {
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
  }
</style>