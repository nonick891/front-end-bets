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
        v-if="icon"
        :size="size"
      >
        $vuetify.icons.{{ icon }}
      </v-icon>
      {{ text }}
      <v-icon
        v-if="icon2"
        :size="size"
      >
        $vuetify.icons.{{ icon2 }}
      </v-icon>
    </v-card>
  </v-row>
</template>
<script>
export default {
  props: {
    text: String,
    icon: String,
    icon2: String,
    color: {
      type: String,
      default: '#4C4C4C'
    },
    size: String,
  }
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
  .line-btn-text.v-card > *:last-child:not(.v-btn):not(.v-chip) {
    border-radius: 0;
  }
</style>