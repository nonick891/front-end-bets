<template>
  <v-row
    no-gutters
    class="pt-4 pb-2"
    align="center"
    justify="center"
  >
    <v-col
      class="flex-grow-0 flex-shrink-1"
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
    <v-col class="flex-grow-1">
      <v-breadcrumbs
        large
        class="pa-0 custom-breadcrumbs"
        :divider="'|'"
        :items="breadcrumbs"
      ></v-breadcrumbs>
    </v-col>
    <v-col cols="3">
      <v-card
        color="dark"
        class="d-flex flex-row-reverse"
      >
        <small-button
          @click.native="showParticipants"
          iconName="chart"
          :highlighted="expandParticipantsDetail"
        />
        <small-button
          @click.native="hideParticipants"
          iconName="calendar"
          :highlighted="!expandParticipantsDetail"
        />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import smallButton from '../buttons/small-icon.vue'
export default {
  name: 'CustomBreadcrumbs',
  components: { smallButton },
  computed: {
    ...mapState('interface', ['breadcrumbs', 'expandParticipantsDetail'])
  },
  methods: {
    ...mapMutations({
      showParticipants: 'interface/SHOW_PARTICIPANTS_DETAIL',
      hideParticipants: 'interface/HIDE_PARTICIPANTS_DETAIL'
    })
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
  .v-breadcrumbs.custom-breadcrumbs li:nth-child(even) {
    padding: 0 5px;
  }
</style>