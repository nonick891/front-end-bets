<template>
  <v-row
    no-gutters
    class="pt-4 pb-2"
    align="center"
    justify="center"
  >
    <v-col
      cols="1"
      class="d-flex flex-row-reverse"
    >
      <v-btn
        tile
        x-large
        depressed
        color="dark"
        class="px-0 breadcrumb-back"
      >
        <v-icon
          size="20px"
          style="line-height: 20px"
        >$vuetify.icons.chevronLeft</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="8">
      <v-breadcrumbs
        large
        class="pa-0"
        :divider="'|'"
        :items="breadcrumbs"
      ></v-breadcrumbs>
    </v-col>
    <v-col cols="3">
      <v-card
        color="dark"
        class="d-flex flex-row-reverse"
      >
        <v-btn
          class="pa-0"
          x-small
          color="dark"
        >
          <v-icon
            size="16px"
          >$vuetify.icons.calendar</v-icon>
        </v-btn>
        <v-btn
          class="pa-0"
          x-small
          color="dark"
        >
          <v-icon
            size="16px"
          >$vuetify.icons.chart</v-icon>
        </v-btn>
      </v-card>
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
    text-transform: uppercase;
    color: #999999;
  }
  .v-breadcrumbs__divider {
    padding: 0 5px;
  }
</style>