<template>
  <v-row>
    <v-col
      class="col-12 pa-0"
    >
      <v-card>
        <v-tabs
          v-model="tab"
          grow
          dark
          show-arrows
        >
          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'main-tabs',
  data: () => ({
    tab: 'test',
    items: ['All', 'Main', 'Handicaps', 'Other', 'More tabs'],
    text: 'here will be new tabs'
  })
}
</script>