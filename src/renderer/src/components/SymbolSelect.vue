<template>
  <div
    class="select-none bg-white border border-gray-200 rounded-md p-4 h-full"
  >
    <!-- Category Selection Bar -->
    <div class="flex justify-start items-center mb-4 space-x-6">
      <button
        v-for="(category, index) in symbolCategories"
        :key="index"
        class="btn-style2 btn-status2"
        :class="{
          'outline-none ring-2 ring-gray-400': selectedCategory === category,
        }"
        @click="selectCategory(category)"
      >
        {{ t(`SymbolSelect.types.${category}`) }}
      </button>
    </div>

    <!-- Symbol Display Area -->
    <div
      class="bg-blue-50 text-center p-4 border border-blue-200 rounded-md h-3/4"
    >
      <div class="flex justify-between">
        <div
          v-for="(symbolGroup, groupIndex) in getCurrentSymbolGroups"
          :key="groupIndex"
          :class="outsideDisplayRule"
        >
          <div
            v-for="(symbol, symbolIndex) in symbolGroup"
            :key="symbolIndex"
            :class="insideDisplayRule"
            @click="handleSymbolClick(symbol)"
          >
            <!-- Symbol rendering component -->
            <SymbolsItem :latex="symbol" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { selectSymbolEventBus } from '../eventBus';
  import SymbolsItem from '../sub-components/SymbolsItem.vue';
  import { useI18n } from 'vue-i18n';

  // i18n
  const { t } = useI18n();

  // Symbol data grouped by category
  const symbolData: { [key: string]: string[][] } = {
    Common: [['+', '-', '*', '/']],
    Operations: [
      [
        '+',
        '-',
        '\\circ',
        '\\%',
        '-',
        '\\cdot',
        '\\times',
        '\\odot',
        '\\pm',
        '*',
        '\\div',
        '\\oplus',
      ],
      [
        '\\cap',
        '\\forall',
        '\\wedge',
        '\\top',
        '\\cup',
        '\\emptyset',
        '\\neg',
        '\\exists',
        '\\vee',
        '\\bot',
      ],
      [
        '\\pi',
        "'",
        '\\triangle',
        '\\infty',
        '\\mathbb{C}',
        '\\bigtriangledown',
        '\\partial',
        '\\mathbb{R}',
      ],
      [
        '\\angle',
        '\\perp',
        '\\because',
        '\\therefore',
        '\\ldots',
        '\\sqrt{}',
        '\\parallel',
        ':',
      ],
      ['‰', '‱'],
    ],
    Relations: [
      [
        '=',
        '\\equiv',
        '\\neq',
        '\\sim',
        '\\simeq',
        '\\approx',
        '\\cong',
        '\\asymp',
        '\\ncong',
        '\\nsim',
      ],
      [
        '>',
        '<',
        '\\nprec',
        '\\nsucc',
        '\\gg',
        '\\ll',
        '\\geq',
        '\\leq',
        '\\nleq',
        '\\ngeq',
        '\\propto',
      ],
      [
        '\\in',
        '\\exists',
        '\\notin',
        '\\subseteq',
        '\\nsubseteq',
        '\\nsupseteq',
        '\\subset',
        '\\supset',
        '\\supseteq',
      ],
      [
        '\\mathbb{N}',
        '\\mathbb{Q}',
        '\\emptyset',
        '\\mathbb{Z}',
        '\\mathbb{C}',
        '\\mathbb{P}',
        '\\mathbb{R}',
      ],
      [
        '\\triangleleft',
        '\\triangleright',
        '\\trianglelefteq',
        '\\trianglerighteq',
        '\\wedge',
        '\\vee',
      ],
    ],
    Arrows: [
      [
        '\\leftarrow',
        '\\rightarrow',
        '\\leftrightarrow',
        '\\updownarrow',
        '\\nwarrow',
        '\\nearrow',
        '\\searrow',
        '\\swarrow',
        '\\Leftarrow',
        '\\Rightarrow',
        '\\Leftrightarrow',
        '\\Uparrow',
        '\\Downarrow',
        '\\Updownarrow',
      ],
      [
        '\\longleftarrow',
        '\\longrightarrow',
        '\\longleftrightarrow',
        '\\Longleftarrow',
        '\\Longrightarrow',
        '\\Longleftrightarrow',
        '\\twoheadleftarrow',
        '\\twoheadrightarrow',
        '\\leftarrowtail',
        '\\rightarrowtail',
        '\\leftrightharpoons',
        '\\rightleftharpoons',
        '\\downdownarrows',
        '\\upuparrows',
      ],
      [
        '\\leftharpoonup',
        '\\leftharpoondown',
        '\\rightharpoonup',
        '\\rightharpoondown',
        '\\hookleftarrow',
        '\\hookrightarrow',
        '\\looparrowleft',
        '\\looparrowright',
        '\\leftrightsquigarrow',
        '\\rightsquigarrow',
      ],
      [
        '\\llcorner',
        '\\lrcorner',
        '\\ulcorner',
        '\\urcorner',
        '\\curvearrowleft',
        '\\curvearrowright',
        '\\circlearrowleft',
        '\\circlearrowright',
        '\\Lsh',
        '\\Rsh',
      ],
    ],
    Greek: [
      [
        '\\alpha',
        '\\gamma',
        '\\epsilon',
        '\\eta',
        '\\iota',
        '\\lambda',
        '\\nu',
        'o',
        '\\rho',
        '\\tau',
        '\\phi',
        '\\psi',
        '\\varepsilon',
        '\\varpi',
        '\\varsigma',
      ],
      [
        '\\beta',
        '\\delta',
        '\\zeta',
        '\\theta',
        '\\kappa',
        '\\mu',
        '\\xi',
        '\\pi',
        '\\sigma',
        '\\upsilon',
        '\\chi',
        '\\omega',
        '\\vartheta',
        '\\varrho',
        '\\varphi',
      ],
      [
        '\\Gamma',
        '\\Theta',
        '\\Pi',
        '\\Phi',
        '\\Omega',
        '\\Delta',
        '\\Lambda',
        '\\Sigma',
        '\\Psi',
        '\\Xi',
      ],
    ],
    Matric: [['[', ']', '{', '}']],
    Mark: [['•', '◦', '▫']],
    Equations: [['x + y = z', 'a² + b² = c²']],
    Accents: [
      [
        '\\ddot{x}',
        '\\check{x}',
        '\\underline{x}',
        '\\overrightharpoon{x}',
        '\\overleftarrow{x}',
        '\\underbrace{x}',
        '\\acute{x}',
        '\\dot{x}',
        '\\hat{x}',
        '\\overline{\\overline{x}}',
        '\\overleftharpoon{x}',
        '\\overrightarrow{x}',
      ],
      [
        '\\grave{x}',
        '\\tilde{x}',
        '\\breve{x}',
        '\\overline{x}',
        '\\overleftrightarrow{x}',
        '\\overbrace{x}',
      ],
      [
        '\\xrightarrow[y]{x}',
        '\\xrightarrow[]{x}',
        '\\xleftarrow[]{x}',
        '\\xrightarrow[y]{}',
        '\\xleftarrow[y]{x}',
        '\\xleftarrow[y]{}',
      ],
      [
        '\\xleftrightarrow[y]{x}',
        '\\xleftrightarrow[y]{}',
        '\\xLeftarrow[]{x}',
        '\\xleftrightarrow[]{x}',
        '\\xLeftarrow[y]{x}',
        '\\xLeftarrow[y]{}',
      ],
      [
        '\\xRightarrow[y]{x}',
        '\\xRightarrow[y]{}',
        '\\xLeftrightarrow[]{x}',
        '\\xRightarrow[]{x}',
        '\\xLeftrightarrow[y]{x}',
        '\\xLeftrightarrow[y]{}',
      ],
    ],
  };

  // CSS display rules for symbol groups
  const displayRules1: Record<string, string> = {
    default: 'grid grid-cols-4 gap-2 place-content-start',
    Greek: 'flex flex-wrap gap-2',
    Arrows: 'grid grid-cols-5 gap-2 place-content-start',
  };

  // CSS display rules for individual symbols
  const displayRules2: Record<string, string> = {
    default:
      'w-8 h-8 bg-white flex items-center justify-center border border-gray-200 rounded-md p-2 cursor-pointer hover:bg-gray-100',
    Equations:
      'h-8 bg-white flex items-center justify-center border border-gray-200 rounded-md p-2 cursor-pointer hover:bg-gray-100',
  };

  // Computed properties for dynamic CSS classes
  const outsideDisplayRule = computed(() => {
    return displayRules1[selectedCategory.value] || displayRules1.default;
  });

  const insideDisplayRule = computed(() => {
    return displayRules2[selectedCategory.value] || displayRules2.default;
  });

  // Available symbol categories
  const symbolCategories = Object.keys(symbolData);

  // Reactive state for selected category
  const selectedCategory = ref(symbolCategories[0]);

  // Computed property to get symbols for selected category
  const getCurrentSymbolGroups = computed(
    () => symbolData[selectedCategory.value]
  );

  // Category selection handler
  const selectCategory = (category: string) => {
    selectedCategory.value = category;
  };

  // Symbol click handler - emits selection event
  function handleSymbolClick(symbol: string) {
    selectSymbolEventBus.emit('selectSymbol', symbol);
  }
</script>
