<template>
  <v-row
    no-gutters
    align="center"
    class="dialog-header py-1 pl-1"
  >
    <v-col
      cols="1"
    >
      <circle-number :number="3" />
    </v-col>
    <v-col
      class="flex-grow-1"
    >
      <span class="dialog-total">
        Total: 65
      </span>
    </v-col>
    <v-col
      class="flex-grow-0 flex-shrink-1"
    >
      <close-button
        color="#000"
        width="20"
        min-width="40"
      />
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
  .dialog-total {
    font-size: 18px;
    line-height: 21px;
    color: #000;
  }
</style>