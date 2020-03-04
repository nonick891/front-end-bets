<template>
  <v-col
    cols="12"
  >
    <v-row no-gutters>
      <v-col class="team-text">
        {{ name }}
      </v-col>
      <v-col class="team-text goals d-flex flex-row-reverse" cols="2">
        {{ goals }}
      </v-col>
    </v-row>
    <v-row v-if="time" no-gutters>
      <v-col class="team-text time">
        {{ time }}
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: 'TeamLine',
  props: ['name', 'goals', 'time']
}
</script>
<style>
  .team-text {
    color: #fff;
    font-size: 12px;
  }
  .team-text.time {
    color: #999999;
  }
  .team-text.goals {
    color: #F3C515;
  }
</style>