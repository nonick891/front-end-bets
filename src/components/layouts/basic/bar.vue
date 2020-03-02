<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app-bar
    app
    flat
    clipped-left
  >
    <main-menu />
  </v-app-bar>
</template>
<script>
import mainMenu from '../../ui/bar/menu.vue'
export default {
  name: 'BasicBar',
  components: { mainMenu }
}
</script>
<style>
  .v-app-bar .v-toolbar__content {
    padding: 0;
  }
  .v-app-bar .v-toolbar__extension {
    padding-left: 0;
    padding-right: 0;
  }
</style>