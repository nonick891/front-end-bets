<template>
  <v-row no-gutters>
    <v-col cols="11">{{ title }}</v-col>
    <v-col cols="1">
      <toggle-button
        v-show="!show"
      />
    </v-col>
  </v-row>
</template>
<script>
import toggleButton from '../../../buttons/toggle.vue'
export default {
  name: 'ToggleButton',
  components: { toggleButton },
  props: ['show', 'title']
}
</script>