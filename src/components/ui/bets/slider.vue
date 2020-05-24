<template>
  <v-row
    no-gutters
    class="pt-1"
  >
    <v-col>
      <swiper
        ref="swiperComponent"
        :options="swiperOption"
      >
        <swiper-slide
          :key="key"
          v-for="(slide, key) in slides"
        >
        
        </swiper-slide>
      </swiper>
    </v-col>
  </v-row>
</template>
<script>
export default {
  components: { teamsCard },
  data() {
    return {
      slides: [
        { icon: '', name: 'ALL' },
      ],
      swiperOption: {
        //spaceBetween: 14,
        freeMode: true,
        pagination: {
          clickable: true
        }
      }
    }
  }
}
</script>