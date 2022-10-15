<template>
  <main class="q-ma-sm">
    <div class="row justify-center">
      <div class="col-12 col-md-6 q-my-md">
        <div class="q-pa-md">
          <q-card dark  class="my-card shadow-10"  v-if="!nextRaceLoading" style="border: 2px solid #D2AF1AFF">
           <q-card-section class="text-center">
            <div class="text-h4 text-weight-bold">Next Race</div>
            <div class="text-subtitle1 text-weight-bold">
              {{ nextRace[0].raceName }} @ {{ nextRace[0].Circuit.circuitName }}
            </div>
           </q-card-section>
           <q-card-section class="text-center">
            <q-btn unelevated rounded color="dark">
              {{
                  new Date(nextRace[0].date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })
                }} |
                  {{ nextRace[0].time.slice(0, -4) }} UTC
              </q-btn>
            <!-- <div class="text-subtitle2 text-success">
              
              <vue-countdown :time="nextRaceTimeDate" :interval="100" v-slot="{ days, hours, minutes, seconds }">
                <div class="q-pa-md q-gutter-md">
                  <q-badge rounded outline color="amber" class="q-pa-md">
                    {{ days }} days
                  </q-badge>
                  <q-badge rounded outline color="amber" class="q-pa-md">
                    {{ hours }} hours
                  </q-badge>
                  <q-badge rounded outline color="amber" class="q-pa-md">
                    {{ minutes }} minutes
                  </q-badge>
                  <q-badge rounded outline color="amber" class="q-pa-md">
                     {{ seconds }} seconds
                  </q-badge>
                </div>
              </vue-countdown>
            </div> -->
           </q-card-section>
          </q-card>

       </div>
      </div>
    </div>
    <div class="row justify-between">
      <div class="col-12 col-md-8" v-if="!driverLoading">
        <ResultCard 
        title="Last Race Results" 
        :last-race="lastRace" 
        :loading="loading"
        :results="results.slice(0,limit)"/>
        <div class="row q-my-md justify-center">
          
          <q-btn class="q-mt-sm" color="amber" v-if="limit<20" @click="limit=20">
            Load More
          </q-btn>
        </div>
      </div>
      <div class="col-12 col-md-4 ">
        <Status 
         :drivers="drivers"
         class="q-mb-sm"
         :loading="driverLoading"
        />

        <div class="mobile-only">
          <TwitterTimeline  url="F1" description="Loading..." height="550" width="550" lang="en" theme="dark"
            doNotTrack></TwitterTimeline>
        </div>
          
         
      </div>
    </div>
  </main>
</template>


<script setup>
import axios from "axios";
import {ref, onMounted, reactive} from 'vue'
import ResultCard from '@/components/ResultCard.vue'
import Status from '@/components/Status.vue'
import TwitterTimeline from 'vue-twitter-timeline';


const loading = ref(true);
const nextRaceLoading = ref(true);
const lastRace = ref([]);
const nextRace = ref('');
const nextRaceTime = ref('');
const nextRaceTimeDate = ref(null)
const results = ref([]);
const limit = ref(13);

const drivers = ref([])
const driverLoading = ref(true)



const thumbStyle = reactive({
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
})
const barStyle = reactive({
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
})

onMounted(()=>{
  getLastResult()
  getNextRace()
  getStatus()
})


const getLastResult = ()=>{
  axios.get('https://ergast.com/api/f1/current/last/results.json')
          .then((response) => {
            loading.value = false  
            lastRace.value = response.data.MRData.RaceTable.Races[0]
            results.value = response.data.MRData.RaceTable.Races[0].Results
            
          });
}

const getNextRace = ()=>{
  axios.get('https://ergast.com/api/f1/current/next.json')
           .then((response) => {
            nextRaceLoading.value = false
            nextRace.value = response.data.MRData.RaceTable.Races
            //  nextRaceTimeDate.value = response.data.MRData.RaceTable.Races[0].date
             
            //  nextRaceTime.value.concat(response.data.MRData.RaceTable.Races[0].date, 'T', response.data.MRData.RaceTable.Races[0].time)
          });         
}

const getStatus = () => {
  axios.get('https://ergast.com/api/f1/current/driverStandings.json')
    .then((response) => {
      driverLoading.value = false
      drivers.value = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    })
}


</script>




<style scoped>
.my-card{
  width: 100%;
  max-width: 800px;
}

@media only screen and (max-width: 600px) {
  .tweeter {
    display: block;
  }
}
</style>