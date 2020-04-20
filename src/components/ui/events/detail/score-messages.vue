<template>
  <v-col class="flex-grow-1">
    <span style="vertical-align:3px">
      <v-icon
        size="14"
        :color="getIcon(message).color"
      >$vuetify.icons.{{ getIcon(message).icon }}</v-icon>
    </span>
    <span class="details">
      {{ message.content }}
    </span>
  </v-col>
</template>
<script>
import { values } from 'lodash'
import { mapState } from 'vuex';
export default {
  data: () => ({
    mapIcons: [
      {id: 253, icon: 'yellowCard', color: '#F7AC16'},
      {id: 255, icon: 'ball', color: '#fff'},
      {id: 252, icon: 'flag', color: '#fff'},
      {id: 254, icon: 'redCard', color: '#D32030'},
      {id: 1, icon: 'sanction', color: '#fff'},
      {id: 1, icon: 'exchange', color: '#fff'}
    ]
  }),
  computed: {
    ...mapState('scoreboard', ['messages']),
    message() {
      let arrayMessages = values(this.messages),
        message = arrayMessages[arrayMessages.length - 1];
      return message ? message : {};
    }
  },
  methods: {
    getIcon(message) {
      if (values(message).length === 0) return {};
      return this.mapIcons.find(el => message.messageType === el.id);
    }
  }
}
</script>