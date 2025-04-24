<template>
  <div
    class="bg-white border border-gray-200 rounded-md p-4 flex flex-col h-full"
    style="height: 100%"
  >
    <h2 class="text-xl font-bold mb-4">Quick Input</h2>

    <!-- Tags选择栏 -->
    <div class="flex justify-around items-center mb-4">
      <button
        v-for="tag in tags"
        :key="tag"
        class="btn-standard"
        @click="fetchItemsByTag(tag)"
      >
        {{ tag }}
      </button>
    </div>
    <!-- <div class="flex justify-around items-center mb-4">
      <button class="btn-standard">History</button>
      <button class="btn-standard">Common</button>
      <button class="btn-standard">Math</button>
      <button class="btn-standard">Physics</button>
    </div> -->

    <!-- 展示公式 -->
    <div class="flex-1 overflow-y-auto scroll-hidden pr-3">
      <QuickInputItem
        v-for="(expr, index) in displayItems"
        :key="index"
        :expression="expr"
        @select-expression="handleSelectExpression"
      />
    </div>
    <!-- <div class="flex-1 overflow-y-auto scroll-hidden pr-3">
      <QuickInputItem
        v-for="(_, index) in displayItems"
        :key="index"
        :expression="`c = \\sqrt{a^2 + b^2}`"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
  import QuickInputItem from './ExpressionItem.vue';
  import { ref, onMounted } from 'vue';
  const tags = ['History', 'Common', 'Operations', 'Relations']; // 举例
  const selectedTag = ref(tags[0]);
  const displayItems = ref<string[]>([]); // 或你具体的数据类型

  const fetchItemsByTag = async (tag: string) => {
    selectedTag.value = tag;

    const result = await fetchFromDB(tag);
    displayItems.value = result;
  };

  // 示例函数
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
      Operations: [
        `b = \\sqrt{a^2 + b^2}`,
        `b = \\sqrt{a^2 + b^2}`,
        `b = \\sqrt{a^2 + b^2}`,
        `b = \\sqrt{a^2 + b^2}`,
      ],
      Relations: [
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
