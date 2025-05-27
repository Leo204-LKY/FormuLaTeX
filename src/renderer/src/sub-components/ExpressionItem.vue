<!-- ExpressionItem.vue -->
<template>
  <div class="mb-4">
    <div class="flex justify-between items-center mb-2">
      <span class="bg-green-100 text-xs px-1 py-0.5 rounded-md">
        {{ expression.name }}
      </span>
    </div>
    <div
      class="bg-green-50 text-center p-4 border border-green-200 cursor-pointer hover:bg-green-100 transition"
      @click="handleClick"
    >
      <KatexRenderer :expression="expression.latex_code" :displayMode="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { selectExpressionEventBus } from '../eventBus';
  import KatexRenderer from '../sub-components/KatexRenderer.vue';

  const props = defineProps<{
    expression: {
      name: string | null;
      latex_code: string;
    };
  }>();

  const handleClick = () => {
    selectExpressionEventBus.emit(
      'selectExpression',
      props.expression.latex_code
    );
  };
</script>
