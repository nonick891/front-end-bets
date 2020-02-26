<template>
  <v-col class="col-12 py-0">
    <participants />
    <v-tabs style="color: white">
      <v-tab>Item One</v-tab>
      <v-tab>Item Two</v-tab>
      <v-tab>Item Three</v-tab>
    </v-tabs>
  </v-col>
</template>
<script>
import Participants from '../../ui/events/detail/participants.vue'
export default {
  components: { Participants }
}
</script>