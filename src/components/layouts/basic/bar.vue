<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app-bar
    app
    clipped-left
  >
    <v-bottom-navigation
      shift
    >
      <v-btn
        value="recent"
        @click.stop="toggleMenu"
      >
        <span>Menu</span>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn
        tile
      >
        <span>Live</span>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn
        tile
      >
        <span>Betslip</span>
        <v-icon>mdi-clipboard-list-outline</v-icon>
      </v-btn>
      <v-btn
        tile
      >
        <span>My bets</span>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn
        tile
      >
        <span>Slots</span>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
import { mapMutations } from 'vuex'
export default {
  name: 'BasicBar',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Country',
        disabled: false,
      },
      {
        text: 'Premier league',
        disabled: false,
      }
    ]
  }),
  methods: {
    ...mapMutations({ toggleMenu: 'interface/TOGGLE_MENU' })
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