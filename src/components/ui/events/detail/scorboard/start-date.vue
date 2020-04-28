<template>
  <v-col>
    <v-row justify="center">
      <span class="time-font">
        {{ startDateFormatted }}
      </span>
    </v-row>
    <v-row justify="center">
      <span class="time-font">
        {{ startTimeFormatted }}
      </span>
    </v-row>
  </v-col>
</template>
<script>
import dateTimeMixin from '../../../../../app/mixins/date-time-scorboard'
export default {
  mixins: [dateTimeMixin]
}
</script>
<style>
  .time-font {
    font-size: .6875em;
  }
</style>