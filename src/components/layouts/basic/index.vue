<template>
  <div>
    <navigation-basic />
    <bar-basic />
    <bar-info />
    <content-basic />
  </div>
</template>
<script>
import NavigationBasic from './navigation.vue'
import BarBasic from './bar.vue'
import BarInfo from './bar-info.vue'
import ContentBasic from './content.vue'
export default {
  name: 'BasicLayout',
  components: { NavigationBasic, BarBasic, BarInfo, ContentBasic }
}
</script>