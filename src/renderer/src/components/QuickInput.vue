<template>
  <div
    class="select-none bg-white border border-gray-200 rounded-md p-4 flex flex-col h-screen"
    style="height: 100%"
  >
    <AlterItem
      class="z-[9999]"
      v-model:visible="alertVisible_empty"
      :title="t('common.emptyInputTitle')"
      :message="t('common.emptyInputMessage')"
      :buttons="[{ text: t('common.ok'), type: 'primary' }]"
    />

    <!-- Header section with title and create button -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold">{{ t('QuickInput.quickInput') }}</h2>
      <button
        id="createFormula-button"
        class="text-sm px-3 py-1.5 items-center justify-center rounded-md bg-blue-200 text-white hover:bg-blue-400 transition-colors"
        @click="openFormulaModal()"
      >
        {{ t('common.new') }}
      </button>
    </div>

    <!-- Tags selector -->
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
        {{ t(`QuickInput.tags.${tag}`) }}
      </button>
    </div>

    <!-- Formula list for the selected tag -->
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
        @edit="
          ((isModalOpen_edit = true),
          (newFormulaName = expr.name!),
          (newFormulaContent = expr.latex_code))
        "
        @delete="deleteFormulaItem(expr.formula_id)"
      />
      <ContextMenu />
    </div>
  </div>

  <!-- Success alert after creating formula -->
  <AlterItem
    class="select-none"
    v-model:visible="alertVisible_create"
    :title="t('QuickInput.createSuccessTitle')"
    :message="t('QuickInput.createSuccessMessage')"
    :buttons="[{ text: t('common.ok'), type: 'primary' }]"
  />

  <!-- Create formula modal -->
  <div
    v-if="isModalOpen"
    class="select-none fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
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
        {{ t('QuickInput.createFormula') }}
      </h3>

      <!-- Form fields -->
      <div class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            {{ t('QuickInput.formulaName') }}
          </label>
          <input
            v-model="newFormulaName"
            spellcheck="false"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            @contextmenu="onContextMenu"
            :placeholder="t('QuickInput.enterFormulaName')"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            {{ t('QuickInput.formulaContent') }}
          </label>
          <textarea
            v-model="newFormulaContent"
            spellcheck="false"
            rows="5"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
            :placeholder="t('QuickInput.enterLatexFormula')"
          ></textarea>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="mt-7 flex justify-center space-x-4">
        <button
          class="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center min-w-[100px]"
          @click="
            ((isModalOpen = false),
            (newFormulaName = ''),
            (newFormulaContent = ''))
          "
        >
          {{ t('common.cancel') }}
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

  <!-- Edit formula modal -->
  <div
    v-if="isModalOpen_edit"
    class="select-none fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div
      class="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative transform transition-all duration-300 scale-100 opacity-100"
      :class="{ 'scale-95 opacity-0': !isModalOpen_edit }"
    >
      <button
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
        @click="isModalOpen_edit = false"
      >
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <h3 class="text-xl font-bold mb-5 text-center text-gray-800">
        {{ t('QuickInput.editFormula') }}
      </h3>

      <!-- Form fields -->
      <div class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            {{ t('QuickInput.formulaName') }}
          </label>
          <input
            v-model="newFormulaName"
            spellcheck="false"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            @contextmenu="onContextMenu"
            :placeholder="t('QuickInput.enterFormulaName')"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            {{ t('QuickInput.formulaContent') }}
          </label>
          <textarea
            v-model="newFormulaContent"
            spellcheck="false"
            rows="5"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
            :placeholder="t('QuickInput.enterLatexFormula')"
          ></textarea>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="select-none mt-7 flex justify-center space-x-4">
        <button
          class="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center min-w-[100px]"
          @click="
            ((isModalOpen_edit = false),
            (newFormulaName = ''),
            (newFormulaContent = ''))
          "
        >
          {{ t('common.cancel') }}
        </button>
        <button
          class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[100px]"
          @click="editFormula"
        >
          {{ t('QuickInput.saveFormula') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, reactive } from 'vue';
  import ExpressionItem from '../sub-components/ExpressionItem.vue';
  import ContextMenu from '../sub-components/ContextMenu.vue';
  import AlterItem from '../sub-components/AlterItem.vue';
  import { inputEventBus } from '../eventBus';
  import {
    createFormula,
    deleteFormula,
    updateFormula,
    getFormulas,
  } from '../utils/formulaDB';
  import type { formulas } from '@prisma/client';
  import { useI18n } from 'vue-i18n';
  import { onContextMenu } from '../utils/context-menu';

  // i18n
  const { t } = useI18n();

  // Component references
  const tagSelectorRef = ref<HTMLElement | null>(null);
  const expressionListRef = ref<HTMLElement | null>(null);

  // Reference map for ExpressionItem instances
  const expressionItemRefs = reactive<
    Record<string, InstanceType<typeof ExpressionItem>>
  >({});

  // UI state management
  const alertVisible_create = ref(false);
  const alertVisible_empty = ref(false);
  const isModalOpen = ref(false);
  const isModalOpen_edit = ref(false);
  const newFormulaName = ref('');
  const newFormulaContent = ref('');
  const latexInput = ref('');

  // Tag and formula management
  const tags = ['History', 'Common', 'Math', 'Physics'];
  const selectedTag = ref(tags[0]);
  const displayItems = ref<formulas[]>([]);

  /**
   * Fetch formula items from database by tag
   * @param tag - Tag to filter formulas
   */
  const fetchItemsByTag = async (tag: string) => {
    selectedTag.value = tag;
    displayItems.value = await fetchFromDB(tag);
  };

  /**
   * Database query wrapper to fetch formulas by tag
   * @param tag - Tag to filter formulas
   * @returns Array of formula items
   */
  const fetchFromDB = async (tag: string): Promise<formulas[]> => {
    return await getFormulas(tag);
  };

  /**
   * Handle expression selection and update input value
   * @param expr - Selected formula item
   */
  const handleSelectExpression = (expr: formulas) => {
    latexInput.value = expr.latex_code;
  };

  /**
   * Open formula creation modal with default name
   */
  const openFormulaModal = () => {
    isModalOpen.value = true;
    newFormulaName.value = new Date()
      .toISOString()
      .replace('T', ' ')
      .slice(0, 19);
  };

  /**
   * Save new formula to database and update display list
   */
  const saveFormula = async () => {
    if (!newFormulaName.value.trim() || !newFormulaContent.value.trim()) {
      alertVisible_empty.value = true;
      return;
    }

    try {
      // Create formula in database
      const formulaId = await createFormula(
        selectedTag.value,
        newFormulaName.value,
        newFormulaContent.value
      );

      // Add new formula to display list
      const newFormula: formulas = {
        formula_id: formulaId,
        name: newFormulaName.value,
        latex_code: newFormulaContent.value,
        description: '',
        recognized_by: '',
        confidence: 1,
        created_at: new Date(),
      };

      displayItems.value.unshift(newFormula);
    } catch (error) {
      console.error('Failed to save formula:', error);
    } finally {
      // Reset form and show success alert
      isModalOpen.value = false;
      newFormulaName.value = '';
      newFormulaContent.value = '';
      alertVisible_create.value = true;
    }
  };

  /**
   * Delete formula item by ID and update display list
   * @param formulaId - ID of the formula to delete
   */
  const deleteFormulaItem = async (formulaId: string) => {
    try {
      await deleteFormula(formulaId);
      displayItems.value = displayItems.value.filter(
        (item) => item.formula_id !== formulaId
      );
    } catch (error) {
      console.error('Failed to delete formula:', error);
    }
  };

  const editFormula = async () => {
    if (!newFormulaName.value.trim() || !newFormulaContent.value.trim()) {
      alertVisible_empty.value = true;
      return;
    }

    try {
      // Update formula in database
      await updateFormula(
        displayItems.value[0].formula_id,
        newFormulaName.value,
        newFormulaContent.value
      );

      // Update formula in display list
      const updatedFormula: formulas = {
        ...displayItems.value[0],
        name: newFormulaName.value,
        latex_code: newFormulaContent.value,
      };
      displayItems.value[0] = updatedFormula;
    } catch (error) {
      console.error('Failed to update formula:', error);
    } finally {
      // Reset form and close modal
      isModalOpen_edit.value = false;
      newFormulaName.value = '';
      newFormulaContent.value = '';
    }
  };

  // Lifecycle hooks
  onMounted(() => {
    // Fetch initial formulas
    fetchItemsByTag(tags[0]);

    // Subscribe to input events
    inputEventBus.on('input', (value) => {
      if (value.trim()) {
        newFormulaContent.value = value;
      }
    });
  });

  onUnmounted(() => {
    // Unsubscribe from input events
    inputEventBus.off('input');
  });
</script>
