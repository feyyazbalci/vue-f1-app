<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


</script>

<template>
  <div>
    <Navbar/>
   
    <div class="q-py-lg" id="top">
        <RouterView></RouterView>
    </div>

    <Footer />
  </div>

</template>

<style scoped>

</style>
