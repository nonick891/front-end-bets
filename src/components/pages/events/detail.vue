<template>
  <v-content
    class="pb-0"
  >
    <v-container
      fluid
      class="pa-0"
    >
      <bar-info />
      <v-col class="col-12 py-0">
        <scoreboard />
        <main-tabs />
      </v-col>
    </v-container>
  </v-content>
</template>
<script>
import BarInfo from '../../layouts/basic/bar-info.vue'
import Scoreboard from '../../ui/events/detail/scoreboard.vue'
import MainTabs from '../../ui/events/detail/tabs.vue'
export default {
  components: {
    BarInfo,
    Scoreboard,
    MainTabs
  }
}
</script>