<template>
  <v-col
    cols="12"
  >
    <v-row
      no-gutters
      class="pa-3"
      align="center"
    >
      <v-col
        cols="1"
      >
        <div
          class="text-center cross-circle"
        >
          <v-icon
            size="14"
            color="#bb2f3d"
          >
            $vuetify.icons.close
          </v-icon>
        </div>
      </v-col>
      <v-col
        cols="5"
        class="text-left"
      >
        {{ username }}
      </v-col>
      <v-col
        cols="5"
        class="text-right pr-2"
      >
        {{ price }} EUR
      </v-col>
      <v-col
        cols="1"
        class="text-center"
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
  props: ['username', 'price']
}
</script>
<style>
  .cross-circle {
    width: 26px;
    border-radius: 35px;
    border: 1px solid #bb2f3d;
  }
</style>