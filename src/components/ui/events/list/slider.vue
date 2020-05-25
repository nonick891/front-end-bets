<template>
  <v-row
    no-gutters
    class="pt-3"
  >
    <v-col>
      <swiper
        ref="swiperComponent"
        :options="swiperOption"
      >
        <swiper-slide
          :key="key"
          v-for="(slide, key) in slides"
          :class="key === 0 ? 'ml-3' : false"
        >
          <v-card
            outlined
            color="dark"
          >
            <v-row
              no-gutters
              justify="center"
            >
              <v-icon>$vuetify.icons.{{ slide.icon }}</v-icon>
              {{ slide.name }}
            </v-row>
          </v-card>
        </swiper-slide>
      </swiper>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        { icon: 'flagWorld', name: 'ALL' },
        { icon: 'flagUnitedStates', name: 'USA' },
        { icon: 'flagLeague', name: 'UEF' },
        { icon: 'flagJapan', name: 'JPN' },
        { icon: 'flagItaly', name: 'ITA' },
        { icon: 'flagGermany', name: 'GER' },
        { icon: 'flagBritain', name: 'ENG' },
        { icon: 'flagBrazil', name: 'BRZ' }
      ],
      swiperOption: {
        spaceBetween: 26,
        slidesPerView: 8,
        freeMode: true,
        pagination: {
          clickable: true
        }
      }
    }
  }
}
</script>