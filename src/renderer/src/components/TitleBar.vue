<template>
  <div
    class="flex items-center h-12 px-4 bg-white shadow-sm select-none justify-between"
  >
    <div class="flex items-center">
      <img
        src="../assets/app-icon.png"
        alt="FormuLaTeX Logo"
        class="h-8 w-8 mr-2"
      />
      <span class="text-lg font-bold text-gray-800">FormuLaTeX</span>
    </div>
    <button
      class="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white rounded-md transition-colors duration-150 hover:bg-blue-100 focus:outline-none focus:ring-2"
      @click="isSettingsOpen = true"
    >
      <img src="../assets/icons/setting.svg" alt="Settings" />
    </button>
    <SettingsMenu
      :is-open="isSettingsOpen"
      @close="isSettingsOpen = false"
      @restart-tour="onRestartTour"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import SettingsMenu from '../sub-components/SettingsMenu.vue';

  const isSettingsOpen = ref(false);

  const emit = defineEmits(['restart-tour']);
  function onRestartTour() {
    emit('restart-tour');
  }
</script>
