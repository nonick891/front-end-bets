<template>
  <v-row
    no-gutters
    align="center"
    class="dialog-footer"
  >
    <v-col
      class="flex-shrink-1 flex-grow-0 pl-1"
    >
      <v-icon
        size="20"
        color="#000"
      >$vuetify.icons.euro</v-icon>
    </v-col>
    <v-col
      class="flex-shrink-0 flex-grow-1 text-center"
    >
      <span class="dialog-total-money">0.0</span>
    </v-col>
    <v-col
      cols="6"
      class="dialog-left-border text-center"
    >
      <v-btn
        tile
        light
        depressed
        color="transparent"
        class="dialog-finish"
      >Finish</v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'DialogFooter'
}
</script>
<style>
  .dialog-footer {
    background: #F3C515;
    border-radius: 0 0 10px 10px;
  }
  .dialog-finish {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
  .dialog-left-border {
    border-left: 1px solid #000;
  }
  .dialog-total-money {
    font-size: 20px;
    line-height: 23px;
    color: #666;
  }
</style>