<script setup>
import NavBar from './components/NavBar.vue'

</script>

<template>
  <div class="min-h-screen bg-helioBackground text-white flex flex-col">
    <NavBar />
    <main class="flex-1 p-6">
      <RouterView />
    </main>
  </div>
</template>

