<template>
  <v-row
    no-gutters
    class="pa-1"
  >
    <v-card
      :color="color"
      width="100%"
      class="line-btn-text pa-3"
    >
      <v-icon
        :size="size"
      >
        $vuetify.icons.{{ icon }}
      </v-icon>
      {{ text }}
    </v-card>
  </v-row>
</template>
<script>
export default {
  props: [
    'text',
    'icon',
    'color',
    'size'
  ]
}
</script>
<style>
  .line-btn-text {
    font-size: 18px;
    line-height: 21px;
  }
  .line-btn-text.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 8px;
  }
</style>