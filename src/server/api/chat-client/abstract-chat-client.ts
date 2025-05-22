import { OpenAI } from 'openai';
import type { ClientOptions } from 'openai';
import type { ChatMessage } from '../../interfaces';

/**
 * Abstract AI chat client that supports stream output
 */
export abstract class AbstractChatClient {
  protected client: OpenAI;
  protected abstract validateModel(model: string): void;

  constructor(apiKey: string, baseUrl?: string) {
    const options: ClientOptions = { apiKey };
    if (baseUrl) options.baseURL = baseUrl;
    this.client = new OpenAI(options);
  }

  /**
   * Ask questions (stream return)
   * @param question Question to ask
   * @param history Message history
   */
  async *ask(
    question: string,
    history: ChatMessage[] = [],
    model: string = 'gpt-4'
  ) {
    if (!question.trim()) {
      throw new Error('`question` cannot be empty');
    }

    this.validateModel(model);

    const messages: ChatMessage[] = [
      ...history,
      { role: 'user', content: question },
    ];

    const stream = await this.client.chat.completions.create({
      model: model,
      messages,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        yield content;
      }
    }
  }
}
