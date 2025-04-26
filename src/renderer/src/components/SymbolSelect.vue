<template>
  <div class="bg-white border border-gray-200 rounded-md p-4 h-full">
    <!-- 选择栏 -->
    <div class="flex justify-start items-center mb-4 space-x-6">
      <button
        v-for="(category, index) in symbolCategories"
        :key="index"
        :class="['btn-style2 btn-status2']"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <!-- 符号显示区域 -->
    <!-- TODO: 完善显示符号的布局，以及补全符号 -->
    <div
      class="bg-blue-50 text-center p-4 border border-blue-200 rounded-md h-3/4"
    >
      <div class="flex justify-between">
        <div
          v-for="(symbolGroup, groupIndex) in getCurrentSymbolGroups"
          :key="groupIndex"
          :class="currentDisplayRule"
        >
          <div
            v-for="(symbol, symbolIndex) in symbolGroup"
            :key="symbolIndex"
            class="w-8 h-8 bg-white flex items-center justify-center border border-gray-200 rounded-md p-2 cursor-pointer hover:bg-gray-100"
            @click="handleSymbolClick(symbol)"
          >
            {{ symbol }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { selectSymbolEventBus } from '../eventBus';
  // 定义每个标签对应的符号集合
  const symbolData: { [key: string]: string[][] } = {
    Common: [['+', '-', '*', '/']],
    Operations: [
      ['+', '−', '∘', '%', '-', '⋅', '×', '⊙', '±', '*', '÷', '⊕'],
      ['∩', '∀', '∧', '⊤', '∪', '∅', '¬', '∃', '∨', '⊥'],
      ['π', '′', '△', '∞', 'ℂ', '▽', '∂', 'ℝ'],
      ['∠', '⊥', '∵', '⊄', '…', '√', '‖', '∶'],
      ['‰', '‱'],
    ],
    Relations: [
      ['=', '≡', '≠', '∼', '≃', '≈', '≅', '≍', '≇', '≉'],
      ['>', '<', '⊀', '⊁', '≫', '≪', '≥', '≤', '≰', '≱', '∝'],
      ['∈', '∃', '∉', '⊆', '⊈', '⊉', '⊂', '⊃', '⊄', '⊇', '⊅', '⊈'],
      ['ℕ', 'ℚ', '∅', 'ℤ', 'ℂ', 'ℙ', 'ℝ'],
      ['◃', '⊲', '▹', '∧', '⊴', '∨'],
    ],
    Arrows: [
      [
        '←',
        '→',
        '↔',
        '↕',
        '↖',
        '↗',
        '↘',
        '↙',
        '⇐',
        '⇒',
        '⇔',
        '⇑',
        '⇓',
        '⇕',
      ],
      [
        '⟵',
        '⟶',
        '⟷',
        '⟸',
        '⟹',
        '⟺',
        '↞',
        '↠',
        '↢',
        '↣',
        '⇋',
        '⇌',
        '⇊',
        '⇈',
        '↤',
      ],

      ['↼', '↽', '⇀', '⇁', '↩', '↪', '↫', '↬', '↭', '↝'],
      ['⌞', '⌟', '⌜', '⌝', '↶', '↷', '↺', '↻', '↰', '↱'],
    ],
    Greek: [
      [
        'α',
        'γ',
        'ε',
        'η',
        'ι',
        'λ',
        'ν',
        'ο',
        'ρ',
        'τ',
        'φ',
        'ψ',
        'ϵ',
        'ϖ',
        'ς',
      ],
      [
        'β',
        'δ',
        'ζ',
        'θ',
        'κ',
        'μ',
        'ξ',
        'π',
        'σ',
        'υ',
        'χ',
        'ω',
        'ϑ',
        'ϱ',
        'ϕ',
      ],
      ['Γ', 'Θ', 'Π', 'Φ', 'Ω', 'Δ', 'Λ', 'Σ', 'Ψ', 'Ξ'],
    ],
    Matric: [['[', ']', '{', '}']],
    Mark: [['•', '◦', '▫']],
    Equations: [['x + y = z', 'a² + b² = c²']],
    'Large...': [['∀', '∃', '∅']],
  };

  const displayRules: Record<string, string> = {
    default: 'grid grid-cols-4 gap-2 place-content-start',
    Greek: 'flex flex-wrap gap-2',
    Arrows: 'grid grid-cols-5 gap-2 place-content-start',
  };
  const currentDisplayRule = computed(() => {
    return displayRules[selectedCategory.value] || displayRules.default;
  });

  // 符号类别数组
  const symbolCategories = Object.keys(symbolData);
  // 响应式变量存储当前选中的类别
  const selectedCategory = ref(symbolCategories[0]);

  // 计算属性获取当前选中类别对应的符号
  const getCurrentSymbolGroups = computed(
    () => symbolData[selectedCategory.value]
  );

  // 选择类别的方法
  const selectCategory = (category: string) => {
    selectedCategory.value = category;
  };

  function handleSymbolClick(symbol: string) {
    selectSymbolEventBus.emit('selectSymbol', symbol);
  }
</script>
