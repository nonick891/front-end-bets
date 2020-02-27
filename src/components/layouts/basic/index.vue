<template>
  <div>
    <navigation-basic />
    <bar-basic />
    <content-basic />
  </div>
</template>
<script>
import NavigationBasic from './navigation.vue'
import BarBasic from './bar.vue'
import ContentBasic from './content.vue'
export default {
  name: 'BasicLayout',
  components: { NavigationBasic, BarBasic, ContentBasic }
}
</script>