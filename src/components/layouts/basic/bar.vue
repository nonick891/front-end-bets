<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app-bar
    app
    clipped-left
  >
    <v-toolbar-title>bet</v-toolbar-title>
    
    <v-spacer />
    <template v-slot:extension>
      <v-breadcrumbs :items="breadcrumbs" large>
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            :href="item.href"
            :disabled="item.disabled"
          >
            <v-icon v-if="item.text === ''">mdi-chevron-left</v-icon>
            <span v-else>{{ item.text }}</span>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: 'BasicBar',
  data: () => ({
    breadcrumbs: [
      {
        text: ''
      },
      {
        text: 'Country',
        disabled: false,
      },
      {
        text: 'Premier league',
        disabled: false,
      }
    ]
  })
}
</script>