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
    <select
      v-model="currentLocale"
      @change="changeLanguage"
      class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
    >
      <option value="en">English</option>
      <option value="zh-CN">简体中文</option>
    </select>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { getI18n } from '../utils/locales';
  import type { createI18n } from 'vue-i18n';

  const currentLocale = ref('en');
  let i18n: ReturnType<typeof createI18n> | undefined;

  onMounted(async () => {
    i18n = await getI18n();
    currentLocale.value = i18n!.global.locale as string;
  });

  function changeLanguage() {
    if (i18n) {
      i18n.global.locale = currentLocale.value;
      window.servicesApi.saveAppSetting('language', currentLocale.value);
    }
  }
</script>
