<template>
  <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.81675 0.740363H1.38396V0.497383C1.38396 0.222693 1.18747 0 0.945093 0C0.70272 0 0.506226 0.222693 0.506226 0.497383V13.4685H1.38396V6.12674H5.81675C6.05913 6.12674 6.25562 5.90405 6.25562 5.62936V1.23775C6.25562 0.963057 6.05913 0.740363 5.81675 0.740363Z" fill="white"/>
  </svg>
</template>
<script>
export default {
  props: ['fill'],
  mounted() {
    this.$el.firstChild.setAttribute('fill', this.fill);
  }
}
</script>