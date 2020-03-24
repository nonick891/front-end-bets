<template>
  <v-slide-y-transition
    hide-on-leave
  >
    <v-container
      v-if="show"
      fill-height
      class="close-container"
    >
      <v-row
        no-gutters
        justify="center"
      >
        <close-button
          @click.native="removeDecision"
        />
      </v-row>
    </v-container>
  </v-slide-y-transition>
</template>
<script>
import { keys } from 'lodash';
import { mapState, mapMutations, mapActions } from 'vuex'
import CloseButton from '../buttons/close.vue'
export default {
  name: 'RemoveBet',
  model: {
    prop: 'show',
    event: 'change-show'
  },
  props: ['index', 'show'],
  components: { CloseButton },
  computed: {
    ...mapState('bet', ['decisions'])
  },
  methods: {
    ...mapActions({ calculateAll: 'bet/calculateAll' }),
    ...mapMutations({
      deleteDecision: 'bet/REMOVE_DECISION',
      clearAll: 'bet/CLEAR_ALL'
    }),
    removeDecision() {
      this.$emit('change-show', false);
      this.$nextTick(() => {
        this.deleteDecision(this.index);
        keys(this.decisions).length > 0
          ? this.calculateAll()
          : this.clearAll()
      });
    }
  }
}
</script>
<style>
  .close-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #7D2227;
  }
</style>