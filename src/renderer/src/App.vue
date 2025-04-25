<template>
  <div class="flex h-screen">
    <!-- QuickInput组件在最左边 -->
    <div class="w-1/4 h-full">
      <QuickInput />
    </div>
    <!-- SymbolSelection和FormulaEdit组件在右边 -->
    <div class="flex-1 flex flex-col">
      <!-- SymbolSelection组件在顶部右边 -->
      <div class="h-1/4">
        <SymbolSelect />
      </div>
      <!-- FormulaEdit组件在右下角 -->
      <div class="flex-1">
        <FormulaEdit ref="editorRef" v-model:latexInput="latexInput" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import QuickInput from './components/QuickInput.vue';
  import FormulaEdit from './components/FormulaEdit.vue';
  import SymbolSelect from './components/SymbolSelect.vue';

  import { ref, onMounted, onUnmounted } from 'vue';
  import { eventBus } from './eventBus';

  const latexInput = ref('');
  const editorRef = ref();

  const handleFormulaSelect = (expr: string) => {
    // 👇 通过引用调用插入函数
    editorRef.value?.insertFormulaAtCursor(expr);
  };

  onMounted(() => {
    eventBus.on('selectExpression', handleFormulaSelect);
  });

  onUnmounted(() => {
    eventBus.off('selectExpression', handleFormulaSelect);
  });
</script>
