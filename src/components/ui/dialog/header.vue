<template>
  <v-row
    no-gutters
    align="center"
    class="py-3 pl-1 dialog-header"
  >
    <v-col
      cols="1"
    >
      <circle-number :number="3" />
    </v-col>
    <v-col
      class="flex-grow-1"
    >
      <span style="font-size: 18px; color: #000">
        Total: 65
      </span>
    </v-col>
    <v-col
      cols="1"
      class="mr-5"
    >
      <close-button color="#000" />
    </v-col>
  </v-row>
</template>
<script>
import circleNumber from './cirlce.vue'
import closeButton from '../buttons/close.vue'
export default {
  name: 'DialogHeader',
  components: { circleNumber, closeButton }
}
</script>
<style>
  .dialog-header {
    background: #C4C4C4;
    border-radius: 10px 10px 0 0;
  }
</style>