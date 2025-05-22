// utils/chatDB.ts
import { nanoid } from 'nanoid';

export interface ChatData {
  id: string;
  title: string;
  messages: Array<{ isUser: boolean; text: string }>;
}

// 获取 Conservation 下的对话消息
// export const getMessages = async (id: string) => {
//   const messages = await MessagesTable.getManyByConversationId(id);

//   return messages;
// };

// 创建 Conservation
export const createNewChatDB = (title: string): ChatData => {
  const newId = nanoid();
  return {
    id: newId,
    title: title || 'Default Chat',
    messages: [
      {
        isUser: false,
        text: '你好！请问有什么可以帮助你的？',
      },
    ],
  };
};

// 修改 Conservation 相关信息
// export const updateConservation = (id: string, new_name: string) => {};

// // 获取全部 Conservation
// export const getConservations = async () => {
//   const conversations = await FormulaConversationsTable.getAll();

//   return conversations;
// };
