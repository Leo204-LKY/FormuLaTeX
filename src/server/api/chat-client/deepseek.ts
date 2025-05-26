import type { ChatMessage, DeepSeekConfig } from '../../interfaces';
import { getEncryptedJsonConfig } from '../../services';
import { AbstractChatClient } from './abstract-chat-client';

export type DeepSeekModel = 'deepseek-chat' | 'deepseek-reasoner';

export class DeepSeekChatClient extends AbstractChatClient {
  private supportModels = ['deepseek-chat', 'deepseek-reasoner'];

  constructor(
    apiKey: string = (getEncryptedJsonConfig('deepseek') as DeepSeekConfig)
      .apiKey || ''
  ) {
    super(apiKey, 'https://api.deepseek.com/v1');
  }

  protected validateModel(model: string): void {
    if (!this.supportModels.includes(model as DeepSeekModel)) {
      throw new Error(`DeepSeek does not support model: ${model}`);
    }
  }

  async *ask(
    question: string,
    history: ChatMessage[] = [],
    model: DeepSeekModel = 'deepseek-chat'
  ) {
    yield* super.ask(question, history, model);
  }
}
