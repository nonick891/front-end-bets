<template>
  <v-content
    v-if="dialog"
    class="pa-0 custom-dialog"
  >
    <v-container class="framed">
      <dialog-header :count="count" />
      <dialog-item
        :key="key"
        v-for="(fixtureId, key) in fixtureIds"
        :fixtureId="fixtureId"
        :participants="decisionParticipants[fixtureId]"
        :class="key === 0 ? 'no-border-top' : ''"
      />
      <dialog-footer />
    </v-container>
  </v-content>
</template>
<script>
import { mapState, mapActions } from 'vuex'

import DialogHeader from '../../ui/dialog/header.vue'
import DialogItem from '../../ui/dialog/item.vue'
import DialogFooter from '../../ui/dialog/footer.vue'
export default {
  name: 'BasicDialog',
  components: { DialogHeader, DialogItem, DialogFooter },
  computed: {
    ...mapState('bet', [
      'dialog',
      'fixtureIds',
      'decisionParticipants',
      'amount',
      'count',
      'total'
    ])
  },
  watch: {
    amount: {
      immediate: true,
      handler: 'calculateAll'
    }
  },
  methods: {
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