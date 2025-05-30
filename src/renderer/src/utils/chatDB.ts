import type { Prisma } from '@prisma/client';

// Create Conversation
export const createConversation = async (title: string) => {
  const new_conversation: Prisma.formula_conversationsCreateManyInput = {
    title: title,
  };
  const c_id =
    await window.formulaConversationsTableApi.insertOne(new_conversation);
  return {
    id: c_id,
    conversation: new_conversation,
  };
};

// Modify the title of Conversation
export const updateConversation = async (c_id: string, new_title: string) => {
  try {
    const edit_conversation: Prisma.formula_conversationsUpdateInput = {
      title: new_title,
    };
    await window.formulaConversationsTableApi.updateUniqueByUuid(
      c_id,
      edit_conversation
    );
  } catch (error) {
    console.error('Error updating conversation:', error);
    return 0;
  }
  return 1;
};

// Delete a conversation by c_id
export const deleteConversation = async (c_id: string) => {
  try {
    await window.formulaConversationsTableApi.deleteUniqueByUuid(c_id);
  } catch (error) {
    console.error('Error deleting conversation:', error);
    return 0;
  }
  return 1;
};

// Get all Conversation
export const getConversations = async () => {
  const conversations = await window.formulaConversationsTableApi.getAll();

  return conversations;
};

// Get the Messages of specific Conversation by c_id
export const getMessages = async (c_id: string) => {
  const messages = await window.messagesTableApi.getManyByConversationId(c_id);
  return messages;
};

// Create a new Message in specific Conversation
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
