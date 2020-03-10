<template>
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
</template>
<script>
import CloseButton from '../buttons/close.vue'
export default {
  name: 'RemoveBet',
  components: { CloseButton }
}
</script>