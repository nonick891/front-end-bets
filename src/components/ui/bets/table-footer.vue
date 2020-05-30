<template>
  <v-row
    no-gutters
  >
    <v-col
      cols="6"
      class="text-left footer-text"
    >
      {{ time }}
    </v-col>
    <v-col
      cols="6"
      class="text-right footer-text"
    >
      {{ betId }}
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: ['time', 'betId']
}
</script>
<style>
  .footer-text {
    font-size: 12px;
    line-height: 14px;
    color: #999;
  }
</style>