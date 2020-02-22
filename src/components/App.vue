<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app id="inspire">
    
    <basic-layout />
    
  </v-app>
</template>

<script>
import BasicLayout from './layouts/basic/index'
export default {
  name: 'App',
  components: { BasicLayout },
  data: () => ({
    drawer: null
  }),
  computed: {
   fixture() {
    return this.$store.state.data.fixture;
   }
  }
}
</script>
