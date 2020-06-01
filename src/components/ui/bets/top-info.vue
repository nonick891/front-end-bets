<template>
  <v-col
    cols="12"
  >
    <v-row
      no-gutters
    >
      <v-col cols="10">
        <v-row no-gutters>
          <v-col cols="12">
            {{ category }} <span class="grey-text">Bet Category</span>
          </v-col>
          <v-col
            cols="12"
            class="grey-text"
          >
            Result
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="2"
        class="text-right"
      >
        <v-icon v-if="icon">
          $vuetify.icons.{{ icon }}
        </v-icon>
      </v-col>
    </v-row>
    <v-row
      no-gutters
    >
      <v-col>
        {{ name }}
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  props: ['category', 'icon', 'name']
}
</script>
<style>
  .grey-text {
    font-size: 14px;
    line-height: 16px;
    color: #4C4C4C;
  }
</style>