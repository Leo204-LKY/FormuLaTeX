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
          v-for="topic in historyTopics"
          :key="topic.id"
          class="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer"
          @click="selectHistoryTopic(topic)"
        >
          {{ topic.title }}
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
          {{ currentTopic.title }}
        </h2>
        <input
          v-else
          v-model="editableTitle"
          spellcheck="false"
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
              spellcheck="false"
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
    <div ref="chatContainer" class="flex-1 p-4 h-3/4 overflow-y-auto space-y-4">
      <div
        v-for="(message, index) in messagesData"
        :key="index"
        :class="message.role == 'user' ? 'text-right' : 'text-left'"
        class="p-2 h-auto"
      >
        <span
          v-if="message.role === 'user'"
          class="bg-gray-200 p-2 rounded-md inline-block max-w-md h-auto break-words whitespace-pre-wrap text-left"
        >
          {{ message.content }}
          <!-- <MarkdownRenderer :content="message.content" /> -->
        </span>
        <div
          v-else
          class="bg-gray-200 p-2 rounded-md inline-block max-w-[90%] h-auto break-words whitespace-pre-wrap text-left"
          v-html="renderMarkdown(message.content)"
        ></div>
      </div>
    </div>

    <!-- 输入框和发送按钮 -->
    <div
      class="flex items-center p-4 bg-white fixed bottom-0 left-0 right-0 max-h-64"
    >
      <textarea
        v-model="inputText"
        placeholder="Ask me anything about formula..."
        class="flex-1 p-2 border rounded-md mr-2 min-h-32 focus:outline-none shadow-md focus:ring-2 focus:ring-gray-500 w-full"
      ></textarea>
      <button @click="sendMessage" class="btn-style3 btn-status2">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue';
  import { isDrawerOpenEventBus } from '../eventBus';
  import {
    createConservation,
    getConservations,
    getMessages,
    createMessage,
  } from '../utils/chatDB';
  import DOMPurify from 'dompurify';
  // import { marked } from 'marked';
  import type { messages } from '@prisma/client';
  import { turnChatMessage } from '../utils/turnChatMessage';
  // import MarkdownRenderer from '../sub-components/MarkdownRenderer.vue';
  import MarkdownIt from 'markdown-it';
  import katex from 'katex';
  // import markdownItKatex from 'markdown-it-katex';
  // import mathjax3 from 'markdown-it-mathjax3';
  import 'katex/dist/katex.min.css';

  interface Topics {
    title: string;
    id: string;
  }

  const renderMarkdown = (content: string) => {
    content = content
      .replace(/\\\[\s*\n+/g, '\\[')
      .replace(/\n+\s*\\\]/g, '\\]');
    content = content
      // 处理行内公式 $...$ 和 \(...\)
      .replace(
        /(?:\\?[$])([^$]*)(?:\\?[$])|\\\((.*?)\\\)/g,
        (match, p1, p2) => {
          const tex = p1 || p2;
          try {
            return katex.renderToString(tex, {
              throwOnError: false,
              displayMode: false,
            });
          } catch (e) {
            console.error('KaTeX render error:', e);
            return match;
          }
        }
      )
      // 处理块级公式 $$...$$ 和 \[...\]
      .replace(
        /(?:\\?[$][$])([^$]*)(?:\\?[$][$])|\\\[(.*?)\\\]|^\s*\[(.*?)\]\s*$/gm,
        (match, p1, p2, p3) => {
          const tex = p1 || p2 || p3;
          try {
            return katex.renderToString(tex.trim(), {
              throwOnError: false,
              displayMode: true,
            });
          } catch (e) {
            console.error('KaTeX render error:', e);
            return match;
          }
        }
      );

    const md = new MarkdownIt({
      html: true,
      breaks: false,
      linkify: true,
    });

    const html = md.render(content);
    return DOMPurify.sanitize(html, {
      ADD_TAGS: [
        'math',
        'mrow',
        'annotation',
        'semantics',
        'mi',
        'mo',
        'mn',
        'msqrt',
        'mfrac',
      ],
      ADD_ATTR: ['class', 'style', 'aria-hidden'],
    });
  };

  const chatContainer = ref<HTMLDivElement | null>(null);
  const shouldAutoScroll = ref(true); // 是否自动滚动
  // const mathRegex = /(?:\$.*?\$)|(?:`{3}math\n?.*?\n?`{3})/g;

  const isDrawerOpen = ref(false);
  const messagesData = ref<messages[]>([]);
  const inputText = ref('');
  const currentTopic = ref<Topics>({
    title: 'Chat Title',
    id: 'default',
  });

  const isHistoryDrawerOpen = ref(false);
  const showSetting = ref(false);
  const apiKey = ref('');

  const editableTitle = ref('');
  const editingTitle = ref(false);
  const titleInput = ref<HTMLInputElement | null>(null);

  // TODO: 历史 Topic
  const historyTopics = ref<Topics[]>([]);

  onMounted(async () => {
    const conservations = await getConservations();
    historyTopics.value = conservations.map((conv) => ({
      title: conv.title as string,
      id: conv.conversation_id,
    }));
  });

  onMounted(() => {
    if (chatContainer.value) {
      chatContainer.value.addEventListener('scroll', (e) => {
        const { scrollTop, scrollHeight, clientHeight } =
          e.target as HTMLDivElement;
        // 当滚动距离小于总高度 - 容器高度 - 100 时，认为用户手动滚动
        shouldAutoScroll.value = scrollTop + clientHeight >= scrollHeight - 100;
      });
    }
  });

  const scrollToBottom = () => {
    chatContainer.value?.scrollIntoView({
      behavior: 'smooth', // 平滑滚动
      block: 'end',
    });
  };

  // 监听消息变化，触发滚动
  watch(
    messagesData,
    () => {
      if (shouldAutoScroll.value && chatContainer.value) {
        // 延迟执行确保DOM更新完成
        nextTick(() => {
          chatContainer.value!.scrollTop = chatContainer.value!.scrollHeight;
        });
      }
    },
    { deep: true }
  );

  function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value;
    if (!isDrawerOpen.value) isHistoryDrawerOpen.value = false;
  }
  function toggleSetting() {
    showSetting.value = !showSetting.value;
    apiKey.value = '';
  }

  async function selectHistoryTopic(topic: Topics) {
    console.log('Choose Topic:', topic.title);
    isHistoryDrawerOpen.value = false;
    currentTopic.value = { ...topic };
    messagesData.value = await getChatMessage(topic.id);
  }

  const insertFormula = (formula: string) => {
    inputText.value += formula;
  };
  defineExpose({ isDrawerOpen, insertFormula });

  async function sendMessage() {
    const text = inputText.value.trim();
    if (text === '') return;
    const m_id1 = await createMessage(currentTopic.value.id, 'user', text);
    // TODO: 实际回复转写逻辑
    messagesData.value.push({
      conversation_id: currentTopic.value.id,
      message_id: m_id1,
      content: text,
      role: 'user',
      created_at: new Date(),
    });
    inputText.value = '';

    try {
      const answer = await new Promise<string>((resolve, reject) => {
        let partialAnswer = '';
        window.chatClientApi.onDeepseekChunk((chunk) => {
          partialAnswer += chunk;

          const botMessage = messagesData.value.find(
            (msg) => msg.role === 'assistant' && msg.message_id === 'temp-ai'
          );
          if (botMessage) {
            botMessage.content = partialAnswer;
          } else {
            messagesData.value.push({
              conversation_id: currentTopic.value.id,
              message_id: 'temp-ai', // 临时 ID
              content: partialAnswer,
              role: 'assistant',
              created_at: new Date(),
            });
          }
          scrollToBottom();
        });

        window.chatClientApi.onDeepseekEnd(() => {
          resolve(partialAnswer);
        });

        window.chatClientApi.onDeepseekError((error) => {
          reject(error);
        });

        window.chatClientApi.deepseekAsk(
          text,
          turnChatMessage(messagesData.value)
        );
      });

      const m_id2 = await createMessage(
        currentTopic.value.id,
        'assistant',
        answer
      );
      messagesData.value = messagesData.value.map((msg) =>
        msg.message_id === 'temp-ai'
          ? { ...msg, message_id: m_id2, content: answer }
          : msg
      );
    } catch (error) {
      console.error('AI response error:', error);
      messagesData.value.push({
        conversation_id: currentTopic.value.id,
        message_id: crypto.randomUUID(),
        content: '**Error!!!**',
        role: 'assistant',
        created_at: new Date(),
      });
    }
    shouldAutoScroll.value = true;
    scrollToBottom();
  }

  function saveKey() {
    console.log('保存的API Key:', apiKey.value);
    showSetting.value = false;
    // TODO: 处理保存key逻辑
    window.chatClientApi.deepseekUpdateApiKey(apiKey.value);
    apiKey.value = '';
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
    editableTitle.value = currentTopic.value.title;
    editingTitle.value = true;

    nextTick(() => {
      titleInput.value?.focus();
    });
  }

  function finishEditingTitle() {
    currentTopic.value.title =
      editableTitle.value.trim() || currentTopic.value.title;
    editingTitle.value = false;
  }

  // TODO:创建新聊天
  const createNewChat = async () => {
    const baseTitle = 'New Chat';
    const existingTitles = historyTopics.value.map((chat) => chat.title);
    let uniqueTitle = baseTitle;
    let counter = 1;
    while (existingTitles.includes(uniqueTitle)) {
      uniqueTitle = `${baseTitle} ${counter++}`;
    }
    const newData = await createConservation(uniqueTitle); // 空标题会自动转为默认值

    currentTopic.value.title = uniqueTitle;
    historyTopics.value.unshift({
      title: uniqueTitle,
      id: newData.id,
    });
    messagesData.value = [];
  };

  const getChatMessage = async (c_id: string) => {
    const topic_message = await getMessages(c_id);
    return topic_message;
  };
</script>
