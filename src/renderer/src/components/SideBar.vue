<template>
  <button
    ref="drawerButton"
    @click="toggleDrawer"
    class="fixed top-1/2 right-4 transform -translate-y-1/2 z-30 bg-blue-200 text-white rounded-md transition-all duration-300 ease-in-out"
    :class="{
      'translate-x-0 rotate-180 -right-8': isDrawerOpen,
      'translate-x-full rotate-0 right-8': !isDrawerOpen,
    }"
  >
    <svg
      class="w-8 h-8 transform transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  </button>

  <!-- TODO: 对历史话题的记录，可优化 -->
  <!-- TODO: 实现点击对应记录后，对对话的伪加载(后续后端加载) -->
  <div
    class="fixed top-0 left-0 h-full w-1/4 bg-white border-r shadow-lg transition-transform duration-300 z-10"
    :class="isHistoryDrawerOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="flex items-center justify-between p-4 border-b">
      <h3 class="text-lg font-bold">History Topics</h3>
    </div>
    <div class="p-4 overflow-y-auto h-[calc(100%-4rem)]">
      <ul class="space-y-2">
        <li
          v-for="(topic, index) in historyTopics"
          :key="index"
          class="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer"
          @click="selectHistoryTopic(topic.name)"
        >
          {{ topic.name }}
        </li>
      </ul>
    </div>
  </div>

  <div
    class="fixed top-0 right-0 h-full w-3/4 bg-white border-l shadow-lg transition-transform duration-300 z-20"
    :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div
      class="flex items-center justify-between p-2 pb-2 border-b border-gray-300"
    >
      <div class="flex items-center space-x-2">
        <button
          class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 active:bg-gray-300"
          @click="isHistoryDrawerOpen = !isHistoryDrawerOpen"
        >
          <img src="../assets/icons/showMore.svg" alt="History" />
        </button>
        <button
          class="text-sm px-3 py-1.5 items-center justify-center rounded-md bg-blue-200 text-white hover:bg-blue-400 transition-colors"
          @click="createNewChat"
        >
          + New
        </button>
      </div>
      <div class="relative">
        <h2
          v-if="!editingTitle"
          class="text-xl font-bold cursor-pointer"
          @click="startEditingTitle"
        >
          {{ currentTopic }}
        </h2>
        <input
          v-else
          v-model="editableTitle"
          @blur="finishEditingTitle"
          @keydown.enter="finishEditingTitle"
          class="text-xl font-bold border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref="titleInput"
        />
      </div>
      <div class="flex items-center space-x-2">
        <!-- 设置 -->
        <div class="relative">
          <button
            class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 active:bg-gray-300"
            @click="toggleSetting"
          >
            <img src="../assets/icons/setting.svg" />
          </button>
          <!-- 展开设置输入框 -->
          <div
            v-if="showSetting"
            class="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg p-4 z-30"
          >
            <label class="block text-sm font-medium mb-2">Enter API Key:</label>
            <input
              type="text"
              v-model="apiKey"
              placeholder=" Your API Key"
              class="w-full py-1.5 text-xs border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <div class="flex justify-center mt-1">
              <button class="btn-style3 btn-status2" @click="saveKey">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 聊天记录 -->
    <div class="flex-1 p-4 h-3/4 overflow-y-auto space-y-4">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="message.isUser ? 'text-right' : 'text-left'"
        class="p-2 h-auto"
      >
        <span
          class="bg-gray-200 p-2 rounded-md inline-block max-w-md h-auto break-words whitespace-pre-wrap text-left"
        >
          {{ message.text }}
        </span>
      </div>
    </div>

    <!-- 输入框和发送按钮 -->
    <div
      class="flex items-center p-4 bg-white fixed bottom-0 left-0 right-0 max-h-64"
    >
      <textarea
        v-model="inputText"
        placeholder="输入消息..."
        class="flex-1 p-2 border rounded-md mr-2 min-h-32 focus:outline-none shadow-md focus:ring-2 focus:ring-gray-500 w-full"
      ></textarea>
      <button @click="sendMessage" class="btn-style3 btn-status2">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, nextTick, onMounted, onUnmounted } from 'vue';
  import { isDrawerOpenEventBus } from '../eventBus';
  import { createNewChatDB } from '../utils/chatDB';

  interface Message {
    text: string;
    isUser: boolean;
  }

  const isDrawerOpen = ref(false);
  const messages = ref<Message[]>([]);
  const inputText = ref('');
  const currentTopic = ref('Chat Title');

  const isHistoryDrawerOpen = ref(false);
  const showSetting = ref(false);
  const apiKey = ref('');

  const editableTitle = ref('');
  const editingTitle = ref(false);
  const titleInput = ref<HTMLInputElement | null>(null);

  // TODO: 历史 Topic
  const historyTopics = ref([
    { name: 'Record1', id: 1 },
    { name: 'Record2', id: 2 },
    { name: 'Record3', id: 3 },
    // TODO: 可以根据实际接口拉取
  ]);

  // TODO: Topic - 历史对话数据
  const historyConversations = ref<Record<string, Message[]>>({
    Record1: [
      { text: '你好，这是第一条消息', isUser: true },
      { text: '你好，请问需要什么帮助？', isUser: false },
    ],
    Record2: [
      { text: '第二个话题的内容', isUser: true },
      { text: '这是相关的回答', isUser: false },
    ],
    Record3: [
      { text: '测试第三个话题', isUser: true },
      { text: '好的，我明白了', isUser: false },
    ],
  });

  function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value;
    if (!isDrawerOpen.value) isHistoryDrawerOpen.value = false;
  }
  function toggleSetting() {
    showSetting.value = !showSetting.value;
  }

  function selectHistoryTopic(topic: string) {
    console.log('选择了话题:', topic);
    isHistoryDrawerOpen.value = false;
    currentTopic.value = topic;
    // TODO: 加载对应的聊天内容逻辑在这里处理
    if (historyConversations.value[topic]) {
      messages.value = [...historyConversations.value[topic]];
    } else {
      messages.value = [{ text: '暂无历史记录', isUser: false }];
    }
  }

  const insertFormula = (formula: string) => {
    inputText.value += formula;
  };
  defineExpose({ isDrawerOpen, insertFormula });

  function sendMessage() {
    const text = inputText.value.trim();
    if (text === '') return;

    messages.value.push({ text, isUser: true });
    inputText.value = '';

    // TODO: 实际回复转写逻辑
    setTimeout(() => {
      messages.value.push({ text: `机器人回复：「${text}」`, isUser: false });
    }, 500);
  }

  function saveKey() {
    console.log('保存的API Key:', apiKey.value);
    showSetting.value = false;
    // TODO: 处理保存key逻辑
  }

  onMounted(() => {
    isDrawerOpenEventBus.on('update', (value: boolean) => {
      isDrawerOpen.value = value;
    });
    isDrawerOpenEventBus.on('expression', (expr: string) => {
      inputText.value += expr;
    });
  });
  onUnmounted(() => {
    isDrawerOpenEventBus.off('update');
    isDrawerOpenEventBus.off('expression');
  });

  function startEditingTitle() {
    editableTitle.value = currentTopic.value;
    editingTitle.value = true;

    nextTick(() => {
      titleInput.value?.focus();
    });
  }

  function finishEditingTitle() {
    currentTopic.value = editableTitle.value.trim() || currentTopic.value;
    editingTitle.value = false;
  }

  // TODO:创建新聊天
  const createNewChat = () => {
    // 调用工具函数创建初始数据
    const newChatData = createNewChatDB(''); // 空标题会自动转为默认值

    // 处理标题自动编号（如果需要）
    const baseTitle = 'New Chat';
    const existingTitles = historyTopics.value.map((chat) => chat.name);
    let uniqueTitle = baseTitle;
    let counter = 1;
    while (existingTitles.includes(uniqueTitle)) {
      uniqueTitle = `${baseTitle} ${counter++}`;
    }
    newChatData.title = uniqueTitle;
    currentTopic.value = uniqueTitle;
    historyTopics.value.unshift({
      name: uniqueTitle,
      id: 222,
    });
    messages.value = [];
  };
</script>
