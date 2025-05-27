import type { Prisma } from '@prisma/client';

// Create Conservation
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

// Modify the title of Conservation
// export const updateConservation = (id: string, new_name: string) => {};

// Get all Conservation
export const getConservations = async () => {
  const conversations = await window.formulaConversationsTableApi.getAll();

  return conversations;
};

// Get the Messages of specific Conservation by c_id
export const getMessages = async (c_id: string) => {
  const messages = await window.messagesTableApi.getManyByConversationId(c_id);
  return messages;
};

// Create a new Message in specific Conservation
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
