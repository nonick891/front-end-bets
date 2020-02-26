<template>
  <v-row>
    <v-col
      class="col-12 pa-0"
    >
      <v-tabs
        v-model="tab"
        grow
        dark
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card
            color="basil"
            flat
          >
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'main-tabs',
  data: () => ({
    tab: 'test',
    items: ['All', 'Main', 'Handicaps'],
    text: 'here will be new tabs'
  })
}
</script>