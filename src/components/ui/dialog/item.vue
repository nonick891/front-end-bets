<template>
  <v-row
    no-gutters
    align="center"
    class="dialog-item"
  >
    <v-col
      cols="10"
    >
      <v-row no-gutters>
        <v-col>
          Game team 1
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          Bet decision 1
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          Bet decision 2
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="2"
    >
      <v-row
        no-gutters
        align="center"
        justify="center"
      >
          <close-button/>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import CloseButton from '../buttons/close.vue'
export default {
  components: { CloseButton }
}
</script>
<style>
  .dialog-item {
    background-color: #4C4C4C;
  }
  .dialog-item.border-top {
    border-top: 1px solid #999999;
  }
</style>