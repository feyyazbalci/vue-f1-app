<template>
  <main class="calender" v-if="!loading">
    <h4 class="text-weight-bold text-center q-mb-md text-amber">Calender</h4>
    <h6 class="text-center q-mb-md">Click on a race to see results</h6>
    <div class="row justify-center">        
        <q-card dark class="my-card col-12 col-md-5 q-my-md shadow-20" v-for="(race, idx) in races"
            :key="idx" flat>
         
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Round {{ race.round }}</div>
              <div class="text-h5 q-mt-sm q-mb-xs text-weight-bold">{{ race.raceName.replace('Grand Prix', 'GP') }}</div>
              
            </q-card-section>
  
            <q-card-section class="col-2 flex flex-start">
              
            </q-card-section>
  
            <q-card-section class="col-5 flex flex-start">
              <q-img class="rounded-borders" :src="getImgUrl(race.Circuit.circuitId)" />
            </q-card-section>
          </q-card-section>
        
          <q-separator />
        
          <q-card-actions class="altButton">
            <q-btn flat color="amber">
              <q-btn flat round icon="event" />
              {{
              new Date(race.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
              })
              }}
            </q-btn>
            <q-btn flat >
              {{race.Circuit.Location.locality}}
            
            </q-btn>
            <q-btn flat :to="'calender/results/' + race.round" >
              <span class="material-icons q-mr-sm bg-grey" >
                keyboard_double_arrow_right
              </span>
            </q-btn>
            
          </q-card-actions>
         
        </q-card>


    </div>
  </main>
  <div class="row justify-center" v-else>
    <q-spinner-puff color="deep-orange" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Calendar",
  data() {
    return {
      races: null,
      loading : false
    }
  },
  mounted() {
    axios
      .get('https://ergast.com/api/f1/current/races.json')
      .then((response) => {
        this.loading = false
        this.races = response.data.MRData.RaceTable.Races
      });
  },
  methods: {
    getImgUrl(picture) {
      // const images = require.context('../assets/img/', false, /\.png$/);
      // return images('./' + picture + ".png")
      return new URL(`../assets/img/tracks/${picture}.png`, import.meta.url).href
    }
  }
}
</script>
<style>

.calender{
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
}

</style>