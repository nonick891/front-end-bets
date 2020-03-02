<template>
  <v-row
    no-gutters
    align="center"
    justify="center"
  >
    <v-col cols="1">
      <v-btn
        tile
        depressed
        class="px-0 breadcrumb-back"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-col>
    <v-col col="10">
      <v-breadcrumbs
        class="px-0"
        :items="breadcrumbs"
        large
        :divider="'|'"
      ></v-breadcrumbs>
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CustomBreadcrumbs',
  computed: {
    ...mapState({ breadcrumbs: state => state.interface.breadcrumbs })
  }
}
</script>
<style>
  .breadcrumb-back {
    min-width: 0!important;
    height: 25px!important;
  }
  .v-breadcrumbs__item {
    color: #999999;
  }
</style>