<template>
  <div
    class="bg-white border border-gray-200 rounded-md p-4 flex flex-col h-screen"
    style="height: 100%"
  >
    <h2 class="text-xl font-bold mb-4">Quick Input</h2>

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
        v-for="(expr, index) in displayItems"
        :key="index"
        :id="`expr-${index}`"
        :ref="
          (el) => {
            if (el) {
              expressionItemRefs[index] = el as InstanceType<
                typeof ExpressionItem
              >;
            }
          }
        "
        :expression="expr"
        @select-expression="handleSelectExpression"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ExpressionItem from './ExpressionItem.vue';
  import { ref, onMounted, reactive } from 'vue';

  type ExpressionItemInstance = InstanceType<typeof ExpressionItem>;
  const tagSelectorRef = ref(null);
  const expressionListRef = ref(null);
  const expressionItemRefs: Record<number, ExpressionItemInstance> = reactive(
    {}
  );

  const tags = ['History', 'Common', 'Math', 'Physics']; // 举例
  const selectedTag = ref(tags[0]);
  const displayItems = ref<string[]>([]); // 或你具体的数据类型

  const fetchItemsByTag = async (tag: string) => {
    selectedTag.value = tag;

    const result = await fetchFromDB(tag);
    displayItems.value = result;
  };

  // TODO: 替换为实际的数据库查询逻辑
  const fetchFromDB = async (tag: string) => {
    const mockData: Record<string, string[]> = {
      History: [
        `c = \\sqrt{a^2 + b^2}`,
        `c = \\sqrt{a^2 + b^2}`,
        `c = \\sqrt{a^2 + b^2}`,
        `c = \\sqrt{a^2 + b^2}`,
      ],
      Common: [
        `a = \\sqrt{a^2 + b^2}`,
        `a = \\sqrt{a^2 + b^2}`,
        `a = \\sqrt{a^2 + b^2}`,
        `a = \\sqrt{a^2 + b^2}`,
      ],
      Math: [
        `b = \\sqrt{a^2 + b^2}`,
        `b = \\sqrt{a^2 + b^2}`,
        `b = \\sqrt{a^2 + b^2}`,
        `b = \\sqrt{a^2 + b^2}`,
      ],
      Physics: [
        `c = \\sqrt{a^2 + b^2}`,
        `c = \\sqrt{a^2 + b^2}`,
        `c = \\sqrt{a^2 + b^2}`,
        `c = \\sqrt{a^2 + b^2}`,
      ],
    };
    return mockData[tag] || [];
  };

  onMounted(() => {
    fetchItemsByTag(tags[0]); // 默认加载第一个 tag 对应内容
  });

  const latexInput = ref('');
  const handleSelectExpression = (expr: string) => {
    latexInput.value = expr;
  };
</script>
