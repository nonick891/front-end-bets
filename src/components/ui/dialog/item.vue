<template>
  <v-row
    no-gutters
    align="stretch"
    class="dialog-item"
  >
    <v-col
      v-if="getOdds(fixtureId) && getOdds(fixtureId).length"
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
          {{ participants }}
        </v-col>
      </v-row>
      <v-row
        no-gutters
        :key="key"
        v-for="(odd, key) in getOdds(fixtureId)"
      >
        <v-col
          :key="k"
          v-for="(item, k) in getOddItems(fixtureId, odd.id)"
          class="bet-decision"
          cols="12"
        >
          {{ odd.name }}: {{ item.name }}
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="2"
      style="position: relative"
      v-if="getOdds(fixtureId)"
    >
      <v-container
        fill-height
      >
        <v-row
          no-gutters
          align="stretch"
          justify="center"
          class="text-right mt-4"
        >
          <v-col
            :key="key"
            v-for="(odd, key) in getOdds(fixtureId)"
            class="bet-decision"
          >
            <v-row
              :key="k"
              v-for="(item, k) in getOddItems(fixtureId, odd.id)"
              class="bet-decision"
            >
              {{ item.odds }}
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <remove-bet
        v-model="showRemove"
        :fixtureId="fixtureId"
      />
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
import RemoveBet from './remove-bet.vue'
export default {
  name: 'DialogItem',
  components: { RemoveBet },
  model: {
    prop: 'fixtureId',
    event: 'decision-remove'
  },
  props: {
    fixtureId: Number,
    participants: String
  },
  data: () => ({
    showRemove: false
  }),
  computed: {
    ...mapGetters({
      getOdds: 'bet/getOdds',
      getOddItems: 'bet/getOddItems'
    })
  },
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