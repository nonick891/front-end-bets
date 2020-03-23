<template>
  <v-row
    no-gutters
    align="stretch"
    class="dialog-item"
  >
    <v-col
      v-if="decision"
      v-touch:swipe.left="swipeLeft"
      v-touch:swipe.right="swipeRight"
      cols="10"
      class="pb-3 pl-1"
    >
      <v-row
        no-gutters
        class="mt-2 mb-1"
      >
        <v-col
          class="bet-game-name"
        >
          {{ decision.participants[0].name.value }} vs {{ decision.participants[1].name.value }}
        </v-col>
      </v-row>
      <v-row
        no-gutters
        :key="key"
        v-for="(item, key) in decision.items"
      >
        <v-col
          :key="k"
          v-for="(result, k) in item.results"
          class="bet-decision"
          cols="12"
        >
          {{ item.name.value }}: {{ result.name.value }}
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="2"
      style="position: relative"
    >
      <v-container
        fill-height
      >
        <v-row
          v-if="decision"
          no-gutters
          align="stretch"
          justify="center"
          class="text-right mt-4"
        >
          <v-col
            :key="key"
            v-for="(item, key) in decision.items"
            class="bet-decision"
          >
            <v-row
              class="bet-decision"
              :key="k"
              v-for="(result, k) in item.results"
            >
              {{ result.odds }}
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <remove-bet
        v-model="showRemove"
        :index="index"
      />
    </v-col>
  </v-row>
</template>
<script>
import RemoveBet from './remove-bet.vue'
export default {
  name: 'DialogItem',
  components: { RemoveBet },
  model: {
    prop: 'decision',
    event: 'decision-remove'
  },
  props: {
    decision: Object,
    index: Number
  },
  data: () => ({
    showRemove: false
  }),
  methods: {
    swipeLeft() {
      this.showRemove = true;
    },
    swipeRight() {
      this.showRemove = false;
    }
  }
}
</script>
<style>
  .dialog-item {
    background-color: #4C4C4C;
    border-top: 1px solid #999999;
  }
  .dialog-item.no-border-top {
    border-top: none;
  }
  .bet-game-name {
    font-size: 16px;
    line-height: 19px;
  }
  .bet-decision {
    line-height: 16px;
    font-size: 14px;
  }
</style>