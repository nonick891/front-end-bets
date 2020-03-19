<template>
  <v-row>
    <v-col
      class="col-12 pa-0"
    >
      <v-card
        color="transparent"
      >
        <v-tabs
          grow
          dark
          v-model="tab"
          height="40px"
          class="groups"
          :show-arrows="false"
          slider-color="border"
          background-color="transparent"
        >
          <v-tab
            :key="key"
            v-for="(group, key) in groups"
          >{{ group.name }}</v-tab>
        </v-tabs>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-tabs-items v-model="tab">
        <v-tab-item
          :key="key"
          v-for="(group, key) in groups"
        >
          <game
            :key="key"
            v-for="(game, key) in games[group.id]"
            :odd="game"
          />
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from 'vuex'
import game from './game.vue'
export default {
  name: 'main-tabs',
  components: { game },
  data: () => ({
    tab: null
  }),
  computed: {
    ...mapState('bet', ['games']),
    ...mapState('group', ['groups'])
  }
}
</script>
<style>
  .v-slide-group__wrapper {
    border-bottom: 1px solid #999999;
  }
  .theme--dark.v-tabs.groups .v-tab--active:hover::before,
  .theme--dark.v-tabs.groups .v-tab--active::before {
    opacity: 0;
  }
  .theme--dark.v-tabs.groups > .v-tabs-bar .v-tab,
  .theme--dark.v-tabs.groups > .v-tabs-bar .v-tab:not(.v-tab--active) {
    padding: 0;
    color: white;
    font-weight: 400;
    letter-spacing: 0;
  }
  .v-slide-group__wrapper div {
    font-size: 15px;
    line-height: 18px;
    text-transform: none;
  }
  .v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__prev.v-slide-group__prev--disabled {
    display: none;
  }
  .theme--dark.v-tabs-items {
    background-color: transparent;
  }
</style>