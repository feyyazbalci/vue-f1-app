<template>
  <q-card dark class="my-card mt-lg rounded bg-warning-9 result shadow-20" v-if="!loading" style="border: 2px solid #D2AF1AFF">
      <div class="row justify-center">
        <h4 class="q-mt-mg text-weight-bold">{{title}}</h4>
      </div>
      <div class="justify-center ">
        <q-card-section>
          <div class="raceButton">
            <q-btn unelevated rounded color="warning"  class="text-black">
                {{ lastRace.raceName }}
            </q-btn>
            <q-btn unelevated rounded color="black"  class="q-mx-sm text-amber">
                {{ lastRace.Circuit.circuitName }}
            </q-btn>
           
          </div>
        </q-card-section>
        <div class="row justify-center">
            <q-card dark rounded class="col-md-6 shadow-20" style="border: 2px solid #D2AF1AFF">
                <q-item>
                    <q-avatar avatar>
                        <img :src="getDriverImg(results[0].Driver.driverId)" :class="getColor(results[0].Constructor.name)">
                    </q-avatar>
                
                    <q-item-section top class="col-2 gt-sm">
                        <q-item-label class="q-mt-sm"></q-item-label>
                    </q-item-section>
                
                    <q-item-section top>
                        <q-item-label lines="1" class="q-mb-sm">
                            <span class="text-weight-medium q-mr-sm">{{ results[0].Driver.givenName }} {{ results[0].Driver.familyName }}</span>
                            <q-badge class="q-pa-sm" :class="getColor(results[0].Constructor.name )">
                                {{ results[0].Constructor.name}}
                            </q-badge>
                        </q-item-label>
                        
                        <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                            <div class="text-grey-8 q-gutter-xs">
                                <q-btn-group push>
                                    <q-btn color="amber">
                                        <span class="material-icons q-mr-sm">
                                            scoreboard
                                        </span>
                                    <div>{{ results[0].points }}</div>
                                    </q-btn>
                                    <q-btn color="grey">
                                        <span class="material-icons q-mr-sm">
                                            timer
                                        </span>
                                        <div>{{ results[0].Time.time.substring(0,7) }}</div>
                                    </q-btn>
                                </q-btn-group>
                            </div>
                        </q-item-label>
                    </q-item-section>
                
                  
                </q-item>
            </q-card>
            
        </div>
        <div class="row justify-center">
            <div class="col-md-6 q-pa-sm">
                <q-card dark rounded class="shadow-10" style="border: 2px solid rgb(173 171 167);">
                    <q-item>
                        <q-avatar avatar>
                            <img :src="getDriverImg(results[1].Driver.driverId)" :class="getColor(results[1].Constructor.name)">
                        </q-avatar>
        
                        <q-item-section top class="col-2 gt-sm">
                            <q-item-label class="q-mt-sm"></q-item-label>
                        </q-item-section>
        
                        <q-item-section top>
                            <q-item-label lines="1" class="q-mb-sm">
                                <span class="text-weight-medium q-mr-sm">{{ results[1].Driver.givenName }} {{
                                results[1].Driver.familyName }}</span>
                                    <q-badge class="q-pa-sm" :class="getColor(results[1].Constructor.name )">
                                        {{ results[1].Constructor.name}}
                                    </q-badge>
                            </q-item-label>
                            <!-- <q-item-label caption lines="1">
                                                        @rstoenescu in #1: > The build system
                                                    </q-item-label> -->
                            <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                                <div class="text-grey-8 q-gutter-xs">
                                    <q-btn-group push>
                                        <q-btn color="amber">
                                            <span class="material-icons q-mr-sm">
                                                scoreboard
                                            </span>
                                            <div>{{ results[1].points }}</div>
                                        </q-btn>
                                        <q-btn color="grey">
                                            <span class="material-icons q-mr-sm">
                                                timer
                                            </span>
                                            <div>{{ results[1].Time.time }}</div>
                                        </q-btn>
                                        
                                    </q-btn-group>
                                </div>
                            </q-item-label>
                        </q-item-section>
        
                    </q-item>
                </q-card>
            </div>
            <div class="col-md-6 q-pa-sm">
                <q-card dark rounded class="shadow-10" style=" border: 2px solid rgb(205, 127, 50)">
                    <q-item>
                        <q-avatar avatar>
                            <img :src="getDriverImg(results[2].Driver.driverId)" :class="getColor(results[2].Constructor.name)">
                        </q-avatar>
            
                        <q-item-section top class="col-2 gt-sm">
                            <q-item-label class="q-mt-sm"></q-item-label>
                        </q-item-section>
            
                        <q-item-section top>
                            <q-item-label lines="1" class="q-mb-sm">
                                <span class="text-weight-medium q-mr-sm">{{ results[2].Driver.givenName }} {{ results[2].Driver.familyName }}</span>
                                <q-badge class="q-pa-sm" :class="getColor(results[2].Constructor.name )">
                                    {{ results[2].Constructor.name}}
                                </q-badge>
                            </q-item-label>
                            <!-- <q-item-label caption lines="1">
                                                                    @rstoenescu in #1: > The build system
                                                                </q-item-label> -->
                            <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                                <div class="text-grey-8 q-gutter-xs">
                                    <q-btn-group push>
                                        <q-btn color="amber">
                                            <span class="material-icons q-mr-sm">
                                                scoreboard
                                            </span>
                                            <div>{{ results[2].points }}</div>
                                        </q-btn>
                                        <q-btn color="grey">
                                            <span class="material-icons q-mr-sm">
                                                timer
                                            </span>
                                            <div>{{ results[2].Time.time }}</div>
                                        </q-btn>
                                        
                                    </q-btn-group>
                                </div>
                            </q-item-label>
                        </q-item-section>
            
                    </q-item>
                </q-card>
            </div>
        
        </div>
        <div class="q-pa-md">
            <q-markup-table dark>
                <thead>
                    <tr>
                        <th class="text-left">Pos.</th>
                        <th class="text-right">Driver</th>
                        <th class="text-right">Constructor</th>
                        <th class="text-right">Nationality</th>
                        <th class="text-right">Pts.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in results.slice(3)" :key="item.points">
                        <td>{{ item.position }}</td>
                        <td class="text-right">{{ item.Driver.familyName }}</td>
                        <td class="text-right" >
                            <q-badge class="q-pa-sm" :class="getColor(item.Constructor.name)">
                                {{ item.Constructor.name }}                
                            </q-badge>                          
                        </td>
                        <td class="text-right">{{ item.Driver.nationality}}</td>
                        <td class="text-right">{{ item.points }}</td>                     
                    </tr>                  
                </tbody>
            </q-markup-table>
        </div>
      </div>
  </q-card>
  <div class="row justify-center" v-else>
    <q-spinner-puff color="deep-orange" />
  </div>
</template>

<script>
import { getColor } from "@/plugins/services";
export default {
    name: 'ResultCard',
    props: {
        lastRace: {},
        loading: {},
        results: {},
        title: null
    },
    methods: {
        getDriverImg(picture) {
           try{
               return new URL(`../assets/img/drivers/2022/${picture}.png`, import.meta.url).href
           }
           catch(e){
            console.log(e);
           }
            
            
        },
        getImgUrl(picture) {
            try {
                return new URL(`../assets/img/tracks/${picture}.png`, import.meta.url).href
            } catch (e) {
                return null
            }
        },
        getColor,
    }
}
</script>

<style >
.my-card{
    width: 100%;
    max-width: 800px !important;
    margin: 0 auto;
}
.raceButton{
    display: flex;
    justify-content: center;
    align-content: center;
}
.pilotCard{
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}
.teamName{
    border-radius: 0.5rem;
}
</style>