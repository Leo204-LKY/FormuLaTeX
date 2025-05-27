<template>
  <div class="bg-white border border-gray-200 rounded-md p-4 h-full flex">
    <AlterItem
      class="z-[9999]"
      v-model:visible="alertVisible_empty"
      title="Empty Input"
      message="Can't be empty! Please check and fill the input."
      :buttons="[{ text: 'OK', type: 'primary' }]"
    />
    <!-- Formula Editing Area -->
    <div class="w-1/2 border-r border-dashed border-blue-500 p-4 h-full">
      <h2 class="text-lg font-bold mb-4">Formula Editing</h2>

      <!-- Toolbar -->
      <div
        class="flex items-center space-x-2 border border-dashed border-gray-200 p-2 rounded-md"
      >
        <!-- Undo Button -->
        <button
          class="btn-icon disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!canUndo"
          @click="undo"
        >
          <img src="../assets/icons/withdraw.svg" />
        </button>
        <!-- Redo Button -->
        <button
          class="btn-icon disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!canRedo"
          @click="redo"
        >
          <img src="../assets/icons/redo.svg" />
        </button>
        <!-- Font Style Select -->
        <select
          class="text-sm px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
          v-model="selectedFont"
          @change="applyFontStyle"
        >
          <option value="mathit">MathIt</option>
          <option value="mathsf">MathSF</option>
          <option value="mathbb">MathBB</option>
          <!-- TODO: Fix unclear style display bug & add more styles -->
        </select>

        <!-- Font Size Picker -->
        <div ref="sizePickerRef" class="relative">
          <button class="btn-icon" @mousedown.prevent="toggleSizePicker">
            <img src="../assets/icons/T-icon.svg" />
          </button>
          <!-- Font Size Panel -->
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

        <!-- Bold Button -->
        <button class="btn-icon" @click="toggleBold">
          <img src="../assets/icons/B-icon.svg" />
        </button>
        <!-- Italic Button -->
        <button class="btn-icon" @click="toggleItalic">
          <img src="../assets/icons/I-icon.svg" />
        </button>
        <!-- Color Picker -->
        <div ref="colorPickerRef" class="relative">
          <button class="btn-icon" @mousedown.prevent="toggleColorPicker">
            <img src="../assets/icons/color.svg" />
          </button>
          <!-- Color Picker Panel -->
          <!-- TODO: Add color picker component -->
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
        <!-- Clear Button -->
        <button class="btn-icon" @click="toggleClear">
          <img src="../assets/icons/clear.svg" />
        </button>

        <!-- API Key Save Alert -->
        <AlterItem
          v-model:visible="alertVisible1"
          title="Formula API Key"
          message="Formul API Key has been saved successfully!"
          :buttons="[{ text: 'OK', type: 'primary' }]"
        />

        <!-- Settings Section -->
        <div class="flex items-center space-x-2 ml-auto">
          <div class="relative">
            <button
              class="btn-icon w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 active:bg-gray-300"
              @click="toggleSetting"
            >
              <img src="../assets/icons/setting.svg" />
            </button>
            <!-- Settings Input Panel -->
            <div
              v-if="showSetting"
              class="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg p-4 z-30"
            >
              <label class="block text-sm font-medium mb-2">
                Enter API config:
              </label>
              <input
                type="text"
                spellcheck="false"
                v-model="appId"
                placeholder="Your APP id"
                class="w-full py-1.5 text-xs border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="text"
                spellcheck="false"
                v-model="appSecret"
                placeholder="Your APP secret"
                class="w-full py-1.5 text-xs border rounded focus:outline-none focus:ring-2 focus:ring-gray-500 mt-2"
              />
              <div class="flex justify-center mt-1">
                <button class="btn-style3 btn-status2" @click="saveConfig">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Latex Input Textarea -->
      <textarea
        ref="textareaRef"
        v-model="latexInput"
        spellcheck="false"
        class="w-full border border-gray-200 p-2 rounded-md h-3/4"
        @input="onInputChange"
        placeholder="Please enter latex code, like: \frac{a}{b} = c"
      ></textarea>

      <!-- Recognition Success Alert -->
      <AlterItem
        v-model:visible="alertVisible2"
        title="Formula Recognization"
        message="Formul recognized successfully!"
        :buttons="[{ text: 'OK', type: 'primary' }]"
      />

      <!-- API Key Error Alert -->
      <AlterItem
        v-model:visible="alertVisible3"
        title="Formula Key Error"
        message="Can't find your SimpleTex API key, please set it in settings."
        :buttons="[{ text: 'OK', type: 'primary' }]"
      />

      <!-- Image Upload Section -->
      <div class="flex justify-around items-center mt-4">
        <button class="btn-style3 btn-status2" @click="showUploadModal = true">
          Upload Image
        </button>

        <!-- Image Upload Modal -->
        <div
          v-if="showUploadModal"
          class="fixed inset-0 bg-white/10 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50"
        >
          <div
            class="bg-white rounded-lg p-6 w-96 shadow-lg relative"
            @dragover.prevent="handleDragOver"
            @drop.prevent="handleDropUpload"
          >
            <button
              class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              @click="showUploadModal = false"
            >
              ✕
            </button>
            <h3 class="text-lg font-semibold mb-4 text-center">Upload Image</h3>

            <div
              class="border-2 border-dashed border-gray-300 rounded-md p-6 text-center text-gray-500 cursor-pointer hover:border-blue-400 relative"
              @click="triggerFileInput"
            >
              <!-- Image Preview -->
              <div v-if="previewImage" class="mb-4 relative">
                <div class="relative mx-auto max-w-full">
                  <img
                    :src="previewImage"
                    alt="Preview"
                    class="max-h-32 w-full object-contain"
                  />
                  <button
                    @click="handleDeletePreview"
                    class="absolute top-1 right-1 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm cursor-pointer shadow-md hover:bg-red-600 transition-all duration-200"
                    :style="{ transform: 'translate(50%, -50%)' }"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <!-- File Upload Prompt -->
              <div v-else>
                Drag the file to here, or click to select
                <input
                  type="file"
                  ref="fileInputRef"
                  class="hidden"
                  accept="image/*"
                  @change="handleFileSelect"
                />
              </div>
            </div>

            <p class="mt-4 text-xs text-gray-400 text-center">
              Supported formats: PNG / JPG / JPEG
            </p>
          </div>
        </div>

        <!-- AI Analysis Button -->
        <button
          class="bg-purple-500 text-white text-sm px-4 py-2 rounded-md"
          @click="handleAIAnalysis"
        >
          AI-Analysis
        </button>
      </div>
    </div>

    <!-- Formula Preview Area -->
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
  import { isDrawerOpenEventBus, inputEventBus } from '../eventBus';
  import AlterItem from '../sub-components/AlterItem.vue';
  import { Buffer } from 'buffer';
  import type { SimpleTexConfig } from '../../../server';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // Component Props and Emits
  const props = defineProps<{ latexInput?: string }>();
  const emit = defineEmits<{ (e: 'update:latexInput', value: string): void }>();

  // Reactive State
  const latexInput = ref(props.latexInput ?? '');
  const historyManager = new HistoryManager(latexInput.value);
  const previewRef = ref<HTMLElement | null>(null);
  const textareaRef = ref<HTMLTextAreaElement | null>(null);
  const sizePickerRef = ref<HTMLElement | null>(null);
  const colorPickerRef = ref<HTMLElement | null>(null);

  // UI State
  const alertVisible1 = ref(false); // API Key saved alert
  const alertVisible2 = ref(false); // OCR success alert
  const alertVisible3 = ref(false); // API Key missing alert
  const alertVisible_empty = ref(false); // Empty input alert
  const colorPickerVisible = ref(false);
  const sizePickerVisible = ref(false);
  const showSetting = ref(false);

  // Configuration State
  const appId = ref('');
  const appSecret = ref('');
  const selectedFont = ref('mathit');

  // Constant Data
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

  // Watchers
  watch(
    () => props.latexInput,
    (val) => {
      if (val !== undefined) latexInput.value = val;
    }
  );

  watch(latexInput, (val) => emit('update:latexInput', val));

  // Computed Properties
  const canUndo = computed(
    () => historyManager.getUndoStack().value.length > 1
  );
  const canRedo = computed(
    () => historyManager.getRedoStack().value.length > 0
  );

  // Input Handling
  const onInputChange = () => {
    historyManager.saveState(latexInput.value);
  };

  const undo = () => {
    const state = historyManager.undo();
    if (state !== null) latexInput.value = state;
  };

  const redo = () => {
    const state = historyManager.redo();
    if (state !== null) latexInput.value = state;
  };

  // Formula Rendering
  const renderFormula = () => {
    if (!previewRef.value) return;
    previewRef.value.innerHTML = '';

    if (!latexInput.value.trim()) return;

    try {
      katex.render(latexInput.value, previewRef.value, {
        throwOnError: false,
        displayMode: true,
      });
      inputEventBus.emit('input', latexInput.value);
    } catch (err) {
      console.error('KaTeX render error:', err);
      previewRef.value.innerHTML =
        '<span class="text-red-500">Error: Formula rendering failed!</span>';
    }
  };

  // Lifecycle Hooks
  onMounted(renderFormula);
  watch(latexInput, renderFormula);

  // Text Selection Utilities
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

    // Restore cursor position after update
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

  // UI Toggle Handlers
  function toggleColorPicker() {
    colorPickerVisible.value = !colorPickerVisible.value;
  }

  function toggleSizePicker() {
    sizePickerVisible.value = !sizePickerVisible.value;
  }

  // Close pickers when clicking outside
  useClickOutside(sizePickerRef, () => (sizePickerVisible.value = false));
  useClickOutside(colorPickerRef, () => (colorPickerVisible.value = false));

  // Formatting Actions
  const applyFontStyle = () => wrapSelectionWithCommand(selectedFont.value);
  const applyColor = (color: string) => {
    wrapSelectionWithCommand('textcolor', color);
    colorPickerVisible.value = false;
  };
  const applySize = (size: string) => {
    wrapSelectionWithCommand(size);
    sizePickerVisible.value = false;
  };

  // Formatting Toggles
  const toggleBold = () => wrapSelectionWithCommand('mathbf');
  const toggleItalic = () => wrapSelectionWithCommand('mathit');
  const toggleClear = () => {
    latexInput.value = '';
    historyManager.reset('');
    textareaRef.value?.focus();
  };

  // Expose public methods
  defineExpose({ insertFormulaAtCursor });

  // Image Upload Management
  const showUploadModal = ref(false);
  const fileInputRef = ref<HTMLInputElement | null>(null);
  const previewImage = ref<string | null>(null);
  const dragStartPosition = ref<{ x: number; y: number } | null>(null);

  // Settings Management
  function toggleSetting() {
    showSetting.value = !showSetting.value;
    appId.value = '';
    appSecret.value = '';
  }

  // AI Analysis Handler
  const handleAIAnalysis = () => {
    console.log('AI Analysis triggered');
    isDrawerOpenEventBus.emit('update', true); // Open Sidebar
    isDrawerOpenEventBus.emit('expression', latexInput.value); // Pass formula
  };

  // Drag and Drop Handlers
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.dataTransfer!.effectAllowed = 'copy';
    e.dataTransfer!.dropEffect = 'link';
    dragStartPosition.value = { x: e.clientX, y: e.clientY };
  };

  const handleDropUpload = (e: DragEvent) => {
    e.preventDefault();
    showUploadModal.value = true;
    const file = e.dataTransfer!.files[0];
    if (file) handleFileSelectWithPosition(file);
  };

  // File Selection Handlers
  const handleFileSelect = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      previewImage.value = reader.result as string;
      uploadImage(file);
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelectWithPosition = (file: File) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      previewImage.value = reader.result as string;
      uploadImage(file);
    };
    reader.readAsDataURL(file);
  };

  // API Integration - Upload Image and OCR
  const uploadImage = async (file: File) => {
    // Check API credentials
    const currentKey = (await window.servicesApi.getJsonConfig(
      'simpletex'
    )) as SimpleTexConfig;

    if (!currentKey || !currentKey.appId || !currentKey.appSecret) {
      alertVisible3.value = true;
      showSetting.value = true;
      return;
    }

    try {
      // Read file as ArrayBuffer
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      await new Promise((resolve, reject) => {
        reader.onload = resolve;
        reader.onerror = reject;
      });

      const arrayBuffer = reader.result as ArrayBuffer;
      const buffer = Buffer.from(arrayBuffer);

      // Send to OCR API
      const ocrResult = await window.simpleTexApi.convert(buffer);
      const latexCode = ocrResult.latex;

      console.log('OCR Result:', latexCode);
      latexInput.value += latexCode;

      // Cleanup
      showUploadModal.value = false;
      previewImage.value = null;
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      alertVisible2.value = true; // Show success notification
    }
  };

  // UI Helper Methods
  const triggerFileInput = () => {
    fileInputRef.value?.click();
  };

  const handleDeletePreview = () => {
    previewImage.value = null;
  };

  // Save API Configuration
  async function saveConfig() {
    if (!appId.value || !appSecret.value) {
      alertVisible_empty.value = true; // Show error alert
      return;
    }
    await window.servicesApi.saveJsonConfig('simpletex', {
      appId: appId.value,
      appSecret: appSecret.value,
    } as SimpleTexConfig);

    // Reset UI
    appId.value = '';
    appSecret.value = '';
    showSetting.value = false;
    alertVisible1.value = true; // Show success alert
  }
</script>
