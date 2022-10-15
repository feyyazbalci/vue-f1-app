<template>

    <q-layout view="lHh lpr lFf" container style="height: 115px">
      <q-header elevated class="bg-dark" >
        <q-toolbar>
          
          <q-toolbar-title class="text-weight-bold q-pa-sm">F1 World</q-toolbar-title>
        </q-toolbar>

        <q-tabs v-model="tab" >
          
          <q-btn to="/" class="q-mr-sm">
            <span class="q-mr-sm material-icons" >
              home
            </span>
          </q-btn>

          <q-btn to="/driverStandings" class="q-mr-sm">
            <span class="q-mr-sm material-icons">
              sports_motorsports
            </span>
            
              Drivers
            
           
          </q-btn>   

          <q-btn to="/constructorStandings" class="q-mr-sm">
            <span class="q-mr-sm material-icons">
              directions_car
            </span>
            
              Constructor Standings
            
          </q-btn>   

          <q-btn to="/calender" class="q-mr-sm">
            <span class="q-mr-sm material-icons">
              date_range
            </span>
            
              Calender
            
           
          </q-btn>   

          <!-- <q-btn to="/seasons" class="q-mr-sm">
            <span class="q-mr-sm material-icons">
              today
            </span>
            Seasaon
          </q-btn>    -->
          
        </q-tabs>
      </q-header>
    </q-layout>

</template>

<script setup>
import { ref } from 'vue'



const tab = ref('Home')

</script>

<style lang="scss" scoped>

</style>