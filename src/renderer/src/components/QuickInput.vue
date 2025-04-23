<template>
  <div class="bg-white border border-gray-200 rounded-md p-4 flex flex-col">
    <h2 class="text-xl font-bold mb-4">Quick Input</h2>
    <div class="flex justify-around items-center mb-4">
      <button class="bg-blue-100 text-sm px-2 py-1 rounded-md">History</button>
      <button class="bg-blue-100 text-sm px-2 py-1 rounded-md">Common</button>
      <button class="bg-blue-100 text-sm px-2 py-1 rounded-md">Common</button>
      <button class="bg-blue-100 text-sm px-2 py-1 rounded-md">History</button>
    </div>
    <div v-for="(_, index) in displayItems" :key="index" class="mb-4">
      <div class="flex justify-between items-center mb-2">
        <span class="bg-green-100 text-xs px-1 py-0.5 rounded-md">
          Function
        </span>
      </div>
      <div
        class="bg-green-100 text-center p-4 border border-green-200"
        style="height: 100px"
      >
        公式展示
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const displayItems = Array.from({ length: 5 }, (_, i) => i);
</script>
