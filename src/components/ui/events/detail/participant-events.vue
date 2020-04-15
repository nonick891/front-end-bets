<template>
  <v-row>
    <v-col
      cols="12"
      class="pt-4 pb-1"
    >
      <v-row
        no-gutters
        align="center"
        justify="center"
      >
        <participant-event
          name="Yellow Card"
          :left="1"
          icon="yellowCard"
          :right="3"
          color="#F7AC16"
        />
        <participant-event
          name="Goal"
          :left="1"
          icon="ball"
          :right="3"
          color="#fff"
        />
        <participant-event
          name="Corner"
          :left="13"
          icon="flag"
          :right="24"
          color="#fff"
        />
      </v-row>
    </v-col>
    <v-col
      cols="12"
      class="pb-5 pt-2"
    >
      <v-row
        no-gutters
        align="center"
        justify="center"
      >
        <participant-event
          name="Red Card"
          :left="0"
          icon="redCard"
          :right="0"
          color="#D32030"
        />
        <participant-event
          name="Penalty"
          :left="0"
          icon="sanction"
          :right="0"
          color="#fff"
        />
        <participant-event
          name="Subs"
          :left="2"
          icon="exchange"
          :right="0"
          color="#fff"
        />
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import participantEvent from './participant-event.vue'
export default {
  components: { participantEvent }
}
</script>