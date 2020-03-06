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
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'main-tabs',
  data: () => ({
    tab: 'test',
    items: ['All', 'Main', 'Handicap', 'Other', 'More tabs'],
    text: 'here will be new tabs'
  })
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
</style>