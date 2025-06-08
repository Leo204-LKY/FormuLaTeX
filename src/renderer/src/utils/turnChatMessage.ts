import type { ChatMessage } from '../../../server';
import type { messages } from '@prisma/client';
import { getI18n } from './locales';

export async function turnChatMessage(
  messageData: messages[]
): Promise<ChatMessage[]> {
  const i18n = await getI18n();

  const t =
    typeof i18n.global.t === 'function'
      ? i18n.global.t.bind(i18n.global)
      : () => '';

  const systemPrompt = await window.chatClientApi.getSystemPrompt(
    t('language')
  );

  return [
    {
      role: 'system',
      content: systemPrompt,
    },
    ...messageData.map((msg) => {
      const role = msg.role as 'user' | 'assistant' | 'system';
      return {
        role,
        content: msg.content,
      };
    }),
  ];
}
