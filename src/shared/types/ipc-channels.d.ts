import type {
  AppSettingsConfig,
  ChatMessage,
  SimpleTexResponse,
} from '../../server';
import type { DeepSeekModel } from '../../server/api/chat-client';
import type {
  favourites,
  formula_conversations,
  formula_interpretations,
  formula_tags,
  formulas,
  messages,
  tags,
  Prisma,
} from '@prisma/client';

export {};

declare global {
  interface Window {
    /**
     * Chat client API
     */
    chatClientApi: {
      /**
       * Ask DeepSeek
       * @param question The question to ask
       * @param history Chat history
       * @param model The model to use, default is `deepseek-chat`
       *
       * Notice: Stream output enabled. Use `window.chatClientApi.onDeepseekChunk()` to get the chunk data.
       * @example Call DeepSeek Chat API and handle streaming output
       * ```ts
       * function askDeepseekDemo(question: string) {
       *   let result = '';
       *
       *   // Listen for chunk data
       *   window.chatClientApi.onDeepseekChunk((chunk) => {
       *     console.log('Received chunk: ', chunk);
       *     result += chunk;
       *   });
       *
       *   // Listen for end of response
       *   window.chatClientApi.onDeepseekEnd(() => {
       *     console.log('Chat completed, full answer: ', result);
       *     // Here you can do subsequent processing, such as displaying to the page
       *   });
       *
       *   // Listen for errors
       *   window.chatClientApi.onDeepseekError((error) => {
       *     console.error('Error occurred when answering: ', error);
       *   });
       *
       *   // Start asking
       *   window.chatClientApi.deepseekAsk(question, [])
       *     .then(() => {
       *       console.log('Question sent successfully');
       *     })
       *     .catch((err) => {
       *       console.error('Question send error: ', err);
       *     });
       * }
       *
       * // Call example
       * askDeepseekDemo('What is LaTeX?');
       */
      deepseekAsk: (
        question: string,
        history: ChatMessage[],
        model?: DeepSeekModel
      ) => Promise<void>;

      /**
       * Callback when DeepSeek API returns a chunk of data
       * @param callback Callback function to handle the chunk data
       * @example FULL USE DEMO see hover tooltip of `window.chatClientApi.deepseekAsk()`
       * ```ts
       * window.chatClientApi.onDeepseekChunk((chunk) => {
       *   console.log('Received chunk: ', chunk);
       * });
       * ```
       */
      onDeepseekChunk: (callback: (chunk: string) => void) => void;

      /**
       * Callback when DeepSeek API call ends
       * @param callback Callback function to handle the end of the DeepSeek API call
       * @example FULL USE DEMO see hover tooltip of `window.chatClientApi.deepseekAsk()`
       * ```ts
       * window.chatClientApi.onDeepseekEnd(() => {
       *   console.log('DeepSeek API call ended');
       * });
       * ```
       */
      onDeepseekEnd: (callback: () => void) => void;

      /**
       * Callback when DeepSeek API call returns an error
       * @param callback Callback function to handle the error
       * @example FULL USE DEMO see hover tooltip of `window.chatClientApi.deepseekAsk()`
       * ```ts
       * window.chatClientApi.onDeepseekError((error) => {
       *   console.error('DeepSeek API error:', error);
       * });
       * ```
       */
      onDeepseekError: (callback: (error: string) => void) => void;

      /**
       * Update API key
       * @param apiKey API key
       */
      deepseekUpdateApiKey: (apiKey: string) => Promise<void>;
    };

    /**
     * SimpleTex API
     */
    simpleTexApi: {
      /**
       * Recognize formula using SimpleTex API
       * @param filePath Image file path
       * @param appId SimpleTex APP ID
       * @param appSecret SimpleTex App Secret
       * @param timeout Request timeout (ms)
       */
      convert(
        filePath: string,
        appId?: string,
        appSecret?: string,
        timeout?: number
      ): Promise<SimpleTexResponse>;

      /**
       * Recognize formula using SimpleTex API
       * @param imageBuffer Image buffer
       * @param appId SimpleTex APP ID
       * @param appSecret SimpleTex App Secret
       * @param timeout Request timeout (ms)
       */
      convert(
        imageBuffer: Buffer,
        appId?: string,
        appSecret?: string,
        timeout?: number
      ): Promise<SimpleTexResponse>;
    };

    /**
     * Favourites table API
     */
    favouritesTableApi: {
      /**
       * Get all favourites in favourites table
       * @returns List of all favourites in favourites table
       */
      getAll: () => Promise<favourites[]>;

      /**
       * Add a formula to favourite by formula UUID, if already exists, skip and directly return the UUID
       * @param formulaUuid Formula UUID
       * @returns Favourite UUID
       */
      insertOneByFormulaUuid: (formulaUuid: string) => Promise<string>;

      /**
       * Remove a formula favourite by formula UUID
       * @param formulaUuid Formula UUID
       * @returns Removed formula UUID, return null if not in favourite
       */
      deleteUniqueByFormulaUuid: (
        formulaUuid: string
      ) => Promise<string | null>;

      /**
       * Remove a formula favourite by favourite UUID
       * @param favouriteUuid Formula UUID
       * @returns Removed formula UUID, return null if not in favourite
       */
      deleteUniqueByFavouriteUuid: (
        favouriteUuid: string
      ) => Promise<string | null>;
    };

    /**
     * formula_conversations table API
     */
    formulaConversationsTableApi: {
      /**
       * Get all conversations in formula_conversations table
       * @returns List of all formula conversations in formula_conversations table
       */
      getAll: () => Promise<formula_conversations[]>;

      /**
       * Start a new conversation and add it to formula_conversation table
       * @param formulaConversation Formula conversation to insert
       * @returns Conversation UUID
       */
      insertOne: (
        data: Prisma.formula_conversationsCreateManyInput
      ) => Promise<string>;

      /**
       * Delete one formula conversation by UUID
       * @param uuid Formula conversation UUID
       */
      deleteUniqueByUuid: (uuid: string) => Promise<void>;

      /**
       * Update one formula_conversation by UUID
       * @param uuid formula_conversation UUID to update
       * @param data Data to update
       * @return Updated formula_conversation
       */
      updateUniqueByUuid: (
        uuid: string,
        data: Prisma.formula_conversationsUpdateInput
      ) => Promise<formula_conversations>;
    };

    /**
     * formula_interpretations table API
     */
    formulaInterpretationsTableApi: {
      /**
       * Get all formula interpretations in formula_interpretations table
       * @returns List of all formula interpretations in formula_interpretations table
       */
      getAll: () => Promise<formula_interpretations[]>;

      /**
       * Get one formula interpretation by UUID
       * @param uuid Formula interpretation UUID
       * @returns Formula interpretation with given UUID
       */
      getUniqueByUuid: (
        uuid: string
      ) => Promise<formula_interpretations | null>;

      /**
       * Insert one formula interpretation into formula_interpretations table
       * @param formulaInterpretation Formula interpretation to insert
       * @returns The UUID of the inserted formula interpretation
       */
      insertOne: (
        data: Prisma.formula_interpretationsCreateManyInput
      ) => Promise<string>;

      /**
       * Insert many formula interpretations into formula_interpretations table
       * @param formulas Formula interpretations to insert
       */
      insertMany: (
        data: Prisma.formula_interpretationsCreateManyInput[]
      ) => Promise<void>;

      /**
       * Delete one formula interpretation by UUID
       * @param uuid Formula interpretation UUID
       */
      deleteUniqueByUuid: (uuid: string) => Promise<void>;
    };

    /**
     * formula_tags table API
     */
    formulaTagsTableApi: {
      /**
       * Get all formula and tags many-to-many mapping
       * @returns List of all mapping in formula_tags table
       */
      getAll: () => Promise<formula_tags[]>;

      /**
       * Get a list of formula UUIDs associated with a given tag UUID
       * @param tagId Tag UUID
       * @returns Promise<string[]> List of formula UUIDs
       */
      getFormulaIdsByTagId: (tagId: string) => Promise<string[]>;

      /**
       * Get a list of tag UUIDs associated with a given formula UUID
       * @param formulaId Formula UUID
       * @returns Promise<string[]> List of tag UUIDs
       */
      getTagIdsByFormulaId: (formulaId: string) => Promise<string[]>;

      /**
       * Add tag to a formula
       * @param formulaId Formula UUID
       * @param tagId Tag UUID
       */
      addTagToFormula: (formulaId: string, tagId: string) => Promise<void>;

      /**
       * Remove tag from a formula
       * @param formulaId Formula UUID
       * @param tagId Tag UUID
       */
      deleteTagFromFormula: (formulaId: string, tagId: string) => Promise<void>;
    };

    /**
     * formulas table API
     */
    formulasTableApi: {
      /**
       * Get all formulas in formulas table
       * @returns List of all formulas in formulas table
       */
      getAll: () => Promise<formulas[]>;

      /**
       * Get one formula by UUID
       * @param uuid Formula UUID
       * @returns Formula with given UUID
       */
      getUniqueByUuid: (uuid: string) => Promise<formulas | null>;

      /**
       * Get many formulas by name
       * @param name Formula name
       * @returns Formulas with given name
       */
      getManyByName: (name: string) => Promise<formulas[]>;

      /**
       * Insert one formula into formulas table
       * @param formula Formula to insert
       * @returns The UUID of the inserted formula
       */
      insertOne: (data: Prisma.formulasCreateManyInput) => Promise<string>;

      /**
       * Insert many formulas into formulas table
       * @param formulas Formulas to insert
       */
      insertMany: (data: Prisma.formulasCreateManyInput[]) => Promise<void>;

      /**
       * Delete one formula by UUID
       * @param uuid Formula UUID
       */
      deleteUniqueByUuid: (uuid: string) => Promise<void>;

      /**
       * Update one formula by UUID
       * @param uuid Formula UUID to update
       * @param data Data to update
       * @return Updated formula
       */
      updateUniqueByUuid: (
        uuid: string,
        data: Prisma.formulasUpdateInput
      ) => Promise<formulas>;
    };

    /**
     * messafes table API
     */
    messagesTableApi: {
      /**
       * Get all conversation messages in messages table
       * @returns List of all conversation messages in messages table
       */
      getAll: () => Promise<messages[]>;

      /**
       * Get all messages in one specific conversation by conversation UUID
       * @param conversationUuid Conversation UUID
       * @return List of all messages in the conversation
       */
      getManyByConversationId: (conversationId: string) => Promise<messages[]>;

      /**
       * Insert one message into messages table
       * @param message Message to insert
       * @returns The UUID of the inserted message
       */
      insertOne: (data: Prisma.messagesCreateManyInput) => Promise<string>;

      /**
       * Delete all messages related to given conversation UUID
       * @param conversationUuid Conversation UUID
       */
      deleteManyByConversationId: (conversationId: string) => Promise<void>;
    };

    /**
     * tags table API
     */
    tagsTableApi: {
      /**
       * Get all tags in tags table
       * @returns List of all tags in tags table
       */
      getAll: () => Promise<tags[]>;

      /**
       * Get one tag by UUID
       * @param uuid Tag UUID
       * @returns Tag with given UUID
       */
      getUniqueByUuid: (uuid: string) => Promise<tags | null>;

      /**
       * Get many tags by name
       * @param name Tag name
       * @returns Tags with given name
       */
      getManyByName: (name: string) => Promise<tags[]>;

      /**
       * Insert one tag into tags table
       * @param tag Tag to insert
       * @returns The UUID of the inserted tag
       */
      insertOne: (data: Prisma.tagsCreateManyInput) => Promise<string>;

      /**
       * Insert many tags into tags table
       * @param tags Tags to insert
       */
      insertMany: (data: Prisma.tagsCreateManyInput[]) => Promise<void>;

      /**
       * Delete one tag by UUID
       * @param uuid Tag UUID
       */
      deleteUniqueByUuid: (uuid: string) => Promise<void>;

      /**
       * Set tag color by UUID
       * @param uuid Tag UUID
       */
      setColorByUuid: (uuid: string, color: string) => Promise<void>;
    };

    /**
     * Services API
     */
    servicesApi: {
      /**
       * Decrypt and get JSON config from config path
       * @param configName Config file name
       * @example `scrert` means `secret.json`
       */
      getJsonConfig: (configName: string) => Promise<object>;

      /**
       * Decrypt and save config object to JSON
       * @param configName Config file name
       * @param config Config object
       * @example `scrert` means `secret.json`
       */
      saveJsonConfig: (configName: string, config: object) => Promise<void>;

      /**
       * Get whether the config file exists
       * @param configName Config file name
       * @example `scrert` means `secret.json`
       * @return {boolean} Whether the config file exists
       */
      isConfigExist: (configName: string) => Promise<boolean>;

      /**
       * Get app setting
       * @param settingName The name of the setting to retrieve
       * @returns The value of the setting or null if it does not exist
       */
      getAppSetting: (
        settingName: keyof AppSettingsConfig
      ) => Promise<string | null>;

      /**
       * Save app setting
       * @param settingName The name of the setting to save
       * @param value The value to save for the setting
       */
      saveAppSetting: (
        settingName: keyof AppSettingsConfig,
        value: string
      ) => Promise<void>;
    };
  }
}
