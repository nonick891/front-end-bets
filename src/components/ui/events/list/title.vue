<template>
  <v-card
    outlined
    width="100%"
    class="event-title"
  >
    <v-icon
      size="15"
      v-if="iconName"
    >
      $vuetify.icons.{{ iconName }}
    </v-icon>
    {{ title }}
  </v-card>
</template>
<script>
export default {
  name: 'listTitle',
  props: {
    title: String,
    iconName: {
      default: '',
      type: String
    }
  }
}
</script>
<style>
  .theme--dark.v-card.event-title {
    background: #4C4C4C;
    border-radius: 8px;
    border: none;
    color: #999999;
  }
</style>