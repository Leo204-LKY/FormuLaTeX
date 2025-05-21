import { ChatMessage } from '../../server';
import { DeepSeekModel } from '../../server/api/chat-client';
import {
  favourites,
  formula_conversations,
  formula_interpretations,
  formula_sessions,
  formula_tags,
  formulas,
  messages,
  tags,
  Prisma,
} from '../../server/database/generated';

export {};

declare global {
  interface Window {
    electronAPI: {
      sendMessage: (message: string) => void;
    };

    chatClientApi: {
      deepseekAsk: (
        question: string,
        history: ChatMessage[],
        model?: DeepSeekModel
      ) => Promise<void>;
    };

    favouritesTableApi: {
      getAll: () => Promise<favourites[]>;
      insertOneByFormulaUuid: (formulaUuid: string) => Promise<string>;
      deleteUniqueByFormulaUuid: (
        formulaUuid: string
      ) => Promise<string | null>;
      deleteUniqueByFavouriteUuid: (
        favouriteUuid: string
      ) => Promise<string | null>;
    };

    formulaConversationsTableApi: {
      getAll: () => Promise<formula_conversations[]>;
      insertOne: (
        data: Prisma.formula_conversationsCreateManyInput
      ) => Promise<string>;
      deleteUniqueByUuid: (uuid: string) => Promise<void>;
    };

    formulaInterpretationsTableApi: {
      getAll: () => Promise<formula_interpretations[]>;
      getUniqueByUuid: (
        uuid: string
      ) => Promise<formula_interpretations | null>;
      insertOne: (
        data: Prisma.formula_interpretationsCreateManyInput
      ) => Promise<string>;
      insertMany: (
        data: Prisma.formula_interpretationsCreateManyInput[]
      ) => Promise<void>;
      deleteOne: (uuid: string) => Promise<void>;
    };

    formulaSessionsTableApi: {
      getAll: () => Promise<formula_sessions[]>;
      getUniqueByUuid: (uuid: string) => Promise<formula_sessions | null>;
      insertOne: (
        data: Prisma.formula_sessionsCreateManyInput
      ) => Promise<string>;
      insertMany: (
        data: Prisma.formula_sessionsCreateManyInput[]
      ) => Promise<void>;
      deleteOne: (uuid: string) => Promise<void>;
    };

    formulaTagsTableApi: {
      getAll: () => Promise<formula_tags[]>;
      getFormulaIdsByTagId: (tagId: string) => Promise<string[]>;
      getTagIdsByFormulaId: (formulaId: string) => Promise<string[]>;
    };

    formulasTableApi: {
      getAll: () => Promise<formulas[]>;
      getUniqueByUuid: (uuid: string) => Promise<formulas | null>;
      getManyByName: (name: string) => Promise<formulas[]>;
      insertOne: (data: Prisma.formulasCreateManyInput) => Promise<string>;
      insertMany: (data: Prisma.formulasCreateManyInput[]) => Promise<void>;
    };

    messagesTableApi: {
      getAll: () => Promise<messages[]>;
      getManyByConversationId: (conversationId: string) => Promise<messages[]>;
      insertOne: (data: Prisma.messagesCreateManyInput) => Promise<string>;
      deleteManyByConversationId: (conversationId: string) => Promise<void>;
    };

    tagsTableApi: {
      getAll: () => Promise<tags[]>;
      getUniqueByUuid: (uuid: string) => Promise<tags | null>;
      getManyByName: (name: string) => Promise<tags[]>;
      insertOne: (data: Prisma.tagsCreateManyInput) => Promise<string>;
      insertMany: (data: Prisma.tagsCreateManyInput[]) => Promise<void>;
      deleteOne: (uuid: string) => Promise<void>;
      setColorByUuid: (uuid: string, color: string) => Promise<void>;
    };

    servicesApi: {
      getJsonConfig: (configName: string) => Promise<object>;
      saveJsonConfig: (configName: string, config: object) => Promise<void>;
    };
  }
}
