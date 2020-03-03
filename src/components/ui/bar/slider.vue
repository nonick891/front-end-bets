<template>
  <v-row
    no-gutters
    class="pt-1"
  >
    <v-col>
      <swiper :options="swiperOption">
        <swiper-slide
          :key="key"
          v-for="(slide, key) in slides"
        >
          <teams-card
            :opponents="slide"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
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
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          clickable: true
        }
      }
    }
  }
}
</script>