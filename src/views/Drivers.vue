<template>
    <main class="calender">
      <h4 class="text-center text-weight-bold q-mb-md text-amber"> {{season}} Driver's standings</h4>
      <div class="row justify-center" v-if="loaded">
        <DriverCard v-for="(driver, idx) in drivers" :key="idx" :driver="driver" :season="season" />
      </div>
      <div class="row justify-center" v-else>
        <q-spinner-puff color="deep-orange" />
      </div>
    </main>
    
   
</template>

<script setup>
import DriverCard from '@/components/DriverCard.vue';
import axios from 'axios'

import { ref, onMounted} from 'vue'

const loaded = ref(false)
const drivers = ref([])
const season = ref('')

onMounted(()=>{
  axios
    .get('https://ergast.com/api/f1/current/driverStandings.json')
    .then((response) => {
      season.value = response.data.MRData.StandingsTable.season
      drivers.value = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    })
    .finally(() => (loaded.value = true))
})
</script>

<style>

</style>