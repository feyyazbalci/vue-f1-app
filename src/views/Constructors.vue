<template>
  <div v-if="!loading" class="takimlar">
    <h4 class="text-center text-weight-bold text-amber q-my-md">
      {{ season }} Constructors's standings
    </h4>
    <div class="row justify-center">
      <q-card
        dark
        class="my-card shadow-20 col-12 col-md-5 q-my-md"
        v-for="(constructor, idx) in constructors"
        :key="idx"
      >
        <img
          :src="getImgUrl(constructor.Constructor.constructorId)"
          :class="getColor(constructor.Constructor.name)"
        />
        <q-card-section>
          <div class="text-h6 q-mb-xs">{{ constructor.Constructor.name }}</div>

          <div class="row no-wrap items-center">
            <div class="bg-grey q-mr-sm q-pa-sm rounded-borders">
              <span class="material-icons q-ml-sm"> military_tech </span>
              <span class="text-caption text-dark q-mx-md">{{
                constructor.position
              }}</span>
            </div>

            <div class="bg-grey q-mr-sm q-pa-sm rounded-borders">
              <span class="material-icons q-ml-sm"> scoreboard </span>
              <span class="text-caption text-dark q-mx-md">{{
                constructor.points
              }}</span>
            </div>
            <div class="bg-grey q-mr-sm q-pa-sm rounded-borders">
              <span class="material-icons q-ml-sm"> emoji_events </span>
              <span class="text-caption text-dark q-mx-md"
                >{{ constructor.wins }} wins</span
              >
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div class="row justify-center" v-else>
    <q-spinner-puff color="deep-orange" />
  </div>
</template>

<script>
import axios from 'axios';
import { getColor } from '@/plugins/services';
export default {
  name: 'Constructors',
  data() {
    return {
      loading: true,
      season: '',
      constructors: [],
    };
  },
  mounted() {
    axios
      .get('https://ergast.com/api/f1/current/constructorStandings.json')
      .then((response) => {
        this.loading = false;
        this.season = response.data.MRData.StandingsTable.season;
        this.constructors =
          response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
      });
  },
  methods: {
    getImgUrl(picture) {
      return new URL(`../assets/img/cars/2023/${picture}.png`, import.meta.url)
        .href;
    },
    getColor,
  },
};
</script>

<style scoped>
.takimlar {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
