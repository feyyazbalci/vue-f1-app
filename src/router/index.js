import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import Drivers from "@/views/Drivers.vue";
import Calendar from "@/views/Calendar.vue";
import Constructors from '@/views/Constructors.vue'
import Results from "@/views/Results.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/driverStandings',
      name: 'driver',
      component : Drivers
    },
    {
      path : '/constructorStandings',
      name : 'constructorStandings',
      component : Constructors
    },
    {
      path : '/calender',
      name : 'calender',
      component : Calendar
    },
    {
      path : '/calender/results/:id',
      name : 'Results',
      component : Results
    }

  ]
})

export default router
