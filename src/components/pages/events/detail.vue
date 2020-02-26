<template>
  <v-col class="col-12 py-0">
    <participants />
    <main-tabs />
  </v-col>
</template>
<script>
import Participants from '../../ui/events/detail/participants.vue'
import MainTabs from '../../ui/events/detail/tabs.vue'
export default {
  components: { Participants, MainTabs }
}
</script>