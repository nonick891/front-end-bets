<template>
  <v-col>
    <v-row no-gutters justify="center">
      <v-col
        cols="12"
        class="text-center"
        style="line-height: 1"
      >
        <span style="text-transform: uppercase; font-size: 13px;">{{ name }}</span>
      </v-col>
      <v-col
        cols="12"
        class="text-center"
        style="line-height: 1"
      >
        <span>{{ left[periodIndex] }}</span>
        <span style="vertical-align:3px"><v-icon
          size="15"
          :color="color"
        >$vuetify.icons.{{ icon }}</v-icon></span>
        <span>{{ right[periodIndex] }}</span>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    name: String,
    left: Object,
    right: Object,
    icon: String,
    color: String
  },
  computed: {
    ...mapState('scoreboard', ['periodIndex'])
  }
}
</script>