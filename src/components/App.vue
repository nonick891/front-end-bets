<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app style="overflow: hidden">
    <basic-layout />
  </v-app>
</template>

<script>
import BasicLayout from './layouts/basic/index'
import EventsLoadingMixin from '../app/mixins/events-loading'
export default {
  name: 'App',
  mixins: [EventsLoadingMixin],
  components: { BasicLayout },
  mounted() {
    this.initEvents();
  }
}
</script>
<style>
  svg.colorised * {
    fill: currentColor;
  }
</style>
