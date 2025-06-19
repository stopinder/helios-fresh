<template>
  <div class="min-h-screen flex overflow-hidden text-helioMist">

    <!-- LEFT CANVAS -->
    <div class="flex-1 p-12 flex flex-col justify-between bg-gradient-to-b from-helioIndigo via-helioMidnight to-black">
      <h1 class="text-4xl font-serif mb-6 text-helioMist drop-shadow-lg relative">
        Reflective Journal
        <span class="absolute left-0 -bottom-2 inline-block w-10 h-1 bg-helioMist opacity-40 rounded-full"></span>
      </h1>

      <!-- Mic button hint -->
      <div class="flex items-center space-x-4">
        <input
            disabled
            type="text"
            placeholder="Enter your reflection..."
            class="flex-1 px-6 py-4 rounded-3xl bg-helioGlass text-helioMist placeholder-helioLavender focus:outline-none border border-helioGlass shadow-inner"
        />
        <button
            class="w-16 h-16 bg-helioGlass rounded-full flex items-center justify-center border border-helioGlass shadow hover:animate-pulse transition"
        >
          🎤
        </button>
      </div>
    </div>

    <!-- RIGHT SIDEBAR -->
    <div class="w-96 p-8 border-l border-helioGlassBlue bg-helioIndigo/90 backdrop-blur-sm flex flex-col justify-between space-y-6">



    <!-- Session Status -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-helioMist">Current Session</h2>
          <span class="text-xs px-2 py-1 rounded bg-red-500 text-white">Live</span>
        </div>
        <button class="w-full flex items-center justify-center px-4 py-3 bg-helioMist text-black font-semibold rounded-2xl shadow hover:opacity-90 transition">
          🔗 Join Session
        </button>
      </div>

      <!-- View Switcher -->
      <div>
        <h3 class="text-sm uppercase tracking-wide text-helioLavender mb-2">View</h3>
        <button class="w-full flex items-center justify-between px-4 py-3 bg-helioGlass text-helioMist rounded-2xl border border-helioGlass shadow-inner">
          Reflection Journal
          <span class="ml-2">▼</span>
        </button>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-between space-x-4">
        <button class="flex-1 px-4 py-2 bg-helioGlass border border-helioGlass rounded-xl hover:bg-white/20 transition">
          Export
        </button>
        <button class="flex-1 px-4 py-2 bg-helioGlass border border-helioGlass rounded-xl hover:bg-white/20 transition">
          History
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
// No reactive state needed for this static mock
</script>


