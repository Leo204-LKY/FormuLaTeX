/**
 * AI client chat messages
 */
export interface ChatMessage {
  /**
   * Role of the message (`user`, `assistant`, or `system`)
   */
  role: 'user' | 'assistant' | 'system';

  /**
   * Message content
   */
  content: string;
}
