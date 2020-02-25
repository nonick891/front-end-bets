<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-content
  >
    <v-container
      class="fill-height pa-0"
      fluid
    >
      <events-detail-page />
    </v-container>
  </v-content>
</template>
<script>
import EventsDetailPage from '../../pages/events/detail.vue'
export default {
  components: { EventsDetailPage }
}
</script>