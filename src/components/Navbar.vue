<template>
  <nav class="navbar has-background-grey navbar" aria-label="main navigation" role="navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          <RouterLink to="/" class="has-text-white-bis has-text-weight-semibold">F1 World</RouterLink>
        </div>

        <a @click.prevent="showMobileNav = !showMobileNav" class="navbar-burger" :class="{ 'is-active' : showMobileNav }" aria-expanded="false" aria-label="menu"
          data-target="navbarBasicExample" role="button" ref="navbarBurgerRef">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" ref="navbarMenuRef"  :class="{ 'is-active' : showMobileNav }">

        <div class="navbar-end">
          <RouterLink @click="showMobileNav = false" to="/" class="navbar-item" active-class="is-active">
            Home
          </RouterLink>
          <RouterLink @click="showMobileNav = false" to="/driverStandings" class="navbar-item" active-class="is-active">
            Drivers
          </RouterLink>
          <RouterLink @click="showMobileNav = false" to="/constructorStandings" class="navbar-item" active-class="is-active">
            Constructor Standings
          </RouterLink>
          <RouterLink @click="showMobileNav = false" to="/calender" class="navbar-item" active-class="is-active">
            Calender
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

import { ref } from 'vue'

const showMobileNav = ref(false)
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>

