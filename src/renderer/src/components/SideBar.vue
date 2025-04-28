<template>
  <button
    @click="toggleDrawer"
    class="fixed top-1/2 right-4 transform -translate-y-1/2 z-20 bg-blue-200 text-white rounded-md transition-all duration-300 ease-in-out"
    :class="{
      'translate-x-0 rotate-180 -right-8': isDrawerOpen,
      'translate-x-full rotate-0 right-8': !isDrawerOpen,
    }"
  >
    <!-- <img src="../assets/icons/Sidebar-icon.svg" /> -->
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

  <div
    class="fixed top-0 right-0 h-full w-3/4 bg-white border-l shadow-lg transition-transform duration-300 z-10"
    :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <h2 class="text-xl font-bold p-4 border-b border-gray-300">Chat Title</h2>
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
  <!-- TODO: 对历史话题的记录 -->
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  interface Message {
    text: string;
    isUser: boolean;
  }

  const isDrawerOpen = ref(false);
  const messages = ref<Message[]>([]);
  const inputText = ref(''); // 当前输入的内容

  function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value;
  }

  // 发送消息
  function sendMessage() {
    const text = inputText.value.trim();
    if (text === '') return;

    // 添加用户消息
    messages.value.push({ text, isUser: true });
    inputText.value = '';

    // 模拟机器人回复
    setTimeout(() => {
      messages.value.push({ text: `机器人回复：「${text}」`, isUser: false });
    }, 500);
  }
</script>
