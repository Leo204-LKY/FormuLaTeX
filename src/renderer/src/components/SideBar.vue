<template>
  <!-- Sidebar Toggle Button -->
  <button
    ref="drawerButton"
    @click="toggleDrawer"
    class="select-none fixed top-1/2 right-4 transform -translate-y-1/2 z-30 bg-blue-200 text-white rounded-md transition-all duration-300 ease-in-out"
    :class="{
      'translate-x-0 rotate-180 -right-8': isDrawerOpen,
      'translate-x-full rotate-0 right-8': !isDrawerOpen,
    }"
  >
    <svg
      :id="id"
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
    class="select-none fixed top-0 left-0 h-full w-1/4 bg-white border-r shadow-lg transition-transform duration-300 z-10"
    :class="isHistoryDrawerOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="flex items-center justify-between p-4 border-b">
      <h3 class="text-lg font-bold">{{ t('SideBar.history') }}</h3>
    </div>
    <div ref="itemRef" class="p-4 overflow-y-auto h-[calc(100%-4rem)]">
      <ul class="space-y-2">
        <div
          v-if="historyTopics.length === 0"
          class="flex items-center justify-center text-lg text-center h-full w-full text-gray-400 select-none"
          style="min-height: 200px"
        >
          {{ t('SideBar.noHistoryTip') }}
        </div>
        <li
          v-for="topic in historyTopics"
          :key="topic.id"
          class="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer"
          @click="selectHistoryTopic(topic)"
          @contextmenu.prevent="handleRightClick(topic, $event)"
        >
          {{ topic.title }}
        </li>
      </ul>
    </div>
  </div>

  <!-- Main Chat Sidebar -->
  <div
    class="select-none fixed top-0 right-0 h-full w-3/4 bg-white border-l shadow-lg transition-transform duration-300 z-20"
    :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <AlterItem
      class="z-[9999]"
      v-model:visible="alertVisible_empty"
      :title="t('common.emptyInputTitle')"
      :message="t('common.emptyInputMessage')"
      :buttons="[{ text: t('common.ok'), type: 'primary' }]"
    />
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
          class="flex gap-1 text-sm px-3 py-1.5 items-center justify-center rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          @click="createNewChat(t('SideBar.newChatDefaultTitle'))"
        >
          <PlusCircle />
          {{ t('SideBar.newChat') }}
        </button>
      </div>

      <!-- Chat Title Editing Area -->
      <div class="relative">
        <h2
          v-if="!editingTitle && currentTopic.id !== 'default'"
          class="text-xl font-bold cursor-pointer"
          @click="startEditingTitle"
        >
          {{ currentTopic.title }}
        </h2>
        <h2
          v-else-if="!editingTitle && currentTopic.id === 'default'"
          class="text-xl font-bold cursor-not-allowed"
        >
          {{ currentTopic.title }}
        </h2>
        <input
          v-else
          v-model="editableTitle"
          spellcheck="false"
          @blur="finishEditingTitle"
          @keydown.enter="finishEditingTitle"
          @contextmenu="onContextMenu"
          class="text-xl font-bold border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref="titleInput"
        />
      </div>

      <AlterItem
        v-model:visible="alertVisible_error"
        :title="t('SideBar.chatApiNotSetTitle')"
        :message="t('SideBar.chatApiNotSetMessage')"
        :buttons="[{ text: t('common.ok'), type: 'primary' }]"
      />

      <!-- Placeholder -->
      <div class="w-8"></div>
    </div>

    <!-- Chat Content Area -->
    <div ref="chatContainer" class="flex-1 p-4 h-3/4 overflow-y-auto space-y-4">
      <!-- Empty State -->
      <div
        v-if="messagesData.length === 0"
        class="flex items-center justify-center text-2xl h-full w-full text-gray-400 select-none"
        style="min-height: 200px"
      >
        {{ t('SideBar.emptyMessageTip') }}
      </div>

      <!-- Message Rendering -->
      <div
        v-for="(message, index) in messagesData"
        :key="index"
        :class="message.role == 'user' ? 'text-right' : 'text-left'"
        class="p-2 h-auto"
      >
        <!-- User Messages -->
        <span
          v-if="message.role === 'user'"
          class="select-text bg-gray-200 p-2 rounded-md inline-block max-w-md h-auto break-words text-left"
          @contextmenu="onContextMenu"
        >
          {{ message.content }}
          <!-- <MarkdownRenderer :content="message.content" /> -->
        </span>

        <!-- AI Response Messages (with Markdown rendering) -->
        <div
          v-else
          class="select-text bg-gray-200 p-2 rounded-md inline-block max-w-[90%] h-auto break-words text-left prose prose-p:mb-0"
          v-html="renderMarkdown(message.content)"
          @contextmenu="onContextMenu"
        ></div>
      </div>
    </div>

    <!-- Bottom Input Area -->
    <div class="flex items-center p-4 bg-white fixed bottom-0 left-0 right-0">
      <div
        class="flex flex-1 items-end w-full border rounded-md shadow-md bg-white p-2 transition-all"
        :class="
          isInputFocused
            ? 'border-blue-300 ring-3 ring-blue-500'
            : 'border-gray-300'
        "
      >
        <textarea
          v-model="inputText"
          :placeholder="t('SideBar.chatInputPlaceholder')"
          ref="textarea"
          @input="autoResize"
          @focus="isInputFocused = true"
          @blur="isInputFocused = false"
          @keydown.enter.prevent="handleEnter"
          @contextmenu="onContextMenu"
          class="flex-1 p-2 max-h-32 min-h-32 focus:outline-none transition-all w-full resize-none bg-white"
        ></textarea>
        <button
          @click="sendMessage"
          :disabled="!inputText.trim()"
          class="h-10 w-10 flex px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors items-center justify-center ml-2 disabled:cursor-not-allowed disabled:bg-gray-300"
          :alt="t('SideBar.send')"
        >
          <SendFill class="w-8 h-8" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue';
  import { isDrawerOpenEventBus, contextMenuEventBus } from '../eventBus';
  import {
    deleteConversation,
    createConversation,
    getConversations,
    getMessages,
    createMessage,
    updateConversation,
  } from '../utils/chatDB';
  import type { messages } from '@prisma/client';
  import { turnChatMessage } from '../utils/turnChatMessage';
  import AlterItem from '../sub-components/AlterItem.vue';
  import 'katex/dist/katex.min.css';
  import type { DeepSeekConfig } from '../../../shared/interfaces';
  import { useI18n } from 'vue-i18n';
  import { onContextMenu } from '../utils/context-menu';
  import PlusCircle from '../assets/icons/PlusCircle.vue';
  import SendFill from '../assets/icons/SendFill.vue';
  import { renderMarkdown } from '../utils/markdown';

  // i18n
  const { t } = useI18n();

  const props = defineProps<{ id?: string }>();
  console.log('SideBar props:', props);

  // Interface for chat topics
  interface Topics {
    title: string;
    id: string;
  }

  const itemRef = ref<HTMLElement | null>(null);

  // Chat container reference and scroll management
  const chatContainer = ref<HTMLDivElement | null>(null);
  const shouldAutoScroll = ref(true); // Auto-scroll state

  // Alert states
  const alertVisible_error = ref(false); // API key missing
  const alertVisible_empty = ref(false); // Empty input error

  // Sidebar states
  const isDrawerOpen = ref(false); // Main sidebar open state
  const messagesData = ref<messages[]>([]); // Chat messages
  const inputText = ref(''); // Input text
  const currentTopic = ref<Topics>({
    title: t('SideBar.chatTitle'),
    id: 'default',
  }); // Current chat topic

  // TextArea auto resize
  const textarea = ref<HTMLTextAreaElement | null>(null);
  const isInputFocused = ref(false);

  const autoResize = () => {
    const el = textarea.value;
    if (el) {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 128) + 'px'; // Limit max height to 128px (Tailwind's max-h-32)
    }
  };

  // Handle Enter key for sending messages
  function handleEnter(e: KeyboardEvent) {
    if (e.shiftKey || e.ctrlKey || e.metaKey) {
      // Allow multi-line input with Shift/Ctrl/Meta + Enter
      const el = textarea.value;
      if (el) {
        const start = el.selectionStart;
        const end = el.selectionEnd;
        const value = el.value;
        inputText.value =
          value.substring(0, start) + '\n' + value.substring(end);
        nextTick(() => {
          el.selectionStart = el.selectionEnd = start + 1;
        });
      }
    } else {
      // Send message if has input
      if (inputText.value.trim()) {
        sendMessage();
      }
    }
  }

  // History sidebar states
  const isHistoryDrawerOpen = ref(false); // History sidebar open state
  const showSetting = ref(false); // Settings panel state

  // Title editing states
  const editableTitle = ref(''); // Editable title value
  const editingTitle = ref(false); // Title edit mode
  const titleInput = ref<HTMLInputElement | null>(null); // Title input reference

  // History topics storage
  const historyTopics = ref<Topics[]>([]); // List of saved conversations

  // Lifecycle hook: Fetch initial conversations
  onMounted(async () => {
    const conversations = await getConversations();
    historyTopics.value = conversations.map((conv) => ({
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
      await createNewChat(t('SideBar.newChatDefaultTitle'));
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

        turnChatMessage(messagesData.value).then((messages) => {
          window.chatClientApi.deepseekAsk(
            text,
            messages // Format chat history with system prompt
          );
        });
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

  // Event bus subscriptions
  onMounted(() => {
    isDrawerOpenEventBus.on('update', (value: boolean) => {
      isDrawerOpen.value = value; // Sync sidebar state with event bus
    });
    isDrawerOpenEventBus.on('expression', (expr: string) => {
      inputText.value += expr; // Insert expressions into input
    });
    contextMenuEventBus.on('deleteHistoryTopic', async (topic) => {
      deleteConversation(topic.id); // Delete conversation from DB
      historyTopics.value = historyTopics.value.filter(
        (t) => t.id !== topic.id
      );
    });
  });

  // Event bus unsubscriptions
  onUnmounted(() => {
    isDrawerOpenEventBus.off('update');
    isDrawerOpenEventBus.off('expression');
    contextMenuEventBus.off('deleteHistoryTopic');
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
  async function finishEditingTitle() {
    await updateConversation(
      currentTopic.value.id,
      editableTitle.value.trim() || currentTopic.value.title
    );
    currentTopic.value.title =
      editableTitle.value.trim() || currentTopic.value.title; // Use trimmed value or keep original

    historyTopics.value = historyTopics.value.map((topic) =>
      topic.id === currentTopic.value.id
        ? { ...topic, title: currentTopic.value.title }
        : topic
    );
    editingTitle.value = false;
  }

  const handleRightClick = async (topic: Topics, e: MouseEvent) => {
    e.preventDefault();

    await nextTick();
    if (itemRef.value) {
      // const rect = itemRef.value.getBoundingClientRect();
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = rect.right - 20;
      const y = rect.top + rect.height / 2 - 22;

      contextMenuEventBus.emit('openContextMenu', {
        x,
        y,
        expression: topic,
        type: 'historyTopic',
      });
    }
  };

  // Create new chat handler
  const createNewChat = async (defaultTitle: string) => {
    const baseTitle = defaultTitle;
    const existingTitles = historyTopics.value.map((chat) => chat.title);

    // Generate unique title
    let uniqueTitle = baseTitle;
    if (defaultTitle === t('SideBar.newChatDefaultTitle')) {
      let counter = 1;
      while (existingTitles.includes(uniqueTitle)) {
        uniqueTitle = `${baseTitle} ${counter++}`;
      }
    }

    // Create new conversation
    const newData = await createConversation(uniqueTitle);

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
