<!-- SymbolsItem.vue -->
<template>
  <span ref="containerRef" class="select-none"></span>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  const props = defineProps<{
    latex: string;
  }>();

  const containerRef = ref<HTMLElement | null>(null);

  const renderLatex = () => {
    if (containerRef.value) {
      katex.render(props.latex, containerRef.value, {
        throwOnError: false,
        displayMode: false,
      });
    }
  };

  onMounted(renderLatex);
  watch(() => props.latex, renderLatex);
</script>
