<template>
  <v-bottom-navigation
    tile
    grow
    background-color="dark"
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
      class="white-text"
      style="height:100%"
    >
      <v-row no-gutters>
        <v-col cols="12">
          MIKEL
        </v-col>
        <v-col offset="3" cols="3">
          <v-icon size="13">$vuetify.icons.wallet</v-icon>
        </v-col>
        <v-col offset="1" cols="3">23</v-col>
      </v-row>
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
<style>
  .white-text {
    color: #fff;
  }
  .v-toolbar__content {
    border-bottom: 2px solid #4C4C4C;
  }
</style>