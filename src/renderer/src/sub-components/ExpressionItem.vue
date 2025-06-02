<template>
  <div
    class="mb-4 relative"
    ref="itemRef"
    @contextmenu.prevent="handleRightClick"
  >
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
  import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
  import { selectExpressionEventBus, contextMenuEventBus } from '../eventBus';
  import KatexRenderer from '../sub-components/KatexRenderer.vue';

  const itemRef = ref<HTMLElement | null>(null);
  const emit = defineEmits(['edit', 'delete']);

  interface Expression {
    name: string | null;
    latex_code: string;
  }

  interface Topics {
    title: string;
    id: string;
  }

  const props = defineProps<{
    expression: Expression;
  }>();

  const handleClick = () => {
    selectExpressionEventBus.emit(
      'selectExpression',
      props.expression.latex_code
    );
  };

  const handleRightClick = async (e: MouseEvent) => {
    e.preventDefault();

    await nextTick();

    if (itemRef.value) {
      const rect = itemRef.value.getBoundingClientRect();
      const menuX = rect.right + 2;
      const menuY = rect.top + rect.height / 2 - 24;

      contextMenuEventBus.emit('openContextMenu', {
        x: menuX,
        y: menuY,
        expression: props.expression,
        type: 'expression',
      });
    }
  };

  const onEditExpression = (target: Expression | Topics) => {
    if (
      'latex_code' in target &&
      target.latex_code === props.expression.latex_code
    ) {
      emit('edit', props.expression);
    }
  };

  const onDeleteExpression = (target: Expression | Topics) => {
    if (
      'latex_code' in target &&
      target.latex_code === props.expression.latex_code
    ) {
      emit('delete', props.expression);
    }
  };

  onMounted(() => {
    contextMenuEventBus.on('editExpression', onEditExpression);
    contextMenuEventBus.on('deleteExpression', onDeleteExpression);
  });

  onBeforeUnmount(() => {
    contextMenuEventBus.off('editExpression', onEditExpression);
    contextMenuEventBus.off('deleteExpression', onDeleteExpression);
  });
</script>
