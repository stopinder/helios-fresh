<template>
  <div class="min-h-screen bg-gradient-to-b from-helioIndigo via-helioMidnight to-black p-12 text-helioMist">

    <h1 class="text-4xl font-serif mb-10 drop-shadow-lg">
      Clinician Dashboard
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- Client Panel -->
      <div class="bg-helioGlass backdrop-blur-sm border border-helioGlass rounded-2xl p-6 shadow flex flex-col space-y-4">
        <h2 class="text-xl font-semibold text-helioMist">Client Panel</h2>
        <ul class="space-y-3">
          <li v-for="client in clients" :key="client.id" class="flex justify-between items-center">
            <span class="font-medium">{{ client.name }}</span>
            <span v-if="client.flag" class="text-xs bg-helioGold/20 text-helioGold px-2 py-1 rounded-lg">Supervision</span>
          </li>
        </ul>
      </div>

      <!-- System Map -->
      <div class="bg-helioGlass backdrop-blur-sm border border-helioGlass rounded-2xl p-6 shadow flex flex-col space-y-4">
        <h2 class="text-xl font-semibold text-helioMist">System Map</h2>
        <div class="h-48 bg-helioGlass backdrop-blur-sm flex items-center justify-center rounded-xl text-helioMist font-semibold">
          [ Visual Map Placeholder ]
        </div>
      </div>

      <!-- Symbolic Tags -->
      <div class="bg-helioGlass backdrop-blur-sm border border-helioGlass rounded-2xl p-6 shadow flex flex-col space-y-4">
        <h2 class="text-xl font-semibold text-helioMist">Symbolic Tags</h2>
        <div class="flex flex-wrap gap-3">
          <span class="bg-helioLavender/20 text-helioLavender px-4 py-2 rounded-full">The Wound</span>
          <span class="bg-helioAqua/20 text-helioAqua px-4 py-2 rounded-full">The Protector</span>
          <span class="bg-helioGold/20 text-helioGold px-4 py-2 rounded-full">The Threshold</span>
        </div>
      </div>

      <!-- Export Summary -->
      <div class="bg-helioGlass backdrop-blur-sm border border-helioGlass rounded-2xl p-6 shadow flex flex-col space-y-4">
        <h2 class="text-xl font-semibold text-helioMist">Export Summary</h2>
        <p class="text-helioLavender">PDF, Markdown, Therapist Note formats available.</p>
      </div>

    </div>

  </div>
</template>

<script setup>
const clients = [
  { id: 1, name: 'Jane Doe', flag: true },
  { id: 2, name: 'John Smith', flag: false },
  { id: 3, name: 'Emily Chen', flag: true },
];
</script>
