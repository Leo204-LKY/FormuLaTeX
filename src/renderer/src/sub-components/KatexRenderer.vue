<template>
  <div ref="container" class="select-none"></div>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  const props = defineProps<{
    expression: string;
    displayMode?: boolean;
  }>();

  const container = ref<HTMLElement | null>(null);

  const renderKatex = () => {
    if (container.value) {
      katex.render(props.expression, container.value, {
        throwOnError: false,
        displayMode: props.displayMode ?? false,
      });
    }
  };

  onMounted(renderKatex);

  watch(() => props.expression, renderKatex);
</script>
