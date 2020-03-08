<template>
  <v-content
    class="pa-0 custom-dialog"
  >
    <v-container>
      <dialog-header />
      <dialog-item />
      <dialog-item class="border-top" />
    </v-container>
  </v-content>
</template>
<script>
import DialogHeader from '../../ui/dialog/header.vue'
import DialogItem from '../../ui/dialog/item.vue'
export default {
  name: 'BasicDialog',
  components: { DialogHeader, DialogItem }
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