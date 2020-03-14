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
  .icon {
    transition: all .5s;
  }
  .icon.rotate {
    transform: rotate(180deg);
  }
</style>