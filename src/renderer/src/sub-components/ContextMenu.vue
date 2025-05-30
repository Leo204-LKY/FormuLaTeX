<template>
  <div
    v-if="visible"
    class="absolute z-50 bg-white shadow-md border rounded-md text-sm w-24"
    :style="{ left: `${position.x}px`, top: `${position.y}px` }"
    @click.stop
  >
    <ul>
      <li
        v-if="currentType === 'expression'"
        class="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer justify-center text-center"
        @click="emitEdit"
      >
        Edit
      </li>
      <hr class="border-t border-gray-200 my-0" />
      <li
        class="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer justify-center text-center"
        @click="emitDelete"
      >
        Delete
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { contextMenuEventBus } from '../eventBus';

  interface Expression {
    name: string | null;
    latex_code: string;
  }

  interface Topics {
    title: string;
    id: string;
  }

  const visible = ref(false);
  const position = ref({ x: 0, y: 0 });
  const currentType = ref<'expression' | 'historyTopic' | null>(null);
  let currentExpression: Expression | Topics;

  const emitEdit = () => {
    contextMenuEventBus.emit('editExpression', currentExpression);
    closeMenu();
  };

  const emitDelete = () => {
    if (currentType.value === 'expression') {
      contextMenuEventBus.emit('deleteExpression', currentExpression);
    } else if (currentType.value === 'historyTopic') {
      contextMenuEventBus.emit(
        'deleteHistoryTopic',
        currentExpression as Topics
      );
    }
    closeMenu();
  };

  const closeMenu = () => {
    visible.value = false;
    currentType.value = null;
  };

  onMounted(() => {
    contextMenuEventBus.on('openContextMenu', ({ x, y, expression, type }) => {
      position.value = { x, y };
      currentExpression = expression;
      currentType.value = type;
      visible.value = true;
    });

    contextMenuEventBus.on('closeContextMenu', () => {
      closeMenu();
    });

    window.addEventListener('click', closeMenu);
    window.addEventListener('scroll', closeMenu, true);
  });

  onUnmounted(() => {
    window.removeEventListener('click', closeMenu);
    window.removeEventListener('scroll', closeMenu, true);
    contextMenuEventBus.off('openContextMenu');
    contextMenuEventBus.off('closeContextMenu');
  });
</script>
