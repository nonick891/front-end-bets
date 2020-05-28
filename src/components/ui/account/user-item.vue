<template>
  <v-col
    cols="12"
  >
    <v-row
      no-gutters
    >
      <v-col
        cols="1"
      >
        <v-icon>
          $vuetify.icons.close
        </v-icon>
      </v-col>
      <v-col
        cols="5"
        class="text-left"
      >
        username 1
      </v-col>
      <v-col
        cols="5"
        class="text-right"
      >
        24.42 EUR
      </v-col>
      <v-col
        cols="1"
      >
        <v-icon>
          $vuetify.icons.lock
        </v-icon>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  data: () => ({})
}
</script>