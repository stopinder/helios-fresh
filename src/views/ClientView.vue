<template>
  <div class="min-h-screen bg-gradient-to-b from-helioIndigo via-helioMidnight to-black p-12 text-helioMist">

    <h1 class="text-4xl font-serif mb-10 drop-shadow-lg">
      My Reflective Space
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- Journal Entry -->
      <div class="bg-helioGlass backdrop-blur-sm border border-helioGlass rounded-2xl p-6 shadow flex flex-col space-y-4">
        <h2 class="text-xl font-semibold text-helioMist">Reflective Journal</h2>
        <div class="bg-white/10 p-4 rounded-lg text-helioMist">
          “I noticed my anxious part becoming louder before my presentation.”
        </div>
      </div>

      <!-- System Map -->
      <div class="bg-helioGlass backdrop-blur-sm border border-helioGlass rounded-2xl p-6 shadow flex flex-col space-y-4">
        <h2 class="text-xl font-semibold text-helioMist">My System Map</h2>
        <div class="h-48 bg-helioGlass backdrop-blur-sm flex items-center justify-center rounded-xl text-helioMist font-semibold">
          [ Simplified Map ]
        </div>
      </div>

      <!-- Symbolic Reflection -->
      <div class="bg-helioGlass backdrop-blur-sm border border-helioGlass rounded-2xl p-6 shadow flex flex-col space-y-4">
        <h2 class="text-xl font-semibold text-helioMist">Symbolic Reflection</h2>
        <div class="flex flex-wrap gap-3">
          <span class="bg-helioGold/20 text-helioGold px-4 py-2 rounded-full">The Mountain</span>
          <span class="bg-helioAqua/20 text-helioAqua px-4 py-2 rounded-full">The Wave</span>
        </div>
      </div>

      <!-- Privacy Controls -->
      <div class="bg-helioGlass backdrop-blur-sm border border-helioGlass rounded-2xl p-6 shadow flex flex-col space-y-4">
        <h2 class="text-xl font-semibold text-helioMist">Privacy Controls</h2>
        <p class="text-helioLavender">You control what is shared with your clinician.</p>
      </div>

    </div>

  </div>
</template>

<script setup>
// No reactive state needed for this static mock
</script>


