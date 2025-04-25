<template>
  <div class="bg-white border border-gray-200 rounded-md p-4 h-full flex">
    <!-- Formula Editing区域 -->
    <div class="w-1/2 border-r border-dashed border-blue-500 p-4 h-full">
      <h2 class="text-lg font-bold mb-4">Formula Editing</h2>

      <!-- 工具栏 -->
      <div
        class="flex items-center space-x-2 border border-dashed border-gray-200 p-2 rounded-md"
      >
        <button
          class="btn-icon disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!canUndo"
          @click="undo"
        >
          <img src="../assets/icons/withdraw.svg" />
        </button>
        <button
          class="btn-icon disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!canRedo"
          @click="redo"
        >
          <img src="../assets/icons/redo.svg" />
        </button>
        <select
          class="text-sm px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
        >
          <option>Font</option>
        </select>

        <!-- 字体大小 -->
        <div ref="sizePickerRef" class="relative">
          <button class="btn-icon" @mousedown.prevent="toggleSizePicker">
            <img src="../assets/icons/T-icon.svg" />
          </button>
          <!-- 尺寸面板 -->
          <div
            v-if="sizePickerVisible"
            class="absolute top-full left-0 mt-1 w-24 bg-white border border-gray-300 rounded-md shadow z-50"
          >
            <div
              v-for="size in latexSizes"
              :key="size"
              @mousedown.prevent="applySize(size)"
              class="cursor-pointer hover:bg-gray-100 px-2 py-1 text-sm text-center"
            >
              {{ size }}
            </div>
          </div>
        </div>

        <button class="btn-icon" @click="toggleBold">
          <img src="../assets/icons/B-icon.svg" />
        </button>
        <button class="btn-icon" @click="toggleItalic">
          <img src="../assets/icons/I-icon.svg" />
        </button>

        <div ref="colorPickerRef" class="relative">
          <!-- 使用mousedown.prevent保留文本选中状态 -->
          <button class="btn-icon" @mousedown.prevent="toggleColorPicker">
            <img src="../assets/icons/color.svg" />
          </button>

          <!-- 颜色选择面板 -->
          <div
            v-if="colorPickerVisible"
            class="absolute z-10 top-10 left-0 bg-white border border-gray-300 rounded-md p-2 shadow-md"
          >
            <div class="flex gap-2">
              <div
                v-for="color in colors"
                :key="color"
                :style="{ backgroundColor: color }"
                class="w-6 h-6 rounded-full cursor-pointer border"
                @click="applyColor(color)"
              ></div>
            </div>
          </div>
        </div>
        <button class="btn-icon" @click="toggleClear">
          <img src="../assets/icons/clear.svg" />
        </button>
      </div>

      <!-- 输入框 -->
      <textarea
        ref="textareaRef"
        v-model="latexInput"
        class="w-full border border-gray-200 p-2 rounded-md h-3/4"
        @input="onInputChange"
        placeholder="请输入LaTeX公式，如：\\frac{a}{b} = c"
      ></textarea>

      <!-- 功能按钮 -->
      <div class="flex justify-around items-center mt-4">
        <button class="bg-gray-200 text-sm px-4 py-2 rounded-md">
          Upload Image
        </button>
        <button class="bg-gray-200 text-sm px-4 py-2 rounded-md">
          Generate
        </button>
        <button class="bg-purple-500 text-white text-sm px-4 py-2 rounded-md">
          AI-Analysis
        </button>
      </div>
    </div>

    <!-- Formula Preview区域 -->
    <div class="flex-1 p-4 h-full">
      <h2 class="text-lg font-bold mb-4">Formula Preview</h2>
      <div
        id="formula-preview"
        class="w-full border border-gray-300 bg-white rounded-md h-5/6 p-4 flex items-center justify-center text-center"
        ref="previewRef"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, computed, onMounted, defineEmits, nextTick } from 'vue';
  import { useClickOutside } from '../utils/useClickOutside';
  import { HistoryManager } from '../utils/historyStack';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  const props = defineProps<{
    latexInput?: string;
  }>();

  const emit = defineEmits<{
    (e: 'update:latexInput', value: string): void;
  }>();

  const latexInput = ref(props.latexInput ?? '');
  const historyManager = new HistoryManager(latexInput.value);
  const previewRef = ref<HTMLElement | null>(null);
  const textareaRef = ref<HTMLTextAreaElement | null>(null);
  const sizePickerRef = ref<HTMLElement | null>(null);
  const colorPickerRef = ref<HTMLElement | null>(null);
  const colorPickerVisible = ref(false);
  const sizePickerVisible = ref(false);
  const colors = ['red', 'green', 'blue', 'orange', 'purple'];
  const latexSizes = [
    'tiny',
    'scriptsize',
    'footnotesize',
    'small',
    'normalsize',
    'large',
    'Large',
    'LARGE',
    'huge',
    'Huge',
  ];

  watch(
    () => props.latexInput,
    (newVal) => {
      if (newVal !== undefined) latexInput.value = newVal;
    }
  );

  watch(latexInput, (val) => {
    emit('update:latexInput', val);
  });

  const canUndo = computed(
    () => historyManager.getUndoStack().value.length > 1
  );
  const canRedo = computed(
    () => historyManager.getRedoStack().value.length > 0
  );

  const onInputChange = () => {
    // 只有内容发生变化时才保存
    historyManager.saveState(latexInput.value);
  };

  const undo = () => {
    const previousState = historyManager.undo();
    console.log('previousState', previousState);
    if (previousState !== null) {
      latexInput.value = previousState;
    }
  };

  const redo = () => {
    const nextState = historyManager.redo();
    console.log('nextState', nextState);
    if (nextState !== null) {
      latexInput.value = nextState;
    }
  };

  const renderFormula = () => {
    if (previewRef.value) {
      previewRef.value.innerHTML = ''; // 清空之前的内容
      if (latexInput.value.trim() === '') {
        return;
      }
      try {
        katex.render(latexInput.value, previewRef.value, {
          throwOnError: false,
          displayMode: true,
        });
      } catch (err) {
        console.error('KaTeX 渲染错误:', err);
        previewRef.value.innerHTML =
          '<span class="text-red-500">解析错误：无法渲染</span>';
      }
    }
  };

  const getSelectionRange = (): string => {
    const textarea = textareaRef.value;
    if (!textarea) return '';
    return textarea.value.substring(
      textarea.selectionStart,
      textarea.selectionEnd
    );
  };

  watch(latexInput, renderFormula);
  onMounted(renderFormula);

  // 根据输入光标位置获取插入位置
  function insertFormulaAtCursor(formula: string) {
    if (!textareaRef.value) return;

    const el = textareaRef.value;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const original = latexInput.value || '';

    latexInput.value = original.slice(0, start) + formula + original.slice(end);
    historyManager.saveState(latexInput.value);
    // historyManager.setCurrentState();
    // 设置新光标位置在插入公式后
    nextTick(() => {
      const pos = start + formula.length;
      el.setSelectionRange(pos, pos);
      el.focus();
    });
  }

  defineExpose({ insertFormulaAtCursor });

  const toggleColorPicker = () => {
    colorPickerVisible.value = !colorPickerVisible.value;
  };
  const toggleSizePicker = () => {
    sizePickerVisible.value = !sizePickerVisible.value;
  };

  useClickOutside(sizePickerRef, () => {
    sizePickerVisible.value = false;
  });
  useClickOutside(colorPickerRef, () => {
    colorPickerVisible.value = false;
  });

  // 假设 latexInput 是你的编辑区绑定的输入框
  const applyColor = (color: string) => {
    const selected = getSelectionRange(); // 获取当前选中的文本
    if (selected) {
      const wrapped = `\\textcolor{${color}}{${selected}}`;
      insertFormulaAtCursor(wrapped);
    } else {
      // 没选文本时默认插入占位模板
      insertFormulaAtCursor(`\\textcolor{${color}}{...}`);
    }

    colorPickerVisible.value = false;
  };

  const applySize = (size: string) => {
    const selected = getSelectionRange(); // 获取当前选中的文本
    if (selected) {
      const wrapped = `\\{${size}{${selected}}`;
      insertFormulaAtCursor(wrapped);
    } else {
      // 没选文本时默认插入占位模板
      insertFormulaAtCursor(`\\${size}{...}`);
    }
    sizePickerVisible.value = false;
  };

  const toggleBold = () => {
    const selected = getSelectionRange(); // 获取当前选中的文本
    if (selected) {
      const wrapped = `\\mathbf{${selected}}`;
      insertFormulaAtCursor(wrapped);
    } else {
      // 没选文本时默认插入占位模板
      insertFormulaAtCursor(`\\mathbf{...}`);
    }
  };
  const toggleItalic = () => {
    const selected = getSelectionRange(); // 获取当前选中的文本
    if (selected) {
      const wrapped = `\\mathit{${selected}}`;
      insertFormulaAtCursor(wrapped);
    } else {
      // 没选文本时默认插入占位模板
      insertFormulaAtCursor(`\\mathit{...}`);
    }
  };
  const toggleClear = () => {
    latexInput.value = '';
    historyManager.reset('');
    // historyManager.setCurrentState(latexInput.value);
    if (textareaRef.value) {
      textareaRef.value.focus();
    }
  };
</script>
