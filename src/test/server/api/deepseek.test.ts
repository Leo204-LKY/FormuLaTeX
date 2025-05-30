import { DeepSeekChatClient } from '../../../server/api/chat-client';
import { OpenAI } from 'openai';

jest.mock('openai');

describe('DeepSeekChatClient', () => {
  let client: DeepSeekChatClient;
  const mockApiKey = 'fake-api-key';

  beforeEach(() => {
    client = new DeepSeekChatClient(mockApiKey);
  });

  it('should instantiate with correct api key and baseURL', () => {
    expect(client).toBeInstanceOf(DeepSeekChatClient);
  });

  it('should throw an error if model is not supported', () => {
    expect(() => client['validateModel']('unsupported-model')).toThrowError(
      'DeepSeek does not support model: unsupported-model'
    );
  });

  it('should pass validateModel if supported', () => {
    expect(() => client['validateModel']('deepseek-chat')).not.toThrow();
    expect(() => client['validateModel']('deepseek-reasoner')).not.toThrow();
  });

  it('should throw error for empty question', async () => {
    await expect(async () => {
      const generator = client.ask('' as string);
      await generator.next();
    }).rejects.toThrow('`question` cannot be empty');
  });

  it('should stream chat completion results', async () => {
    // Simulating stream returns an asynchronous iterator.
    const mockStream = {
      async *[Symbol.asyncIterator]() {
        yield { choices: [{ delta: { content: 'Hello' } }] };
        yield { choices: [{ delta: { content: ' world' } }] };
      },
    };

    const mockCreate = jest.fn().mockResolvedValue(mockStream);
    (OpenAI as unknown as jest.Mock).mockImplementation(() => ({
      chat: {
        completions: {
          create: mockCreate,
        },
      },
    }));

    client = new DeepSeekChatClient(mockApiKey); // Reinitialize to use mocked OpenAI

    const generator = client.ask('Hello?');
    const results: string[] = [];

    for await (const part of generator) {
      results.push(part);
    }

    expect(results.join('')).toBe('Hello world');
    expect(mockCreate).toHaveBeenCalled();
  });
});
