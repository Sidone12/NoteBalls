<script setup lang="ts">
import NavBar from './components/Layout/NavBar.vue';
</script>

<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-5">
      <router-view />
  </div>
</template>

<style scoped>

</style>

<style>
@import 'bulma/css/bulma.min.css'
</style>
