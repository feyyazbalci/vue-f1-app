<template>
    <q-card dark class="my-card col-12 col-md-5 q-my-md shadow-25" v-if="!loading">
        <q-card-section horizontal>
            <q-card-section class="q-pt-md">
                <div class="text-overline">
                    {{ driver.Driver.givenName }} {{
                    driver.Driver.familyName }}  
                </div>
                <div class="text-h5 q-mt-sm text-weight-bold align-center">
                    <q-avatar avatar>
                        <img :src="getFlagUrl(driver.Driver.nationality)">
                    </q-avatar>
                </div>
                <div class="q-mt-md align-center">
                    <q-badge rounded class="q-pa-sm q-mt-sm" :class="getColor(driver.Constructors[0].name)"
                        :label="driver.Constructors[0].name" />
                
                </div>
    
            </q-card-section>
    
            <q-card-section class="col-3 flex flex-start">
                <!-- <q-img class="rounded-borders" :class="getColor(driver.Constructors[0].name)"
                    :src="getImgUrl(driver.Driver.driverId)" /> -->
            </q-card-section>
            <q-card-section class="col-6 flex flex-start">
                <q-img class="rounded-borders" :class="getColor(driver.Constructors[0].name)"
                    :src="getImgUrl(driver.Driver.driverId)" />
            </q-card-section>
        </q-card-section>
    
        <q-separator />
    
        <q-card-actions class="altButton justify-center">
        
            <q-btn>
                <span class="material-icons q-mr-sm">
                    star_rate
                </span>
                {{ driver.position }}
            </q-btn>
            <q-btn> 
                <span class="material-icons q-mr-sm">
                    emoji_events
                </span>
                {{ driver.wins }} wins
            </q-btn>
            <q-btn>
                <span class="material-icons q-mr-sm">
                    scoreboard
                </span>
                {{ driver.points }} pts
            </q-btn>
            
        
        </q-card-actions>
    </q-card> 
    <div class="row justify-center" v-else>
        <q-spinner-puff color="deep-orange" />
    </div>
</template>

<script>
import { getColor } from "@/plugins/services";
export default {
    data: () => ({
        loading: false,
        selection: 3,
    }),
    props: {
        season: {},
        driver: { type: Object, default: undefined }
    },
    methods: {
        reserve() {
            this.loading = true
        },
        getFlagUrl(flag){
            try {
                return new URL(`../assets/img/flags/${flag}.png`, import.meta.url).href
            } catch (e) {
                return null
            }
        },
        getImgUrl(picture) {
            try {
                return new URL(`../assets/img/drivers/2022/${picture}.png`, import.meta.url).href
            } catch (e) {
                return null
            }
        },
        getColor   
    },
}
</script>
<style>
.my-card{
    transition: all linear 0.4s;
    border: 1px solid rgb(8, 8, 8);
}
.my-card:hover{ 
    border: 1px solid #D2AF1AFF;
}


.drivers {
    max-width: 900px;
    margin: 0 auto;
}
</style>