<template>
  <v-row
    no-gutters
    align="center"
    class="dialog-header py-1 pl-1"
  >
    <v-col
      cols="1"
      @click="toggleDialogPopup"
    >
      <total-circle :number="count" />
    </v-col>
    <v-col
      class="flex-grow-1"
      @click="toggleDialogPopup"
    >
      <span class="dialog-total">
        Total: {{ totalMoney }}
      </span>
    </v-col>
    <v-col
      class="flex-grow-0 flex-shrink-1"
    >
      <close-button
        color="#000"
        width="20"
        min-width="40"
        @click.native="closeDialog"
      />
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import totalCircle from './cirlce.vue'
import closeButton from '../buttons/close.vue'
export default {
  name: 'DialogHeader',
  model: {
    prop: 'opened',
    event: 'toggle-modal'
  },
  props: {
    opened: Boolean,
    count: Number,
    total: Number
  },
  components: { totalCircle, closeButton },
  computed: {
    ...mapGetters({ totalMoney: 'bet/totalMoney' }),
    toggleDialog: {
      get() {
        return this.$store.state.interface.toggleDialogControl;
      },
      set(value) {
        this.$store.state.interface.toggleDialogControl = value;
      }
    }
  },
  methods: {
    ...mapMutations({ clearBetData: 'bet/CLEAR_ALL' }),
    closeDialog() {
      this.clearBetData();
    },
    toggleDialogPopup() {
      this.toggleDialog = !this.toggleDialog;
    }
  }
}
</script>
<style>
  .dialog-header {
    background: #C4C4C4;
    border-radius: 10px 10px 0 0;
  }
  .dialog-total {
    font-size: 18px;
    line-height: 21px;
    color: #000;
  }
</style>