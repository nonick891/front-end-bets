<template>
  <v-content
    class="pb-0"
    style="padding-top: 0"
  >
    <v-container
      fluid
      class="pa-0"
    >
      <slider />
      <custom-breadcrumbs />
    </v-container>
  </v-content>
</template>
<script>
import slider from '../../ui/bar/slider.vue'
import customBreadcrumbs from '../../ui/bar/breadcrumbs.vue'
export default {
  components: { slider, customBreadcrumbs }
}
</script>