<template>
  <div>
    <navigation-basic />
    <bar-basic />
    <footer-basic />
  </div>
</template>
<script>
import NavigationBasic from './navigation.vue'
import BarBasic from './bar.vue'
import FooterBasic from './footer.vue'
export default {
  name: 'BasicLayout',
  components: { NavigationBasic, BarBasic, FooterBasic },
  data: () => ({})
}
</script>