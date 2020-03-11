<template>
  <v-content
    class="pa-0 custom-dialog"
  >
    <v-container class="framed">
      <dialog-header
        :count="count"
        :total="total"
      />
      <dialog-item
        :key="key"
        v-for="(decision, key) in decisions"
        :decision="decision"
        :class="key === 0 ? 'no-border-top' : ''"
      />
      <dialog-footer
        v-model="bet"
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
    bet: 0,
    total: 0,
    count: 0
  }),
  computed: {
    ...mapState({ decisions: state => state.bet.decisions })
  },
  watch: {
    bet: {
      immediate: true,
      handler: 'calculateResults'
    }
  },
  methods: {
    calculateResults() {
      this.count = 0;
      this.total = 1;
      for(let decision of this.decisions) {
        let items = decision.items;
        this.count += items.length;
        this.total *= items.reduce((total, item) => item.value * total, 1);
      }
      this.total = parseFloat((this.total * this.bet).toFixed(0));
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