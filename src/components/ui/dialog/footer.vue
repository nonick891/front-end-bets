<template>
  <v-row
    no-gutters
    align="center"
    class="dialog-footer py-1"
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
      cols="5"
      class="flex-shrink-0 flex-grow-1 text-center"
    >
      <input
        title="bet"
        pattern="[0-9]*"
        inputmode="numeric"
        :value="bet"
        @input="updateBet"
        type="number"
        class="dialog-total-money"
      />
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
  name: 'DialogFooter',
  model: {
    prop: 'bet',
    event: 'change-bet'
  },
  props: {
    bet: Number
  },
  methods: {
    updateBet(e) {
      let value = parseFloat(e.target.value);
      this.$emit('change-bet', value ? value : 0)
    }
  }
}
</script>
<style>
  .dialog-footer {
    background: #F3C515;
    border-radius: 0 0 10px 10px;
  }
  .v-btn.dialog-finish {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.1em;
  }
  .dialog-left-border {
    border-left: 1px solid #000;
  }
  .dialog-total-money[type=number] {
    font-size: 20px;
    line-height: 23px;
    width: 100%;
    text-align: center;
    color: #666;
    outline: none;
  }
</style>