<template>
  <v-content
    v-if="dialog"
    class="pa-0 custom-dialog"
    :style="{'bottom': !toggleDialog ? 0 : `-${height-headerHeight}px`}"
  >
    <v-container class="framed">
      <dialog-header :count="count" />
      <dialog-item
        :key="key"
        v-for="(fixtureId, key) in (toggleDialog ? [fixtureIds[0]] : fixtureIds)"
        :fixtureId="fixtureId"
        :participants="decisionParticipants[fixtureId]"
        :class="key === 0 ? 'no-border-top' : ''"
      />
      <dialog-footer />
    </v-container>
  </v-content>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import DialogHeader from '../../ui/dialog/header.vue'
import DialogItem from '../../ui/dialog/item.vue'
import DialogFooter from '../../ui/dialog/footer.vue'

import { getElementHeight } from '../../../app/helper/dom'
export default {
  name: 'BasicDialog',
  components: { DialogHeader, DialogItem, DialogFooter },
  data: () => ({
    height: 0,
    headerHeight: 0
  }),
  computed: {
    toggleDialog: {
      set(value) {
        this.$store.state.interface.toggleDialogControl = value;
      },
      get() {
        return this.$store.state.interface.toggleDialogControl;
      }
    },
    ...mapGetters({ oddItemsCount: 'bet/getOddItemsLength' }),
    ...mapState('bet', [
      'dialog',
      'fixtureIds',
      'decisionParticipants',
      'amount',
      'count',
      'total'
    ])
  },
  updated() {
    this.setHeight();
  },
  watch: {
    oddItemsCount(value) {
      this.toggleDialog = value > 1;
    },
    amount: {
      immediate: true,
      handler: 'calculateAll'
    }
  },
  methods: {
    setHeight() {
      if (this.$el.nodeName === '#comment' || !this.toggleDialog) return false;
      this.height = getElementHeight(this.$el)-2;
      this.headerHeight = getElementHeight(this.$el.querySelector('.dialog-header'));
    },
    ...mapActions({ calculateAll: 'bet/calculateAll' })
  }
}
</script>
<style>
  .custom-dialog {
    position: fixed;
    width: 100%;
    bottom: 0;
    border-radius: 10px;
  }
  .custom-dialog .container.framed {
    padding: 1px;
  }
</style>