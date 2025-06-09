<template>
  <div
    class="select-none min-h-screen bg-gray-100 flex items-center justify-center"
  >
    <!-- Container -->
    <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
      <!-- Logo and Title -->
      <div class="flex items-center justify-center mb-8">
        <img
          src="../assets/app-icon.png"
          alt="FormuLaTeX Logo"
          class="h-12 mr-2"
        />
        <h1 class="text-2xl font-bold text-gray-800">FormuLaTeX</h1>
      </div>

      <!-- Welcome Text -->
      <p class="text-center text-gray-600 mb-6">
        {{ t('WelcomeCard.title') }}
        <br />
        {{ t('WelcomeCard.subtitle') }}
      </p>

      <!-- Language Select -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700">
          {{ t('WelcomeCard.language') }}
        </label>
        <select
          v-model="currentLocale"
          @change="changeLanguage"
          class="mt-1 block w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all h-10"
        >
          <option
            v-for="locale in availableLocales"
            :key="locale.value"
            :value="locale.value"
          >
            {{ locale.label }}
          </option>
        </select>
      </div>

      <!-- API Configuration -->
      <div v-show="!isSkipped" class="mb-6">
        <div class="mt-4">
          <div class="mb-2">
            <label class="block text-xs font-medium text-gray-600">
              {{ t('WelcomeCard.deepseekApiKey') }}
            </label>
            <input
              v-model="deepseek_appId"
              type="text"
              class="mt-1 block border-2 w-full rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all h-10 px-1 py-1"
              @contextmenu="onContextMenu"
            />
          </div>
          <div class="mb-2">
            <label class="block text-xs font-medium text-gray-600">
              {{ t('WelcomeCard.simpleTexAppId') }}
            </label>
            <input
              v-model="simpletex_appId"
              type="text"
              class="mt-1 block border-2 w-full rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all h-10 px-1 py-1"
              @contextmenu="onContextMenu"
            />
          </div>
          <div class="mb-2">
            <label class="block text-xs font-medium text-gray-600">
              {{ t('WelcomeCard.simpleTexAppSecret') }}
            </label>
            <input
              v-model="simpletex_appSecret"
              type="password"
              class="mt-1 block border-2 w-full rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all h-10 px-1 py-1"
              @contextmenu="onContextMenu"
            />
          </div>
        </div>
      </div>

      <!-- Button Group -->
      <div class="flex justify-between items-center">
        <button
          v-if="!isSkipped"
          @click="skipSetup"
          class="text-sm text-gray-500 hover:text-gray-700"
        >
          {{ t('WelcomeCard.skipButton') }}
        </button>
        <button
          :class="isSkipped ? 'bg-gray-400' : 'bg-blue-600'"
          :disabled="isSkipped || !validateForm()"
          @click="handleSubmit"
          class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[100px]"
        >
          {{
            isSkipped
              ? t('WelcomeCard.submitButton')
              : t('WelcomeCard.okButton')
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import type { SimpleTexConfig } from '../../../shared/interfaces';
  import { useI18n } from 'vue-i18n';
  import { getI18n, availableLocales } from '../utils/locales';
  import type { createI18n } from 'vue-i18n';
  import { onContextMenu } from '../utils/context-menu';

  // i18n
  const { t } = useI18n();

  const currentLocale = ref('en');
  let i18n: ReturnType<typeof createI18n> | undefined;

  const deepseek_appId = ref('');
  const simpletex_appId = ref('');
  const simpletex_appSecret = ref('');
  const isSkipped = ref(false);
  const emit = defineEmits(['on-complete']);
  var isFirstOpen: boolean = false;

  const getFirstOpen = async () => {
    isFirstOpen = await window.servicesApi.getAppSetting('isFirstLaunch', true);
  };

  onMounted(async () => {
    await getFirstOpen();
    console.log('isFirstOpen:', isFirstOpen);
    if (!isFirstOpen) {
      emit('on-complete');
    }
    i18n = await getI18n();
    currentLocale.value = i18n!.global.locale as string;
  });

  // Form validation
  const validateForm = () => {
    return (
      !isSkipped.value &&
      simpletex_appId.value.length > 0 &&
      simpletex_appSecret.value.length > 0
    );
  };

  // Skip setup
  const skipSetup = async () => {
    emit('on-complete');
    isSkipped.value = true;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!isSkipped.value) {
      await window.servicesApi.saveJsonConfig('deepseek', {
        appId: deepseek_appId.value,
      });
      await window.servicesApi.saveJsonConfig('simpletex', {
        appId: simpletex_appId.value,
        appSecret: simpletex_appSecret.value,
      } as SimpleTexConfig);
    }
    emit('on-complete');
  };

  async function changeLanguage() {
    if (i18n) {
      i18n.global.locale = currentLocale.value;
      await window.servicesApi.saveAppSetting('language', currentLocale.value);
      document.title = (i18n.global as import('vue-i18n').Composer).t(
        'appTitle'
      );
    }
  }
</script>
