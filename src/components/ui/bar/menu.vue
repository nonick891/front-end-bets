<template>
  <v-bottom-navigation
    shift
    grow
  >
    <v-btn
      tile
      style="height:100%"
      @click.stop="toggleMenu"
    >
      <v-icon v-html="'$vuetify.icons.homeRun'"></v-icon>
    </v-btn>
    <v-btn
      tile
      style="height:100%"
    >
      <v-icon v-html="'$vuetify.icons.live'"></v-icon>
    </v-btn>
    <v-btn
      tile
      style="height:100%"
    >
      <v-icon v-html="'$vuetify.icons.toDo'"></v-icon>
    </v-btn>
    <v-btn
      tile
      style="height:100%"
    >
      <v-icon v-html="'$vuetify.icons.newsfeed'"></v-icon>
    </v-btn>
    <v-btn
      tile
      style="height:100%"
    >
      <v-icon v-html="'$vuetify.icons.wallet'"></v-icon>
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