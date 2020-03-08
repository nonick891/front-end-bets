<template>
  <div
    class="circle-number text-center"
  >{{ number }}</div>
</template>
<script>
export default {
  name: 'circle',
  props: ['number']
}
</script>
<style>
  .circle-number {
    display: table-cell;
    vertical-align: middle;
    border-radius: 15px;
    background-color: #F3C515;
    width: 25px;
    height: 25px;
    color: #000;
    font-size: 15px;
  }
</style>