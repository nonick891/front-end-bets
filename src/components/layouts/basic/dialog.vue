<template>
  <v-content
    class="pa-0 custom-dialog"
  >
    <v-container class="framed">
      <dialog-header
        :count="count"
        :total="total"
      />
      <dialog-item class="no-border-top" />
      <dialog-item
        :key="key"
        v-for="(decision, key) in decisions"
        :decision="decision"
      />
      <dialog-footer
        :total="total"
      />
    </v-container>
  </v-content>
</template>
<script>
import { mapState } from 'vuex'

import DialogHeader from '../../ui/dialog/header.vue'
import DialogItem from '../../ui/dialog/item.vue'
import DialogFooter from '../../ui/dialog/footer.vue'
export default {
  name: 'BasicDialog',
  components: { DialogHeader, DialogItem, DialogFooter },
  data: () => ({
    total: 0,
    count: 0
  }),
  computed: {
    ...mapState({ decisions: state => state.bet.decisions })
  },
  mounted() {
    this.calculateResults();
  },
  methods: {
    calculateResults() {
      for(let decision of this.decisions) {
        let items = decision.items;
        this.count += items.length;
        this.total += items.reduce((total, item) => item.value + total, 0);
      }
    }
  }
}
</script>
<style>
  .custom-dialog {
    position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: 10px;
  }
  .custom-dialog .container.framed {
    padding: 1px;
  }
</style>