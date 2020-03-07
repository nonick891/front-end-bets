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
          <teams-card
            :opponents="slide"
          />
        </swiper-slide>
      </swiper>
    </v-col>
  </v-row>
</template>
<script>
import teamsCard from '../../ui/slider/bar/teams-card.vue'
export default {
  components: { teamsCard },
  data() {
    return {
      slides: [
        [{name: 'Team 7', goals: 0}, {name: 'Team 7', goals: 1, time: '42:20'}],
        [{name: 'Team 7', goals: 0}, {name: 'Team 7', goals: 1, time: '42:20'}],
        [{name: 'Team 7', goals: 0}, {name: 'Team 7', goals: 1, time: '42:20'}],
        [{name: 'Team 7', goals: 0}, {name: 'Team 7', goals: 1, time: '42:20'}],
        [{name: 'Team 7', goals: 0}, {name: 'Team 7', goals: 1, time: '42:20'}],
        [{name: 'Team 7', goals: 0}, {name: 'Team 7', goals: 1, time: '42:20'}],
        [{name: 'Team 7', goals: 0}, {name: 'Team 7', goals: 1, time: '42:20'}]
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 14,
        freeMode: true,
        pagination: {
          clickable: true
        }
      }
    }
  },
  computed: {
    xs() {
      return this.$vuetify.breakpoint.xs;
    }
  },
  watch: {
    xs: {
      handler: 'setSlides',
      immediate: true
    }
  },
  methods: {
    setSlides(val) {
      if (!this.$refs.swiperComponent) return false;
      let swiperObject = this.$refs.swiperComponent.swiper;
      swiperObject.params.slidesPerView = this.getSlidesNumber(val);
      swiperObject.update();
    },
    getSlidesNumber(val) {
      return val ? 3 : 4
    }
  }
}
</script>
<style>
  .swiper-slide {
    transition: width 0.1s, margin 0.1s;
  }
</style>