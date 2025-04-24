<template>
  <div class="bg-white border border-gray-200 rounded-md p-4 h-full flex">
    <!-- Formula Editing区域 -->
    <div class="w-1/2 border-r border-dashed border-blue-500 p-4 h-full">
      <h2 class="text-lg font-bold mb-4">Formula Editing</h2>

      <!-- 工具栏 -->
      <div
        class="flex justify-start items-center mb-4 border border-dashed border-gray-200 space-x-4"
      >
        <button><img src="../assets/icons/withdraw.svg" /></button>
        <button><img src="../assets/icons/redo.svg" /></button>
        <select class="bg-gray-200 text-sm px-2 py-1 rounded-md">
          <option>Font</option>
        </select>
        <button><img src="../assets/icons/T-icon.svg" /></button>
        <button><img src="../assets/icons/B-icon.svg" /></button>
        <button><img src="../assets/icons/I-icon.svg" /></button>
        <button><img src="../assets/icons/color.svg" /></button>
        <button><img src="../assets/icons/clear.svg" /></button>
      </div>

      <!-- 输入框 -->
      <textarea
        v-model="latexInput"
        class="w-full border border-gray-200 p-2 rounded-md h-3/4"
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
  import { ref, watch, onMounted } from 'vue';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  const latexInput = ref('\\frac{a}{b} = c');
  const previewRef = ref<HTMLElement | null>(null);

  const renderFormula = () => {
    if (previewRef.value) {
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

  watch(latexInput, renderFormula);
  onMounted(renderFormula);
</script>
