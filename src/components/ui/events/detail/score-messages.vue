<template>
  <v-col class="flex-grow-1">
    <v-row no-gutters>
      <v-col>
        <span style="vertical-align:3px">
          <v-icon
            size="14"
            :color="getIcon(firstMessage).color"
          >$vuetify.icons.{{ getIcon(firstMessage).icon }}</v-icon>
        </span>
        <span class="details">
          {{ firstMessage.content }}
        </span>
      </v-col>
    </v-row>
    <div v-if="toggleScoreboardControl">
      <v-row
        :key="key"
        v-for="key in otherKeys"
        no-gutters
      >
        <v-col>
          <span style="vertical-align:3px">
            <v-icon
              size="14"
              :color="getIcon(messages[key]).color"
            >$vuetify.icons.{{ getIcon(messages[key]).icon }}</v-icon>
          </span>
          <span class="details">
            {{ messages[key].content }}
          </span>
        </v-col>
      </v-row>
    </div>
  </v-col>
</template>
<script>
import { keys, values } from 'lodash'
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
    ...mapState('interface', ['toggleScoreboardControl']),
    firstMessage() {
      let result = this.messages[this.messagesKeys[0]];
      return result ? result : {};
    },
    messagesKeys() {
      return keys(this.messages).reverse();
    },
    otherKeys() {
      let keys = [ ...this.messagesKeys ];
      keys.shift();
      return keys;
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