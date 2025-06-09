<template>
  <div
    class="select-none fixed top-0 left-0 h-full w-1/4 bg-white border-r shadow-lg rounded-r-xl transition-transform duration-300 z-10"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div
      class="flex items-center justify-between p-4 border-gray-200 bg-white rounded-t-xl"
    >
      <h3 class="text-lg font-semibold text-gray-800">
        {{ t('SettingsMenu.title') }}
      </h3>
      <button
        class="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center transition-colors"
        @click="closeSettings"
      >
        <img src="../assets/icons/x-lg.svg" :alt="t('SettingsMenu.close')" />
      </button>
    </div>
    <!-- Scroll Area -->
    <div
      ref="itemRef"
      class="p-4 overflow-y-auto"
      style="height: calc(100% - 160px)"
    >
      <!-- Restart Tour -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-left">{{ t('SettingsMenu.restartTour') }}</span>
        <button
          class="ml-auto flex items-center border-1 border-blue-500 text-blue-500 rounded px-2 py-1 transition-colors duration-150 bg-white hover:bg-blue-500 hover:text-white focus:outline-none h-8 w-8 justify-center"
          @click="restartUserTour"
        >
          <ArrowRight class="h-8 w-8" />
        </button>
      </div>

      <!-- Open GitHub Repo -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-left">{{ t('SettingsMenu.openGitHubRepo') }}</span>
        <button
          class="ml-auto flex items-center border-1 border-blue-500 text-blue-500 rounded px-2 py-1 transition-colors duration-150 bg-white hover:bg-blue-500 hover:text-white focus:outline-none h-8 w-8 justify-center"
          @click="openGithub"
        >
          <ArrowUpRight class="h-8 w-8" />
        </button>
      </div>

      <!-- Open User Manual -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-left">{{ t('SettingsMenu.openUserManual') }}</span>
        <button
          class="ml-auto flex items-center border-1 border-blue-500 text-blue-500 rounded px-2 py-1 transition-colors duration-150 bg-white hover:bg-blue-500 hover:text-white focus:outline-none h-8 w-8 justify-center"
          @click="openUserManual"
        >
          <ArrowUpRight class="h-8 w-8" />
        </button>
      </div>

      <!-- Bug Report and Feedback -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-left">
          {{ t('SettingsMenu.bugReportAndFeedback') }}
        </span>
        <button
          class="ml-auto flex items-center border-1 border-blue-500 text-blue-500 rounded px-2 py-1 transition-colors duration-150 bg-white hover:bg-blue-500 hover:text-white focus:outline-none h-8 w-8 justify-center"
          @click="feedback"
        >
          <ArrowUpRight class="h-8 w-8" />
        </button>
      </div>

      <!-- Divider -->
      <hr class="my-2 border-gray-300" />

      <!-- Language Settings -->
      <div class="flex items-center justify-between">
        <label class="font-medium">{{ t('SettingsMenu.language') }}</label>
        <select
          v-model="currentLocale"
          @change="changeLanguage"
          class="ml-auto border rounded px-2 py-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-10 w-2/3"
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

      <!-- DeepSeek API Settings -->
      <div class="flex items-center justify-between mt-4">
        <label class="font-medium">
          {{ t('SettingsMenu.deepseekApiSettings') }}
        </label>
        <span v-if="!isDeepseekEditing">
          <button
            class="ml-auto flex items-center border border-blue-500 rounded px-2 py-1 transition-colors duration-150 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none h-8 w-8 justify-center"
            @click="startEditDeepSeek()"
          >
            <img
              src="../assets/icons/pencil-fill.svg"
              class="w-6 h-6"
              :alt="t('SettingsMenu.edit')"
            />
          </button>
        </span>
        <span v-else class="flex gap-2" ref="deepseekConfigActionsRef">
          <button
            class="flex items-center border border-red-500 rounded px-2 py-1 transition-colors duration-150 bg-red-500 text-white hover:bg-red-600 focus:outline-none h-8 w-8 justify-center"
            @click="cancelEditDeepSeek()"
          >
            <img
              src="../assets/icons/x-lg.svg"
              class="w-6 h-6"
              :alt="t('SettingsMenu.cancel')"
            />
          </button>
          <button
            class="flex items-center border border-green-500 rounded px-2 py-1 transition-colors duration-150 bg-green-500 text-white hover:bg-green-600 focus:outline-none h-8 w-8 justify-center"
            @click="saveDeepSeek()"
          >
            <img
              src="../assets/icons/check-lg.svg"
              class="w-6 h-6"
              :alt="t('SettingsMenu.save')"
            />
          </button>
        </span>
        <Tooltip
          :targetEl="deepseekConfigActionsRef"
          :visible="deepseekConfigNotSavedError"
          :content="t('SettingsMenu.saveOrCancelFirst')"
        />
      </div>
      <div class="flex items-center justify-between mt-2">
        <label class="text-gray-600">
          {{ t('SettingsMenu.deepseekApiKey') }}
        </label>
        <input
          ref="deepseekApiKeyInputRef"
          :type="
            isDeepseekConfigExists && !isDeepseekEditing ? 'password' : 'text'
          "
          class="ml-auto border rounded px-2 py-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-10 w-2/3"
          :class="{
            'border-red-500': deepseekApiKeyError,
            'select-none pointer-events-none': !isDeepseekEditing,
            'bg-gray-300': !isDeepseekEditing,
            'text-gray-500': !isDeepseekEditing,
          }"
          :disabled="!isDeepseekEditing"
          :value="
            isDeepseekConfigExists || isDeepseekEditing
              ? deepseekApiKey
              : t('SettingsMenu.notSet')
          "
          @input="
            (e) => {
              deepseekApiKey = (e.target as HTMLInputElement).value;
              deepseekApiKeyError = false;
            }
          "
        />
        <Tooltip
          :targetEl="deepseekApiKeyInputRef"
          :visible="deepseekApiKeyError"
          :content="t('SettingsMenu.deepseekApiKeyEmptyError')"
        />
      </div>

      <!-- SimpleTex API Settings -->
      <div class="flex items-center justify-between mt-4">
        <label class="font-medium">
          {{ t('SettingsMenu.simpleTexApiSettings') }}
        </label>
        <span v-if="!isSimpletexEditing">
          <button
            class="ml-auto flex items-center border border-blue-500 rounded px-2 py-1 transition-colors duration-150 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none h-8 w-8 justify-center"
            @click="startEditSimpleTex()"
          >
            <img
              src="../assets/icons/pencil-fill.svg"
              class="w-6 h-6"
              :alt="t('SettingsMenu.edit')"
            />
          </button>
        </span>
        <span v-else class="flex gap-2" ref="simpletexConfigActionsRef">
          <button
            class="flex items-center border border-red-500 rounded px-2 py-1 transition-colors duration-150 bg-red-500 text-white hover:bg-red-600 focus:outline-none h-8 w-8 justify-center"
            @click="cancelEditSimpleTex()"
          >
            <img
              src="../assets/icons/x-lg.svg"
              class="w-6 h-6"
              :alt="t('SettingsMenu.cancel')"
            />
          </button>
          <button
            class="flex items-center border border-green-500 rounded px-2 py-1 transition-colors duration-150 bg-green-500 text-white hover:bg-green-600 focus:outline-none h-8 w-8 justify-center"
            @click="saveSimpleTex()"
          >
            <img
              src="../assets/icons/check-lg.svg"
              class="w-6 h-6"
              :alt="t('SettingsMenu.save')"
            />
          </button>
        </span>
        <Tooltip
          :targetEl="simpletexConfigActionsRef"
          :visible="simpletexConfigNotSavedError"
          :content="t('SettingsMenu.saveOrCancelFirst')"
        />
      </div>
      <div class="flex items-center justify-between mt-2 relative">
        <label class="text-gray-600">
          {{ t('SettingsMenu.simpleTexAppId') }}
        </label>
        <input
          ref="simpletexAppIdInputRef"
          :type="
            isSimpletexConfigExists && !isSimpletexEditing ? 'password' : 'text'
          "
          class="ml-auto border rounded px-2 py-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-10 w-2/3"
          :class="{
            'border-red-500': simpletexAppIdError,
            'select-none pointer-events-none': !isSimpletexEditing,
            'bg-gray-300': !isSimpletexEditing,
            'text-gray-500': !isSimpletexEditing,
          }"
          :disabled="!isSimpletexEditing"
          :value="
            isSimpletexConfigExists || isSimpletexEditing
              ? simpletexAppId
              : t('SettingsMenu.notSet')
          "
          @input="
            (e) => {
              simpletexAppId = (e.target as HTMLInputElement).value;
              simpletexAppIdError = false;
            }
          "
        />
      </div>
      <Tooltip
        :targetEl="simpletexAppIdInputRef"
        :visible="simpletexAppIdError"
        :content="t('SettingsMenu.simpleTexAppIdEmptyError')"
      />
      <div class="flex items-center justify-between mt-2">
        <label class="text-gray-600">
          {{ t('SettingsMenu.simpleTexAppSecret') }}
        </label>
        <input
          ref="simpletexAppSecretInputRef"
          :type="
            isSimpletexConfigExists && !isSimpletexEditing ? 'password' : 'text'
          "
          class="ml-auto border rounded px-2 py-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-10 w-2/3"
          :class="{
            'border-red-500': simpletexAppSecretError,
            'select-none pointer-events-none': !isSimpletexEditing,
            'bg-gray-300': !isSimpletexEditing,
            'text-gray-500': !isSimpletexEditing,
          }"
          :disabled="!isSimpletexEditing"
          :value="
            isSimpletexConfigExists || isSimpletexEditing
              ? simpletexAppSecret
              : t('SettingsMenu.notSet')
          "
          @input="
            (e) => {
              simpletexAppSecret = (e.target as HTMLInputElement).value;
              simpletexAppSecretError = false;
            }
          "
        />
      </div>
      <Tooltip
        :targetEl="simpletexAppSecretInputRef"
        :visible="simpletexAppSecretError"
        :content="t('SettingsMenu.simpleTexAppSecretEmptyError')"
      />
    </div>

    <!-- Footer -->
    <div
      class="border-t mt-4 px-6 py-3 flex flex-col items-center text-xs text-gray-500"
    >
      <div class="flex items-center gap-2">
        <img src="../assets/app-icon.png" alt="FormuLaTeX" class="w-5 h-5" />
        <span>
          {{ t('appName') }} {{ t('SettingsMenu.version', [appVersion]) }}
        </span>
      </div>
      <div class="text-gray-400 mt-1">{{ t('SettingsMenu.developBy') }}</div>
      <div class="text-gray-400 mt-1">
        {{ t('SettingsMenu.translator', [t('translator')]) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { availableLocales, getI18n } from '../utils/locales';
  import type { createI18n } from 'vue-i18n';
  import Tooltip from './Tooltip.vue';
  import type {
    DeepSeekConfig,
    SimpleTexConfig,
  } from '../../../shared/interfaces';
  import { useI18n } from 'vue-i18n';
  import ArrowRight from '../assets/icons/ArrowRight.vue';
  import ArrowUpRight from '../assets/icons/ArrowUpRight.vue';

  // i18n
  const currentLocale = ref('en');
  let i18n: ReturnType<typeof createI18n> | undefined;

  const { t } = useI18n();

  const isDeepseekConfigExists = ref(false);
  const isDeepseekEditing = ref(false);
  const deepseekApiKey = ref('');
  const deepseekApiKeyError = ref(false);
  const deepseekConfigNotSavedError = ref(false);
  const deepseekApiKeyInputRef = ref<HTMLInputElement | null>(null);
  const deepseekConfigActionsRef = ref<HTMLElement | null>(null);

  const isSimpletexConfigExists = ref(false);
  const isSimpletexEditing = ref(false);
  const simpletexAppId = ref('');
  const simpletexAppSecret = ref('');
  const simpletexAppIdError = ref(false);
  const simpletexAppSecretError = ref(false);
  const simpletexConfigNotSavedError = ref(false);
  const simpletexAppIdInputRef = ref<HTMLInputElement | null>(null);
  const simpletexAppSecretInputRef = ref<HTMLInputElement | null>(null);
  const simpletexConfigActionsRef = ref<HTMLElement | null>(null);

  const appVersion = ref('[UNKNOWN]');

  onMounted(async () => {
    i18n = await getI18n();
    currentLocale.value = i18n!.global.locale as string;

    isDeepseekConfigExists.value =
      await window.servicesApi.isConfigExist('deepseek');
    isSimpletexConfigExists.value =
      await window.servicesApi.isConfigExist('simpletex');

    deepseekApiKey.value = isDeepseekConfigExists.value
      ? '****************************************'
      : '';

    simpletexAppId.value = isSimpletexConfigExists.value
      ? '****************************************'
      : '';

    simpletexAppSecret.value = isSimpletexConfigExists.value
      ? '****************************************'
      : '';

    appVersion.value =
      (await window.servicesApi.getAppVersion()) || '[UNKNOWN]';
  });

  defineProps<{
    isOpen: boolean;
  }>();

  const emit = defineEmits(['close', 'restart-tour']);

  // Close settings menu
  function closeSettings() {
    deepseekConfigNotSavedError.value = isDeepseekEditing.value;
    simpletexConfigNotSavedError.value = isSimpletexEditing.value;

    if (isDeepseekEditing.value || isSimpletexEditing.value) {
      return;
    }

    emit('close');
  }

  // Language Settings
  function changeLanguage() {
    if (i18n) {
      i18n.global.locale = currentLocale.value;
      window.servicesApi.saveAppSetting('language', currentLocale.value);
      document.title = (i18n.global as import('vue-i18n').Composer).t(
        'appTitle'
      );
    }
  }

  // DeepSeek API Settings
  function startEditDeepSeek() {
    deepseekApiKey.value = '';
    isDeepseekEditing.value = true;
  }

  function cancelEditDeepSeek() {
    deepseekApiKeyError.value = false;
    deepseekConfigNotSavedError.value = false;

    deepseekApiKey.value = isDeepseekConfigExists.value
      ? '****************************************'
      : '';

    isDeepseekEditing.value = false;
  }

  async function saveDeepSeek() {
    const apiKey = deepseekApiKey.value.trim();

    deepseekApiKeyError.value = !apiKey;

    if (!apiKey) {
      return;
    }

    await window.servicesApi.saveJsonConfig('deepseek', {
      apiKey: apiKey,
    } as DeepSeekConfig);

    await window.chatClientApi.deepseekUpdateApiKey(apiKey); // Update client

    deepseekApiKey.value = '****************************************'; // Mask the API key in the input

    isDeepseekConfigExists.value = true;
    isDeepseekEditing.value = false;
    deepseekConfigNotSavedError.value = false;
  }

  // SimpleTex API Settings

  function startEditSimpleTex() {
    simpletexAppId.value = '';
    simpletexAppSecret.value = '';
    isSimpletexEditing.value = true;
  }

  function cancelEditSimpleTex() {
    simpletexAppIdError.value = false;
    simpletexAppSecretError.value = false;

    simpletexAppId.value = isSimpletexConfigExists.value
      ? '****************************************'
      : '';

    simpletexAppSecret.value = isSimpletexConfigExists.value
      ? '****************************************'
      : '';

    isSimpletexEditing.value = false;
    simpletexConfigNotSavedError.value = false;
  }

  async function saveSimpleTex() {
    const appId = simpletexAppId.value.trim();
    const appSecret = simpletexAppSecret.value.trim();

    simpletexAppIdError.value = !appId;
    simpletexAppSecretError.value = !appSecret;

    if (!appId || !appSecret) {
      return;
    }

    await window.servicesApi.saveJsonConfig('simpletex', {
      appId: appId,
      appSecret: appSecret,
    } as SimpleTexConfig);

    //Mask the Config in the input
    simpletexAppId.value = '****************************************';
    simpletexAppSecret.value = '****************************************';

    isSimpletexConfigExists.value = true;
    isSimpletexEditing.value = false;
    simpletexConfigNotSavedError.value = false;
  }

  // Restart the tutorial
  function restartUserTour() {
    emit('close');
    emit('restart-tour');
  }

  // Open GitHub repository
  function openGithub() {
    window.servicesApi.openUrlInBrowser(
      'https://github.com/Leo204-LKY/FormuLaTeX'
    );
  }

  // Open User Manual
  function openUserManual() {
    window.servicesApi.openUrlInBrowser(
      'https://github.com/Leo204-LKY/FormuLaTeX/tree/main/doc/03-user-manual/user-manual.md'
    );
  }

  // Bug report and feedback
  function feedback() {
    window.servicesApi.openUrlInBrowser(
      'https://github.com/Leo204-LKY/FormuLaTeX/issues/new'
    );
  }

  const itemRef = ref<HTMLElement | null>(null);
  defineExpose({ itemRef });
</script>
