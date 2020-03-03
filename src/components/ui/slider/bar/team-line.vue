<template>
  <v-col
    cols="12"
  >
    <v-row no-gutters>
      <v-col>
        {{ name }}
      </v-col>
      <v-col cols="2">
        {{ goals }}
      </v-col>
    </v-row>
    <v-row v-if="time" no-gutters>
      <v-col>
        {{ time }}
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: 'TeamLine',
  props: ['name', 'goals', 'time']
}
</script>