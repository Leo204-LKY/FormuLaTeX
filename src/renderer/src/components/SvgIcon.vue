<!-- SvgIcon.vue -->
<template>
  <div v-html="iconContent"></div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { defineProps } from 'vue';

  const props = defineProps({
    iconPath: {
      type: String,
      required: true,
    },
  });

  const iconContent = ref('');

  onMounted(async () => {
    try {
      const response = await fetch(props.iconPath);
      const svgText = await response.text();
      iconContent.value = svgText;
    } catch (error) {
      console.error('Failed to load SVG icon:', error);
    }
  });
</script>
