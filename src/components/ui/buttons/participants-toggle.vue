<template>
  <v-btn
    tile
    x-small
    depressed
    color="transparent"
  >
    <v-icon
      size="10"
      class="icon"
      :class="rotate ? 'rotate' : false"
    >$vuetify.icons.chevronBottom</v-icon>
  </v-btn>
</template>
<script>
export default {
  name: 'participantsButton',
  props: ['rotate']
}
</script>
<style>
  .v-btn .icon {
    transition: transform 0s;
  }
  .v-btn .icon.rotate {
    transform: rotate(180deg);
  }
</style>