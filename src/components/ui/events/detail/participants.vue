<template>
  <v-row>
    <v-col
      class="col-12 pa-0"
    >
      <v-card
        class="participants pa-2"
        outlined
        tile
      >
        <v-row
          class="py-12"
          no-gutters
        >
          <v-col
            class="col-5 pr-2 text-left"
          >
            {{ participants[0].name.short }}
          </v-col>
          <v-col
            class="col-2 px-0 text-center"
          >
            <span class="font-weight-bold">0</span> | <span class="font-weight-bold">0</span>
          </v-col>
          <v-col
            class="col-5 pl-2 text-right"
          >
            {{ participants[1].name.short }}
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'participants',
  computed: {
    ...mapState({ participants: state => state.game.participants })
  }
}
</script>
<style>
  .participants {
    width: 100%;
    background-image: radial-gradient(circle 188px at top, #397300, #264d00);
  }
</style>