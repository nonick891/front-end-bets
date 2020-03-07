<template>
  <v-bottom-navigation
    tile
    grow
    color="border"
    class="colored"
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
      style="height:100%"
    >
      <v-row no-gutters>
        <v-col style="font-size: 13px" cols="12">
          MIKEL
        </v-col>
        <v-col offset="3" cols="3">
          <v-icon size="13">$vuetify.icons.wallet</v-icon>
        </v-col>
        <v-col cols="3">23</v-col>
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
  .theme--dark.v-bottom-navigation.colored .v-btn:not(.v-btn--active) {
    color: #fff!important;
  }
  .v-toolbar__content {
    border-bottom: 1.1px solid #A58625;
  }
</style>