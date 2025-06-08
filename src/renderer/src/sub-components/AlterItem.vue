<!-- AlterItem.vue -->
<template>
  <!-- Modal Overlay -->
  <div
    v-show="visible"
    class="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 select-none"
    :class="[
      visible
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none',
      props.overlay ? 'bg-black/50' : 'bg-transparent',
    ]"
    @click.self="closeOnOverlay && close()"
  >
    <!-- Modal Content -->
    <div
      class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden transform transition-all duration-300"
      :class="{
        'scale-95 opacity-0': !visible,
        'scale-100 opacity-100': visible,
      }"
    >
      <!-- Title Section -->
      <div
        class="px-6 py-4 border-b border-gray-200 justify-center flex items-center"
      >
        <h3 class="text-lg font-semibold text-center text-gray-800">
          {{ title }}
        </h3>
      </div>

      <!-- Content Section -->
      <div class="px-6 py-4 justify-center text-center">
        <slot>{{ message }}</slot>
      </div>

      <!-- Buttons Section -->
      <div class="px-6 py-3 bg-gray-50 flex justify-center space-x-3">
        <button
          v-for="(btn, index) in buttons"
          :key="index"
          :class="getButtonClass(btn.type)"
          @click="handleButtonClick(btn)"
        >
          {{ btn.text || 'Confirm' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits, onMounted, onUnmounted } from 'vue';

  // Component properties
  const props = defineProps({
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Notice',
    },
    message: {
      type: String,
      default: '',
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    buttons: {
      type: Array,
      default: () => [{ text: t('common.ok'), callback: () => {} }],
    },
    closeOnEsc: {
      type: Boolean,
      default: true,
    },
    closeOnOverlay: {
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
  });

  // Component Events
  const emits = defineEmits(['update:visible', 'closed']);

  // Button click handler
  const handleButtonClick = (btn) => {
    if (typeof btn.callback === 'function') {
      btn.callback();
    }
    emits('update:visible', false);
  };

  // Close modal handler
  const close = () => {
    emits('update:visible', false);
    emits('closed');
  };

  // ESC key handler
  const handleKeydown = (e) => {
    if (e.key === 'Escape' && props.closeOnEsc) {
      close();
    }
  };

  // Get button class based on type
  const getButtonClass = (type) => {
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

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
</script>
