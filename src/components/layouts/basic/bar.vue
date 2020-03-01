<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app-bar
    app
    clipped-left
  >
    <main-menu />
    <template v-slot:extension>
      <v-btn
        tile
        depressed
        class="px-0 mr-3 pr-3 breadcrumb-back"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-breadcrumbs class="px-0" :items="breadcrumbs" large></v-breadcrumbs>
    </template>
  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex'
import mainMenu from '../../ui/bar/menu.vue'
export default {
  name: 'BasicBar',
  components: { mainMenu },
  computed: {
    ...mapState({ breadcrumbs: state => state.interface.breadcrumbs })
  }
}
</script>
<style>
  .breadcrumb-back {
    min-width: 0!important;
    height: 25px!important;
    border-right: 1px solid #fff
  }
  .v-app-bar .v-toolbar__content {
    padding: 0;
  }
</style>