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
          v-model="selectedFont"
          @change="applyFontStyle"
        >
          <option value="mathit">MathIt</option>
          <option value="mathsf">MathSF</option>
          <option value="mathbb">MathBB</option>
          <!-- TODO:  修复样式显示不明显bug & 补充样式-->
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
          <!-- TODO: 补充取色器 -->
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
        spellcheck="false"
        class="w-full border border-gray-200 p-2 rounded-md h-3/4"
        @input="onInputChange"
        placeholder="请输入LaTeX公式，如：\\frac{a}{b} = c"
      ></textarea>

      <!-- 功能按钮 -->
      <div class="flex justify-around items-center mt-4">
        <button class="btn-style3 btn-status2" @click="showUploadModal = true">
          Upload Image
        </button>
        <!-- 上传图像模态框 -->
        <div
          v-if="showUploadModal"
          class="fixed inset-0 bg-white/10 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50"
        >
          <div
            class="bg-white rounded-lg p-6 w-96 shadow-lg relative"
            @dragover.prevent
            @drop.prevent="handleDrop"
          >
            <button
              class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              @click="showUploadModal = false"
            >
              ✕
            </button>
            <h3 class="text-lg font-semibold mb-4 text-center">上传图片</h3>

            <div
              class="border-2 border-dashed border-gray-300 rounded-md p-6 text-center text-gray-500 cursor-pointer hover:border-blue-400"
              @click="triggerFileInput"
            >
              拖拽文件到这里，或点击选择文件
              <input
                type="file"
                ref="fileInputRef"
                class="hidden"
                accept="image/*"
                @change="handleFileSelect"
              />
            </div>

            <p class="mt-4 text-xs text-gray-400 text-center">
              支持 PNG / JPG / JPEG
            </p>
          </div>
        </div>

        <button class="btn-style3 btn-status2">Generate</button>

        <!-- TODO: 补充对AI分析的接口调用 -->
        <button
          class="bg-purple-500 text-white text-sm px-4 py-2 rounded-md"
          @click="handleAIAnalysis"
        >
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

  const props = defineProps<{ latexInput?: string }>();
  const emit = defineEmits<{ (e: 'update:latexInput', value: string): void }>();

  const latexInput = ref(props.latexInput ?? '');
  const historyManager = new HistoryManager(latexInput.value);
  const previewRef = ref<HTMLElement | null>(null);
  const textareaRef = ref<HTMLTextAreaElement | null>(null);
  const sizePickerRef = ref<HTMLElement | null>(null);
  const colorPickerRef = ref<HTMLElement | null>(null);
  const colorPickerVisible = ref(false);
  const sizePickerVisible = ref(false);
  const selectedFont = ref('mathit');
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
    (val) => {
      if (val !== undefined) latexInput.value = val;
    }
  );
  watch(latexInput, (val) => emit('update:latexInput', val));

  const canUndo = computed(
    () => historyManager.getUndoStack().value.length > 1
  );
  const canRedo = computed(
    () => historyManager.getRedoStack().value.length > 0
  );

  const onInputChange = () => historyManager.saveState(latexInput.value);

  const undo = () => {
    const state = historyManager.undo();
    if (state !== null) latexInput.value = state;
  };

  const redo = () => {
    const state = historyManager.redo();
    if (state !== null) latexInput.value = state;
  };

  const renderFormula = () => {
    if (!previewRef.value) return;
    previewRef.value.innerHTML = '';
    if (!latexInput.value.trim()) return;

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
  };

  onMounted(renderFormula);
  watch(latexInput, renderFormula);

  function getSelectionRange(): string {
    const el = textareaRef.value;
    return el ? el.value.substring(el.selectionStart, el.selectionEnd) : '';
  }

  function insertFormulaAtCursor(formula: string) {
    const el = textareaRef.value;
    if (!el) return;

    const start = el.selectionStart;
    const end = el.selectionEnd;
    latexInput.value =
      latexInput.value.slice(0, start) + formula + latexInput.value.slice(end);
    historyManager.saveState(latexInput.value);

    nextTick(() => {
      const pos = start + formula.length;
      el.setSelectionRange(pos, pos);
      el.focus();
    });
  }

  function wrapSelectionWithCommand(command: string, value?: string) {
    const selected = getSelectionRange();
    const wrapped = selected
      ? `\\${command}${value ? `{${value}}` : ''}{${selected}}`
      : `\\${command}${value ? `{${value}}` : ''}{...}`;
    insertFormulaAtCursor(wrapped);
  }

  function toggleColorPicker() {
    colorPickerVisible.value = !colorPickerVisible.value;
  }
  function toggleSizePicker() {
    sizePickerVisible.value = !sizePickerVisible.value;
  }
  useClickOutside(sizePickerRef, () => (sizePickerVisible.value = false));
  useClickOutside(colorPickerRef, () => (colorPickerVisible.value = false));

  const applyFontStyle = () => wrapSelectionWithCommand(selectedFont.value);
  const applyColor = (color: string) => {
    wrapSelectionWithCommand('textcolor', color);
    colorPickerVisible.value = false;
  };
  const applySize = (size: string) => {
    wrapSelectionWithCommand(size);
    sizePickerVisible.value = false;
  };
  const toggleBold = () => wrapSelectionWithCommand('mathbf');
  const toggleItalic = () => wrapSelectionWithCommand('mathit');
  const toggleClear = () => {
    latexInput.value = '';
    historyManager.reset('');
    textareaRef.value?.focus();
  };

  defineExpose({ insertFormulaAtCursor });

  const showUploadModal = ref(false);
  const fileInputRef = ref<HTMLInputElement | null>(null);

  const triggerFileInput = () => {
    fileInputRef.value?.click();
  };

  const handleFileSelect = (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const file = files[0];
      processUpload(file);
    }
  };

  const handleDrop = (e: DragEvent) => {
    if (e.dataTransfer?.files.length) {
      const file = e.dataTransfer.files[0];
      processUpload(file);
    }
  };

  const processUpload = (file: File) => {
    console.log('上传文件:', file);
    // TODO: 在这里处理文件上传逻辑，如上传到服务器或显示预览等
    showUploadModal.value = false;
  };

  const handleAIAnalysis = () => {
    // TODO: 调用后端接口进行AI分析，传入必要的参数
    console.log('AI Analysis triggered');
  };
</script>
