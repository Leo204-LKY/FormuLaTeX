<template>
  <!-- 遮罩层 -->
  <div
    v-show="visible"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300"
    :class="{ 'opacity-0 pointer-events-none': !visible }"
    @click.self="closeOnOverlay && close()"
  >
    <!-- 提示框主体 -->
    <div
      class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden transform transition-all duration-300"
      :class="{
        'scale-95 opacity-0': !visible,
        'scale-100 opacity-100': visible,
      }"
    >
      <!-- 标题区域 -->
      <div
        class="px-6 py-4 border-b border-gray-200 justify-center flex items-center"
      >
        <h3 class="text-lg font-semibold text-center text-gray-800">
          {{ title }}
        </h3>
      </div>

      <!-- 内容区域 -->
      <div class="px-6 py-4">
        <slot>{{ message }}</slot>
      </div>

      <!-- 按钮区域 -->
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

  // 组件属性
  const props = defineProps({
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '提示',
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
      default: () => [{ text: '确定', callback: () => {} }],
    },
    closeOnEsc: {
      type: Boolean,
      default: true,
    },
    closeOnOverlay: {
      type: Boolean,
      default: true,
    },
  });

  // 组件事件
  const emits = defineEmits(['update:visible', 'closed']);

  // 处理按钮点击
  const handleButtonClick = (btn) => {
    if (typeof btn.callback === 'function') {
      btn.callback();
    }
    emits('update:visible', false);
  };

  // 关闭提示框
  const close = () => {
    emits('update:visible', false);
    emits('closed');
  };

  // ESC 键监听
  const handleKeydown = (e) => {
    if (e.key === 'Escape' && props.closeOnEsc) {
      close();
    }
  };

  // 获取按钮样式
  const getButtonClass = (type) => {
    switch (type) {
      case 'primary':
        return 'px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[100px]';
      case 'secondary':
        return 'px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center min-w-[100px]';
      case 'danger':
        return 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors';
      default:
        return 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors';
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
</script>
