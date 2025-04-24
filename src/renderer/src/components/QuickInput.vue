<template>
  <div
    class="bg-white border border-gray-200 rounded-md p-4 flex flex-col h-full"
    style="height: 100%"
  >
    <h2 class="text-xl font-bold mb-4">Quick Input</h2>
    <div class="flex justify-around items-center mb-4">
      <button class="bg-blue-100 text-sm px-2 py-1 rounded-md">History</button>
      <button class="bg-blue-100 text-sm px-2 py-1 rounded-md">Common</button>
      <button class="bg-blue-100 text-sm px-2 py-1 rounded-md">Common</button>
      <button class="bg-blue-100 text-sm px-2 py-1 rounded-md">History</button>
    </div>
    <div class="flex-1 overflow-y-auto">
      <QuickInputItem
        v-for="(_, index) in displayItems"
        :key="index"
        :expression="`c = \\sqrt{a^2 + b^2}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import QuickInputItem from './ExpressionItem.vue';
  const displayItems = Array.from({ length: 10 }, (_, i) => i);
  // const latexFormula = '\\(E = mc^2\\)';
</script>
