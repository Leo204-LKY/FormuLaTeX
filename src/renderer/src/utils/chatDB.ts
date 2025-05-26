import type { Prisma } from '@prisma/client';

// 创建 Conservation
export const createConservation = async (title: string) => {
  const new_conservation: Prisma.formula_conversationsCreateManyInput = {
    title: title,
  };
  const c_id =
    await window.formulaConversationsTableApi.insertOne(new_conservation);
  return {
    id: c_id,
    conversation: new_conservation,
  };
};

// 修改 Conservation 相关信息
// export const updateConservation = (id: string, new_name: string) => {};

// 获取全部 Conservation
export const getConservations = async () => {
  const conversations = await window.formulaConversationsTableApi.getAll();

  return conversations;
};

// 获取当前 Conservation 下的 messages
export const getMessages = async (c_id: string) => {
  const messages = await window.messagesTableApi.getManyByConversationId(c_id);
  return messages;
};

// 添加消息
export const createMessage = async (
  c_id: string,
  role: string,
  content: string
) => {
  const new_message: Prisma.messagesCreateManyInput = {
    conversation_id: c_id,
    role: role,
    content: content,
  };
  const m_id = await window.messagesTableApi.insertOne(new_message);
  return m_id;
};
