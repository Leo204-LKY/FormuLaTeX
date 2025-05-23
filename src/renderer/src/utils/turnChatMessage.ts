import type { ChatMessage } from '../../../server';
import type { messages } from '@prisma/client';

export function turnChatMessage(messageData: messages[]): ChatMessage[] {
  return messageData.map((msg) => {
    const role = msg.role as 'user' | 'assistant' | 'system';
    return {
      role,
      content: msg.content,
    };
  });
}
