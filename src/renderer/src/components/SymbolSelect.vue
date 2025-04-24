<template>
  <div class="bg-white border border-gray-200 rounded-md p-4 h-full">
    <!-- 选择栏 -->
    <div class="flex justify-start items-center mb-4 space-x-6">
      <button
        v-for="(category, index) in symbolCategories"
        :key="index"
        :class="[
          'bg-gray-100 text-base px-4 py-1 rounded-md',
          selectedCategory === category ? 'bg-blue-200' : '',
        ]"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <!-- 符号显示区域 -->
    <div class="bg-blue-50 text-center p-4 border border-blue-200 rounded-md">
      <div
        v-for="(symbol, symbolIndex) in getCurrentSymbols"
        :key="symbolIndex"
      >
        {{ symbol }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  // 定义每个标签对应的符号集合
  const symbolData: { [key: string]: string[] } = {
    Common: ['+', '-', '*', '/'],
    Operations: ['∫', '∑', '∏'],
    Relations: ['<', '>', '='],
    Arrows: ['→', '←', '↑'],
    Greek: ['α', 'β', 'γ'],
    Matric: ['[', ']', '{', '}'],
    Mark: ['•', '◦', '▫'],
    Equations: ['x + y = z', 'a² + b² = c²'],
    'Large...': ['∀', '∃', '∅'],
  };

  // 符号类别数组
  const symbolCategories = Object.keys(symbolData);
  // 响应式变量存储当前选中的类别
  const selectedCategory = ref(symbolCategories[0]);

  // 计算属性获取当前选中类别对应的符号
  const getCurrentSymbols = computed(() => symbolData[selectedCategory.value]);

  // 选择类别的方法
  const selectCategory = (category: string) => {
    selectedCategory.value = category;
  };
</script>
