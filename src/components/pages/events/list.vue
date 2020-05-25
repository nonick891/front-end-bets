<template>
  <v-content
    class="pb-0"
  >
    <v-container
      fluid
      class="pa-0"
    >
      <slider />
    </v-container>
  </v-content>
</template>
<script>
import slider from '../../ui/events/list/slider.vue'
export default {
  components: { slider }
}
</script>