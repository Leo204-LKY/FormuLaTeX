<template>
  <div class="mb-4">
    <div class="flex justify-between items-center mb-2">
      <span class="bg-green-100 text-xs px-1 py-0.5 rounded-md">Function</span>
    </div>
    <div class="bg-green-100 text-center p-4 border border-green-200">
      <KatexRenderer :expression="expression" :displayMode="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import KatexRenderer from './KatexRenderer.vue';
  defineProps<{ expression: string }>();
</script>
