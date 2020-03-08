<template>
  <v-btn
    tile
    depressed
    width="20"
    class="pa-0"
    min-width="40"
    color="transparent"
  >
    <v-icon
      :color="color"
      size="15px"
    >$vuetify.icons.close</v-icon>
  </v-btn>
</template>
<script>
export default {
  props: ['color']
}
</script>