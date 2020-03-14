<template>
  <v-btn
    tile
    x-small
    class="pa-0"
    color="dark"
  >
    <v-icon
      :color="highlighted ? 'border' : ''"
      size="16px"
    >$vuetify.icons.{{ iconName }}</v-icon>
  </v-btn>
</template>
<script>
export default {
  name: 'smallButton',
  props: {
    iconName: String,
    highlighted: Boolean
  },
}
</script>