<template>
  <v-btn
    tile
    depressed
    class="pa-0"
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
  props: {
    color: String
  }
}
</script>