<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="p-4">
    <nav class="mb-4 space-x-4">
      <router-link to="/">Client Panel</router-link>
      <router-link to="/client-view">Client View</router-link>
      <router-link to="/clinician-view">Clinician View</router-link>
      <router-link to="/reflective-chat">Reflective Chat</router-link>
      <router-link to="/system-map">System Map</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
