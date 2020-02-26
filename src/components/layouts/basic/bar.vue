<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app-bar
    app
    clipped-left
  >
    <v-toolbar-title>bet</v-toolbar-title>
    <v-spacer />
    <template v-slot:extension>
      <v-btn
        tile
        depressed
        class="px-0 mr-3 pr-3 breadcrumb-back"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-breadcrumbs class="px-0" :items="breadcrumbs" large></v-breadcrumbs>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: 'BasicBar',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Country',
        disabled: false,
      },
      {
        text: 'Premier league',
        disabled: false,
      }
    ]
  })
}
</script>
<style>
  .breadcrumb-back {
    min-width: 0!important;
    height: 25px!important;
    border-right: 1px solid #fff
  }
</style>