<template>
  <v-tabs
    v-model="selectedPeriodTab"
    centered
    class="half-time"
    slider-color="border"
    background-color="transparent"
  >
    <v-tab
      href="#tab-1h"
    >
      1H
    </v-tab>
    <v-tab
      href="#tab-2h"
    >
      2H
    </v-tab>
    <v-tab
      href="#tab-fh"
    >
      FH
    </v-tab>
  </v-tabs>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    selectedPeriodTab: {
      get() {
        return this.$store.state.scoreboard.selectedPeriodTab;
      },
      set(value) {
        this.$store.state.scoreboard.selectedPeriodTab = value;
      }
    },
    ...mapState('scoreboard', ['period'])
  },
  watch: {
    selectedPeriodTab(value) {
      this.$store.state.scoreboard.periodIndex = this.getPeriodIndex(value);
    }
  },
  methods: {
    getPeriodIndex(tab) {
      switch (tab) {
        case 'tab-1h': return 1;
        case 'tab-2h': return 3;
        case 'tab-fh': return 255;
      }
    }
  }
}
</script>
<style>
  .half-time .v-item-group a {
    height: 21px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  .theme--dark.v-tabs.half-time > .v-tabs-bar .v-tab:not(.v-tab--active) {
    color: #fff;
  }
  .half-time .v-item-group,
  .half-time .v-slide-group__content {
    height: 28px;
  }
  .v-tabs-slider-wrapper {
    border-left: 4px solid transparent;
  }
  .half-time a:nth-child(3) {
    border-left: 2px solid #fff;
    border-right: 2px solid #fff;
  }
  .theme--dark.v-tabs.half-time .v-tab--active:hover::before,
  .theme--dark.v-tabs.half-time .v-tab--active::before {
    opacity: 0;
  }
  .theme--dark.v-tabs.half-time .v-slide-group__wrapper {
    border-bottom: none;
  }
</style>