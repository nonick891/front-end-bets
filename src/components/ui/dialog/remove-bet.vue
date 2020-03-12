<template>
  <v-container
    fill-height
    class="close-container"
  >
    <v-row
      no-gutters
      justify="center"
    >
      <close-button />
    </v-row>
  </v-container>
</template>
<script>
import CloseButton from '../buttons/close.vue'
export default {
  name: 'RemoveBet',
  components: { CloseButton }
}
</script>
<style>
  .close-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #7D2227;
  }
</style>