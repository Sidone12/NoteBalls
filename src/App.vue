<script setup lang="ts">
import { onMounted } from 'vue';
import NavBar from './components/Layout/NavBar.vue';
import { useStoreNotes } from './stores/storeNotes';
const store = useStoreNotes();

onMounted(()=> store.getNotes())
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
