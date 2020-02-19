<template>
  <div id="app">
    init setup
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
   fixture() {
    return this.$store.state.data.fixture;
   }
  }
}
</script>
