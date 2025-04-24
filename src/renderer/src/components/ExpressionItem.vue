<template>
  <div class="mb-4">
    <div class="flex justify-between items-center mb-2">
      <span class="bg-green-100 text-xs px-1 py-0.5 rounded-md">Function</span>
    </div>
    <div
      class="bg-green-50 text-center p-4 border border-green-200 cursor-pointer hover:bg-green-100 transition"
      @click="handleClick"
    >
      <KatexRenderer :expression="expression" :displayMode="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { eventBus } from '../eventBus';
  import KatexRenderer from './KatexRenderer.vue';

  const props = defineProps<{
    expression: string;
  }>();

  const handleClick = () => {
    eventBus.emit('selectExpression', props.expression);
  };
</script>
