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
        <span>{{ left }}</span>
        <span style="vertical-align:3px"><v-icon
          size="15"
          :color="color"
        >$vuetify.icons.{{ icon }}</v-icon></span>
        <span>{{ right }}</span>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  props: {
    name: String,
    left: Number,
    right: Number,
    icon: String,
    color: String
  }
}
</script>