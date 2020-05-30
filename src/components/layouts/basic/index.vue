<template>
  <div>
    <bar-basic />
    <content-basic />
    <basic-dialog />
  </div>
</template>
<script>
import BarBasic from './bar.vue'
import ContentBasic from './content.vue'
import BasicDialog from './dialog.vue'
export default {
  name: 'BasicLayout',
  components: {
    BarBasic,
    ContentBasic,
    BasicDialog
  }
}
</script>