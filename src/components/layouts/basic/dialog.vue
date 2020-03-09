<template>
  <v-content
    class="pa-0 custom-dialog"
  >
    <v-container>
      <dialog-header />
      <dialog-item class="no-border-top" />
      <dialog-item />
      <dialog-item />
      <dialog-footer />
    </v-container>
  </v-content>
</template>
<script>
import DialogHeader from '../../ui/dialog/header.vue'
import DialogItem from '../../ui/dialog/item.vue'
import DialogFooter from '../../ui/dialog/footer.vue'
export default {
  name: 'BasicDialog',
  components: { DialogHeader, DialogItem, DialogFooter }
}
</script>
<style>
  .custom-dialog {
    position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: 10px;
  }
  .custom-dialog .container {
    padding: 1px;
  }
</style>