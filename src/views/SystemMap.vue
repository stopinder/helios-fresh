<template>
  <div class="min-h-screen bg-gradient-to-b from-helioIndigo via-helioMidnight to-black p-12 text-helioMist flex">

    <!-- MAIN CANVAS -->
    <div class="flex-1 flex items-center justify-center relative">

      <!-- Central Self bubble -->
      <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        w-40 h-40 bg-helioGlass backdrop-blur-sm border-2 border-helioMist rounded-full
        flex items-center justify-center text-xl font-semibold hover:scale-105 transition"
      >
        Self
      </div>

      <!-- Protector -->
      <div
          class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        w-28 h-28 bg-helioGlass backdrop-blur-sm border border-helioAqua rounded-full
        flex items-center justify-center text-sm hover:scale-105 transition"
      >
        Protector
      </div>

      <!-- Exile -->
      <div
          class="absolute bottom-1/4 left-1/3 transform -translate-x-1/2
        w-28 h-28 bg-helioGlass backdrop-blur-sm border border-helioLavender rounded-full
        flex items-center justify-center text-sm hover:scale-105 transition"
      >
        Exile
      </div>

      <!-- Manager -->
      <div
          class="absolute top-1/3 right-1/4 transform translate-x-1/2
        w-28 h-28 bg-helioGlass backdrop-blur-sm border border-helioGold rounded-full
        flex items-center justify-center text-sm hover:scale-105 transition"
      >
        Manager
      </div>

      <!-- Firefighter -->
      <div
          class="absolute bottom-1/3 right-1/3 transform translate-x-1/2
        w-28 h-28 bg-helioGlass backdrop-blur-sm border border-helioAqua rounded-full
        flex items-center justify-center text-sm hover:scale-105 transition"
      >
        Firefighter
      </div>

    </div>

    <!-- RIGHT SIDEBAR -->
    <div class="w-96 p-8 border-l border-helioGlass bg-helioMidnight/80 backdrop-blur-sm flex flex-col justify-between space-y-6">

      <!-- Session Info -->
      <div>
        <h2 class="text-lg font-semibold text-helioMist mb-2">Session Info</h2>
        <p class="text-sm text-helioLavender">Session: June 19, 2025</p>
        <p class="text-sm text-helioLavender">Map Version: v1.0</p>
      </div>

      <!-- Parts List -->
      <div>
        <h2 class="text-lg font-semibold text-helioMist mb-2">Parts</h2>
        <ul class="space-y-2">
          <li class="px-3 py-2 rounded-lg bg-helioGlass hover:bg-white/10 cursor-pointer">Protector</li>
          <li class="px-3 py-2 rounded-lg bg-helioGlass hover:bg-white/10 cursor-pointer">Exile</li>
          <li class="px-3 py-2 rounded-lg bg-helioGlass hover:bg-white/10 cursor-pointer">Manager</li>
          <li class="px-3 py-2 rounded-lg bg-helioGlass hover:bg-white/10 cursor-pointer">Firefighter</li>
        </ul>
      </div>

      <!-- Actions -->
      <div class="flex justify-between space-x-4">
        <button class="flex-1 px-4 py-2 bg-helioGlass border border-helioGlass rounded-xl hover:bg-white/20 transition">
          Export
        </button>
        <button class="flex-1 px-4 py-2 bg-helioGlass border border-helioGlass rounded-xl hover:bg-white/20 transition">
          Add Part
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
// No reactive state yet — ready for dynamic map later
</script>


