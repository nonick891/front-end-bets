<template>
  <v-bottom-navigation
    tile
    grow
  >
    <v-btn
      tile
      style="height:100%"
      @click.stop="toggleMenu"
    >
      <v-icon>$vuetify.icons.homeRun</v-icon>
    </v-btn>
    <v-btn
      tile
      style="height:100%"
    >
      <v-icon>$vuetify.icons.live</v-icon>
    </v-btn>
    <v-btn
      tile
      style="height:100%"
    >
      <v-icon>$vuetify.icons.ball</v-icon>
    </v-btn>
    <v-btn
      tile
      style="height:100%"
    >
      <v-icon>$vuetify.icons.newsfeed</v-icon>
    </v-btn>
    <v-btn
      tile
      style="height:100%"
    >
      <v-icon>$vuetify.icons.wallet</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'mainMenu',
  methods: {
    ...mapMutations({ toggleMenu: 'interface/TOGGLE_MENU' })
  }
}
</script>