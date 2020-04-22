<template>
  <v-col class="col-12 py-0">
    <scoreboard />
    <main-tabs />
  </v-col>
</template>
<script>
import Scoreboard from '../../ui/events/detail/scoreboard.vue'
import MainTabs from '../../ui/events/detail/tabs.vue'
export default {
  components: { Scoreboard, MainTabs }
}
</script>