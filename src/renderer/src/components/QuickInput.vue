<template>
  <div
    class="bg-white border border-gray-200 rounded-md p-4 flex flex-col h-screen"
    style="height: 100%"
  >
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold">{{ 'Quick Input' }}</h2>
      <button
        class="text-sm px-3 py-1.5 items-center justify-center rounded-md bg-blue-200 text-white hover:bg-blue-400 transition-colors"
        @click="openFormulaModal()"
      >
        + New
      </button>
    </div>

    <!-- Tags选择栏 -->
    <div
      id="tag-selector"
      ref="tagSelectorRef"
      class="flex justify-around items-center mb-4"
    >
      <button
        v-for="tag in tags"
        :key="tag"
        :id="`tag-${tag}`"
        class="btn-style1 btn-status1"
        :class="{ 'outline-none ring-2 ring-blue-400': selectedTag === tag }"
        @click="fetchItemsByTag(tag)"
      >
        {{ tag }}
      </button>
    </div>

    <!-- 展示对应Tags下的公式 -->
    <div
      id="expression-list"
      ref="expressionListRef"
      class="flex-1 overflow-y-auto scroll-hidden pr-3"
    >
      <ExpressionItem
        v-for="expr in displayItems"
        :key="expr.formula_id"
        :id="`expr-${expr.formula_id}`"
        :ref="
          (el) => {
            if (el)
              expressionItemRefs[expr.formula_id] = el as InstanceType<
                typeof ExpressionItem
              >;
          }
        "
        :expression="expr"
        @select-expression="handleSelectExpression"
      />
    </div>
  </div>

  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div
      class="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative transform transition-all duration-300 scale-100 opacity-100"
      :class="{ 'scale-95 opacity-0': !isModalOpen }"
    >
      <button
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
        @click="isModalOpen = false"
      >
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
      <h3 class="text-xl font-bold mb-5 text-center text-gray-800">
        Create New Formula
      </h3>

      <div class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            Formula Name
          </label>
          <input
            v-model="newFormulaName"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Enter formula name"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            Formula Content
          </label>
          <textarea
            v-model="newFormulaContent"
            rows="5"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
            placeholder="Enter LaTeX formula"
          ></textarea>
        </div>
      </div>

      <div class="mt-7 flex justify-center space-x-4">
        <button
          class="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center min-w-[100px]"
          @click="isModalOpen = false"
        >
          Cancel
        </button>
        <button
          class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[100px]"
          @click="saveFormula"
        >
          Save Formula
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ExpressionItem from '../sub-components/ExpressionItem.vue';
  import { ref, onMounted, onUnmounted, reactive } from 'vue';
  import { inputEventBus } from '../eventBus';
  import { createFormula, getFormulas } from '../utils/formulaDB';
  import type { formulas } from '../../../server/database/generated';

  type ExpressionItemInstance = InstanceType<typeof ExpressionItem>;
  const tagSelectorRef = ref(null);
  const expressionListRef = ref(null);
  const expressionItemRefs: Record<number | string, ExpressionItemInstance> =
    reactive({});

  const isModalOpen = ref(false);
  const newFormulaName = ref('');
  const newFormulaContent = ref('');
  const tags = ['History', 'Common', 'Math', 'Physics']; // 举例
  const selectedTag = ref(tags[0]);
  const displayItems = ref<formulas[]>([]); // 或你具体的数据类型

  const fetchItemsByTag = async (tag: string) => {
    selectedTag.value = tag;
    const result = await fetchFromDB(tag);
    displayItems.value = result;
  };

  // TODO: 替换为实际的数据库查询逻辑
  const fetchFromDB = async (tag: string) => {
    const formulasData: formulas[] = await getFormulas(tag);
    return formulasData;
  };

  onMounted(() => {
    fetchItemsByTag(tags[0]); // 默认加载第一个 tag 对应内容
  });

  const latexInput = ref('');
  const handleSelectExpression = (expr: formulas) => {
    latexInput.value = expr.latex_code;
  };

  // 打开模态框并复制当前输入内容
  const openFormulaModal = () => {
    isModalOpen.value = true;
    newFormulaName.value = new Date()
      .toISOString()
      .replace('T', ' ')
      .slice(0, 19);
  };

  onMounted(() => {
    inputEventBus.on('input', (value) => {
      if (value.trim() !== '') {
        newFormulaContent.value = value;
      }
    });
  });

  onUnmounted(() => {
    inputEventBus.off('input');
  });

  // TODO：保存公式
  const saveFormula = async () => {
    if (!newFormulaName.value.trim() || !newFormulaContent.value.trim()) {
      return;
    }
    console.log('Saving formula:', {
      name: newFormulaName.value,
      content: newFormulaContent.value,
      created_at: new Date().toISOString(),
    });
    try {
      const f_id = await createFormula(
        selectedTag.value,
        newFormulaName.value,
        newFormulaContent.value
      );
      const newFormula: formulas = {
        formula_id: f_id,
        name: newFormulaName.value,
        latex_code: newFormulaContent.value,
        description: '',
        recognized_by: '',
        confidence: 1,
        created_at: new Date(),
      };
      displayItems.value.unshift(newFormula);
    } catch (error) {
      console.error('Request error', error);
    }

    isModalOpen.value = false;
    newFormulaName.value = '';
    newFormulaContent.value = '';
  };
</script>
