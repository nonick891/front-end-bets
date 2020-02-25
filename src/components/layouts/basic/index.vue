<template>
  <div>
    <navigation-basic />
    <bar-basic />
    <content-basic />
    <footer-basic />
  </div>
</template>
<script>
import NavigationBasic from './navigation.vue'
import BarBasic from './bar.vue'
import ContentBasic from './content.vue'
import FooterBasic from './footer.vue'
export default {
  name: 'BasicLayout',
  components: { NavigationBasic, BarBasic, ContentBasic, FooterBasic }
}
</script>