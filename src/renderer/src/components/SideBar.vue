<template>
  <!-- Sidebar Toggle Button -->
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

  <!-- History Sidebar -->
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

  <!-- Main Chat Sidebar -->
  <div
    class="fixed top-0 right-0 h-full w-3/4 bg-white border-l shadow-lg transition-transform duration-300 z-20"
    :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- Top Toolbar -->
    <div
      class="flex items-center justify-between p-2 pb-2 border-b border-gray-300"
    >
      <!-- Sidebar Toggle & New Chat Button -->
      <div class="flex items-center space-x-2">
        <button
          class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 active:bg-gray-300"
          @click="isHistoryDrawerOpen = !isHistoryDrawerOpen"
        >
          <img src="../assets/icons/showMore.svg" alt="History" />
        </button>
        <button
          class="text-sm px-3 py-1.5 items-center justify-center rounded-md bg-blue-200 text-white hover:bg-blue-400 transition-colors"
          @click="createNewChat('New Chat')"
        >
          + New
        </button>
      </div>

      <!-- Chat Title Editing Area -->
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

      <!-- Alert Components -->
      <AlterItem
        v-model:visible="alertVisible_initial"
        title="Chat API Key"
        message="Chat API Key has been saved successfully!"
        :buttons="[{ text: 'OK', type: 'primary' }]"
      />

      <AlterItem
        v-model:visible="alertVisible_existed"
        title="Chat API Key"
        message="Chat API Key has existed. Update it?"
        :buttons="[
          { text: 'Cancel', type: 'secondary' },
          {
            text: 'OK',
            type: 'primary',
            callback: () => {
              updateKey();
              showSetting = false;
              alertVisible_existed = false;
            },
          },
        ]"
      />

      <AlterItem
        v-model:visible="alertVisible_error"
        title="Chat Key Error"
        message="Can't find your Chat API key, please set it in settings."
        :buttons="[{ text: 'OK', type: 'primary' }]"
      />

      <!-- Settings Button & Panel -->
      <div class="flex items-center space-x-2">
        <div class="relative">
          <button
            class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 active:bg-gray-300"
            @click="toggleSetting"
          >
            <img src="../assets/icons/setting.svg" />
          </button>

          <!-- Settings Panel -->
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

    <!-- Chat Content Area -->
    <div ref="chatContainer" class="flex-1 p-4 h-3/4 overflow-y-auto space-y-4">
      <div
        v-for="(message, index) in messagesData"
        :key="index"
        :class="message.role == 'user' ? 'text-right' : 'text-left'"
        class="p-2 h-auto"
      >
        <!-- User Messages -->
        <span
          v-if="message.role === 'user'"
          class="bg-gray-200 p-2 rounded-md inline-block max-w-md h-auto break-words whitespace-pre-wrap text-left"
        >
          {{ message.content }}
          <!-- <MarkdownRenderer :content="message.content" /> -->
        </span>

        <!-- AI Response Messages (with Markdown rendering) -->
        <div
          v-else
          class="bg-gray-200 p-2 rounded-md inline-block max-w-[90%] h-auto break-words whitespace-pre-wrap text-left"
          v-html="renderMarkdown(message.content)"
        ></div>
      </div>
    </div>

    <!-- Bottom Input Area -->
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
  import type { messages } from '@prisma/client';
  import { turnChatMessage } from '../utils/turnChatMessage';
  import AlterItem from '../sub-components/AlterItem.vue';
  import MarkdownIt from 'markdown-it';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';
  import type { DeepSeekConfig } from '../../../server';

  // Interface for chat topics
  interface Topics {
    title: string;
    id: string;
  }

  // Markdown rendering with KaTeX support
  const renderMarkdown = (content: string): string => {
    // Preprocess content to handle line breaks in LaTeX blocks
    content = content
      .replace(/\\\[\s*\n+/g, '\\[')
      .replace(/\n+\s*\\\]/g, '\\]');

    // Inline formula handling ($...$ and \(...\))
    content = content.replace(
      /(?:\\?[$])([^$]*)(?:\\?[$])|\\\((.*?)\\\)/g,
      (match, inline, inlineBlock) => {
        const tex = inline || inlineBlock;
        try {
          return katex.renderToString(tex, {
            throwOnError: false,
            displayMode: false,
          });
        } catch (e) {
          console.error('KaTeX inline render error:', e);
          return match;
        }
      }
    );

    // Block formula handling ($$...$$, \[...\], and [text])
    content = content.replace(
      /(?:\\?[$][$])([^$]*)(?:\\?[$][$])|\\\[(.*?)\\\]|^\s*\[(.*?)\]\s*$/gm,
      (match, block, blockBracket, blockSquare) => {
        const tex = block || blockBracket || blockSquare;
        try {
          return katex.renderToString(tex.trim(), {
            throwOnError: false,
            displayMode: true,
          });
        } catch (e) {
          console.error('KaTeX block render error:', e);
          return match;
        }
      }
    );

    // Initialize Markdown parser
    const md = new MarkdownIt({
      html: true,
      breaks: false,
      linkify: true,
    });

    // Render and sanitize HTML output
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

  // Chat container reference and scroll management
  const chatContainer = ref<HTMLDivElement | null>(null);
  const shouldAutoScroll = ref(true); // Auto-scroll state

  // Alert states
  const alertVisible_initial = ref(false); // API key saved
  const alertVisible_existed = ref(false); // API key exists
  const alertVisible_error = ref(false); // API key missing

  // Sidebar states
  const isDrawerOpen = ref(false); // Main sidebar open state
  const messagesData = ref<messages[]>([]); // Chat messages
  const inputText = ref(''); // Input text
  const currentTopic = ref<Topics>({ title: 'Chat Title', id: 'default' }); // Current chat topic

  // History sidebar states
  const isHistoryDrawerOpen = ref(false); // History sidebar open state
  const showSetting = ref(false); // Settings panel state
  const apiKey = ref(''); // API key input

  // Title editing states
  const editableTitle = ref(''); // Editable title value
  const editingTitle = ref(false); // Title edit mode
  const titleInput = ref<HTMLInputElement | null>(null); // Title input reference

  // History topics storage
  const historyTopics = ref<Topics[]>([]); // List of saved conversations

  // Lifecycle hook: Fetch initial conversations
  onMounted(async () => {
    const conservations = await getConservations();
    historyTopics.value = conservations.map((conv) => ({
      title: conv.title as string,
      id: conv.conversation_id,
    }));
  });

  // Lifecycle hook: Scroll event listener
  onMounted(() => {
    if (chatContainer.value) {
      chatContainer.value.addEventListener('scroll', (e) => {
        const { scrollTop, scrollHeight, clientHeight } =
          e.target as HTMLDivElement;
        shouldAutoScroll.value = scrollTop + clientHeight >= scrollHeight - 100; // Detect manual scroll
      });
    }
  });

  // Scroll to bottom function
  const scrollToBottom = () => {
    chatContainer.value?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  // Watcher: Auto-scroll on message updates
  watch(
    messagesData,
    () => {
      if (shouldAutoScroll.value && chatContainer.value) {
        nextTick(() => {
          // Ensure DOM update
          chatContainer.value!.scrollTop = chatContainer.value!.scrollHeight;
        });
      }
    },
    { deep: true }
  );

  // Sidebar toggle handler
  function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value;
    if (!isDrawerOpen.value) isHistoryDrawerOpen.value = false; // Close history sidebar when main closes
  }

  // Settings toggle handler
  function toggleSetting() {
    showSetting.value = !showSetting.value;
    apiKey.value = ''; // Clear input on toggle
  }

  // Select history topic handler
  async function selectHistoryTopic(topic: Topics) {
    console.log('Selected Topic:', topic.title);
    isHistoryDrawerOpen.value = false;
    currentTopic.value = { ...topic };
    messagesData.value = await getChatMessage(topic.id); // Load messages for selected topic
  }

  // Formula insertion method
  const insertFormula = (formula: string) => {
    inputText.value += formula; // Append formula to input
  };

  // Exposed methods
  defineExpose({ isDrawerOpen, insertFormula });

  // Message sending handler
  async function sendMessage() {
    const currentKey = (await window.servicesApi.getJsonConfig(
      'deepseek'
    )) as DeepSeekConfig;

    // Validate API key
    if (!currentKey || !currentKey.apiKey) {
      alertVisible_error.value = true;
      showSetting.value = true;
      return;
    }

    // Create new conversation if default
    if (currentTopic.value.id === 'default') {
      await createNewChat(new Date().toISOString());
    }

    const text = inputText.value.trim();
    if (!text) return; // Prevent empty messages

    // Save user message
    const mId1 = await createMessage(currentTopic.value.id, 'user', text);
    messagesData.value.push({
      conversation_id: currentTopic.value.id,
      message_id: mId1,
      content: text,
      role: 'user',
      created_at: new Date(),
    });
    inputText.value = ''; // Clear input

    try {
      // Stream AI response
      const answer = await new Promise<string>((resolve, reject) => {
        let partialAnswer = '';

        // Handle response chunks
        window.chatClientApi.onDeepseekChunk((chunk) => {
          partialAnswer += chunk;

          // Update temporary AI message
          const botMessage = messagesData.value.find(
            (msg) => msg.role === 'assistant' && msg.message_id === 'temp-ai'
          );
          if (botMessage) {
            botMessage.content = partialAnswer;
          } else {
            messagesData.value.push({
              conversation_id: currentTopic.value.id,
              message_id: 'temp-ai', // Temporary ID for streaming
              content: partialAnswer,
              role: 'assistant',
              created_at: new Date(),
            });
          }
          scrollToBottom(); // Scroll during streaming
        });

        // Handle response completion
        window.chatClientApi.onDeepseekEnd(() => resolve(partialAnswer));
        // Handle errors
        window.chatClientApi.onDeepseekError((error) => reject(error));

        // Send request to AI API
        window.chatClientApi.deepseekAsk(
          text,
          turnChatMessage(messagesData.value) // Format chat history
        );
      });

      // Save final AI message
      const mId2 = await createMessage(
        currentTopic.value.id,
        'assistant',
        answer
      );
      messagesData.value = messagesData.value.map((msg) =>
        msg.message_id === 'temp-ai'
          ? { ...msg, message_id: mId2, content: answer }
          : msg
      );
    } catch (error) {
      console.error('AI response error:', error);
      // Handle error message
      messagesData.value.push({
        conversation_id: currentTopic.value.id,
        message_id: crypto.randomUUID(),
        content: '**Error!!!**',
        role: 'assistant',
        created_at: new Date(),
      });
    }
    shouldAutoScroll.value = true; // Reset auto-scroll
    scrollToBottom(); // Scroll to end after response
  }

  // Save API key handler
  async function saveKey() {
    const currentKey = (await window.servicesApi.getJsonConfig(
      'deepseek'
    )) as DeepSeekConfig;
    if (Object.keys(currentKey).length === 0) {
      // Save new key
      console.log('Saving new API key');
      showSetting.value = false;
      updateKey();
      alertVisible_initial.value = true;
      apiKey.value = '';
    } else {
      // Key exists, prompt update
      console.log('API key already exists');
      alertVisible_existed.value = true;
    }
  }

  // Update API key handler
  async function updateKey() {
    await window.chatClientApi.deepseekUpdateApiKey(apiKey.value); // Update client
    await window.servicesApi.saveJsonConfig('deepseek', {
      apiKey: apiKey.value,
    } as DeepSeekConfig); // Save to config
  }

  // Event bus subscriptions
  onMounted(() => {
    isDrawerOpenEventBus.on('update', (value: boolean) => {
      isDrawerOpen.value = value; // Sync sidebar state with event bus
    });
    isDrawerOpenEventBus.on('expression', (expr: string) => {
      inputText.value += expr; // Insert expressions into input
    });
  });

  // Event bus unsubscriptions
  onUnmounted(() => {
    isDrawerOpenEventBus.off('update');
    isDrawerOpenEventBus.off('expression');
  });

  // Start title editing
  function startEditingTitle() {
    editableTitle.value = currentTopic.value.title;
    editingTitle.value = true;

    nextTick(() => {
      titleInput.value?.focus(); // Focus input after DOM update
    });
  }

  // Finish title editing
  function finishEditingTitle() {
    currentTopic.value.title =
      editableTitle.value.trim() || currentTopic.value.title; // Use trimmed value or keep original
    editingTitle.value = false;
  }

  // Create new chat handler
  const createNewChat = async (defaultTitle: string) => {
    const baseTitle = defaultTitle;
    const existingTitles = historyTopics.value.map((chat) => chat.title);

    // Generate unique title
    let uniqueTitle = baseTitle;
    if (defaultTitle === 'New Chat') {
      let counter = 1;
      while (existingTitles.includes(uniqueTitle)) {
        uniqueTitle = `${baseTitle} ${counter++}`;
      }
    }

    // Create new conversation
    const newData = await createConservation(uniqueTitle);

    // Update state
    currentTopic.value.title = uniqueTitle;
    historyTopics.value.unshift({ title: uniqueTitle, id: newData.id });
    selectHistoryTopic({ title: uniqueTitle, id: newData.id });
    messagesData.value = []; // Clear messages for new chat
  };

  // Fetch chat messages by conversation ID
  const getChatMessage = async (cId: string) => {
    const topicMessage = await getMessages(cId);
    return topicMessage;
  };
</script>
