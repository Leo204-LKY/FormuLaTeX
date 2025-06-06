<template>
  <div
    v-show="visible"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300]"
    :class="{ 'opacity-0 pointer-events-none': !visible }"
  >
    <div
      class="bg-white rounded-lg shadow-xl w-[50vw] max-w-[50vw] max-h-[75vh] h-auto mx-4 overflow-hidden transform transition-all duration-300"
      :class="{
        'scale-95 opacity-0': !visible,
        'scale-100 opacity-100': visible,
      }"
    >
      <!-- Title -->
      <div
        class="px-6 py-4 border-b border-gray-200 flex justify-center items-center"
      >
        <h3 class="select-none text-lg font-semibold text-center text-red-600">
          {{ t('ErrorDialog.title') }}
        </h3>
      </div>
      <!-- Error Detail Scroll Box -->
      <div
        class="px-6 py-4 max-h-60 overflow-auto bg-gray-50 rounded text-left font-mono text-xs text-gray-800 border"
      >
        <pre class="whitespace-pre-wrap break-all">{{ detail }}</pre>
      </div>
      <!-- Tip -->
      <div class="select-none px-6 py-2 text-xs text-gray-500 text-left">
        {{ t('ErrorDialog.logfileTip') }}
        <span class="select-all font-mono">{{ filePath }}</span>
      </div>
      <div class="select-none px-6 py-2 text-sm text-left">
        {{ t('ErrorDialog.reportTip') }}
      </div>
      <!-- Buttons -->
      <div
        class="select-none px-6 py-3 bg-gray-50 flex justify-center space-x-3"
      >
        <button :class="getButtonClass('primary')" @click="onDismiss">
          {{ t('ErrorDialog.dismiss') }}
        </button>
        <button :class="getButtonClass('primary')" @click="onOpenFile">
          {{ t('ErrorDialog.showFile') }}
        </button>
        <button :class="getButtonClass('danger')" @click="onFeedback">
          {{ t('ErrorDialog.report') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';

  // i18n
  const { t } = useI18n();

  const feedbackUrl =
    'https://github.com/Leo204-LKY/FormuLaTeX/issues/new?template=bug_report.md';

  const props = defineProps({
    visible: { type: Boolean, default: false },
    detail: { type: String, default: '' },
    filePath: { type: String, default: '' },
    closeOnOverlay: { type: Boolean, default: true },
    closeOnEsc: { type: Boolean, default: true },
  });

  void props; // Prevent unused variable warning

  const emits = defineEmits(['update:visible', 'open-file', 'closed']);

  const close = () => {
    emits('update:visible', false);
    emits('closed');
  };

  const onDismiss = () => {
    emits('update:visible', false);
  };

  const onOpenFile = async () => {
    await window.servicesApi.showFileInFolder(props.filePath);
  };

  const onFeedback = async () => {
    await window.servicesApi.openUrlInBrowser(feedbackUrl);
  };

  // ESC key handler
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.closeOnEsc) {
      close();
    }
  };

  const getButtonClass = (type: string) => {
    switch (type) {
      case 'primary':
        return 'px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[100px]';
      case 'secondary':
        return 'px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center min-w-[100px]';
      case 'danger':
        return 'px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center min-w-[100px]';
      default:
        return 'px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[100px]';
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });
</script>
