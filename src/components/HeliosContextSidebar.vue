<template>
  <aside class="w-64 p-6 border-l border-white border-opacity-10 bg-black bg-opacity-30 text-white flex flex-col gap-6">

    <!-- 🔘 Join Session -->
    <div>
      <h2 class="text-sm font-semibold mb-2 uppercase tracking-widest text-gray-300">Session</h2>
      <button class="w-full bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded">
        Join Zoom Session
      </button>
    </div>

    <!-- 🌀 Mode Switcher -->
    <div>
      <h2 class="text-sm font-semibold mb-2 uppercase tracking-widest text-gray-300">Mode</h2>
      <select v-model="selectedMode" class="w-full bg-black bg-opacity-50 text-white p-2 rounded border border-white border-opacity-20">
        <option value="IFS">IFS</option>
        <option value="CBT">CBT</option>
        <option value="TA">Transactional Analysis</option>
        <option value="EMDR">EMDR</option>
        <option value="Mythopoetic">Mythopoetic</option>
      </select>
    </div>

    <!-- 📤 Export Options -->
    <div>
      <h2 class="text-sm font-semibold mb-2 uppercase tracking-widest text-gray-300">Export</h2>
      <ul class="flex flex-col gap-2">
        <li><button class="w-full text-left px-3 py-1 hover:bg-white hover:bg-opacity-10 rounded">Copy to Clipboard</button></li>
        <li><button class="w-full text-left px-3 py-1 hover:bg-white hover:bg-opacity-10 rounded">Export as PDF</button></li>
        <li><button class="w-full text-left px-3 py-1 hover:bg-white hover:bg-opacity-10 rounded">Email Summary</button></li>
      </ul>
    </div>

    <!-- 🎧 Send Audio -->
    <div>
      <h2 class="text-sm font-semibold mb-2 uppercase tracking-widest text-gray-300">Audio</h2>
      <button class="w-full px-3 py-1 bg-blue-800 hover:bg-blue-700 rounded">Send Audio to Client</button>
    </div>

    <!-- 🗺️ Map Slot -->
    <div>
      <h2 class="text-sm font-semibold mb-2 uppercase tracking-widest text-gray-300">Map</h2>
      <div class="bg-white bg-opacity-10 rounded p-3 text-sm text-gray-300 italic">
        Client Map Viewer (Coming soon)
      </div>
    </div>

    <!-- ⚙️ Settings -->
    <div class="mt-auto pt-4 border-t border-white border-opacity-10">
      <button class="text-sm text-gray-300 hover:underline">Open Settings</button>
    </div>

  </aside>
</template>

<script setup>
import { ref } from 'vue'
const selectedMode = ref('IFS')
</script>

