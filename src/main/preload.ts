import { contextBridge, ipcRenderer } from 'electron';
import { ChatMessage } from '../server';
import { DeepSeekModel } from '../server/api/chat-client';
import {
  favourites,
  formula_conversations,
  formula_interpretations,
  formula_tags,
  formulas,
  messages,
  Prisma,
  tags,
} from '@prisma/client';

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
});

contextBridge.exposeInMainWorld('chatClientApi', {
  deepseekAsk: (
    question: string,
    history: ChatMessage[],
    model?: DeepSeekModel
  ): Promise<void> => {
    return ipcRenderer.invoke('deepseek:ask', question, history, model);
  },

  onDeepseekChunk: (callback: (chunk: string) => void) => {
    ipcRenderer.on('deepseek:ask:chunk', (_event, chunk) => callback(chunk));
  },

  onDeepseekEnd: (callback: () => void) => {
    ipcRenderer.on('deepseek:ask:end', () => callback());
  },

  onDeepseekError: (callback: (error: string) => void) => {
    ipcRenderer.on('deepseek:ask:error', (_event, error) => callback(error));
  },

  deepseekUpdateApiKey: (apiKey: string): Promise<void> => {
    return ipcRenderer.invoke('deepseek:updateApiKey', apiKey);
  },
});

contextBridge.exposeInMainWorld('simpleTexApi', {
  convert: (
    input: string | Buffer,
    appId?: string,
    appSecret?: string,
    timeout?: number
  ): Promise<string> => {
    if (typeof input === 'string') {
      return ipcRenderer.invoke(
        'simpletex:convert:path',
        input,
        appId,
        appSecret,
        timeout
      );
    } else {
      return ipcRenderer.invoke(
        'simpletex:convert:imageBuffer',
        input,
        appId,
        appSecret,
        timeout
      );
    }
  },
});

contextBridge.exposeInMainWorld('favouritesTableApi', {
  getAll: (): Promise<favourites[]> => {
    return ipcRenderer.invoke('database:favourites:getAll');
  },

  insertOneByFormulaUuid: (formulaUuid: string): Promise<string> => {
    return ipcRenderer.invoke(
      'database:favourites:insertOneByFormulaUuid',
      formulaUuid
    );
  },

  deleteUniqueByFormulaUuid: (formulaUuid: string): Promise<string | null> => {
    return ipcRenderer.invoke(
      'database:favourites:deleteUniqueByFormulaUuid',
      formulaUuid
    );
  },

  deleteUniqueByFavouriteUuid: (
    favouriteUuid: string
  ): Promise<string | null> => {
    return ipcRenderer.invoke(
      'database:favourites:deleteUniqueByFavouriteUuid',
      favouriteUuid
    );
  },
});

contextBridge.exposeInMainWorld('formulaConversationsTableApi', {
  getAll: (): Promise<formula_conversations[]> => {
    return ipcRenderer.invoke('database:formula_conversations:getAll');
  },

  insertOne: (
    formulaConversation: Prisma.formula_conversationsCreateManyInput
  ): Promise<string> => {
    return ipcRenderer.invoke(
      'database:formula_conversations:insertOne',
      formulaConversation
    );
  },

  deleteUniqueByUuid: (uuid: string): Promise<void> => {
    return ipcRenderer.invoke(
      'database:formula_conversations:deleteUniqueByUuid',
      uuid
    );
  },

  updateUniqueByUuid: (
    uuid: string,
    data: Prisma.formula_conversationsUpdateInput
  ): Promise<formula_conversations> => {
    return ipcRenderer.invoke(
      'database:formula_conversations:updateUniqueByUuid',
      uuid,
      data
    );
  },
});

contextBridge.exposeInMainWorld('formulaInterpretationsTableApi', {
  getAll: (): Promise<formula_interpretations[]> => {
    return ipcRenderer.invoke('database:formula_interpretations:getAll');
  },

  getUniqueByUuid: (uuid: string): Promise<formula_interpretations | null> => {
    return ipcRenderer.invoke(
      'database:formula_interpretations:getUniqueByUuid',
      uuid
    );
  },

  insertOne: (
    formulaInterpretation: Prisma.formula_interpretationsCreateManyInput
  ): Promise<string> => {
    return ipcRenderer.invoke(
      'database:formula_interpretations:insertOne',
      formulaInterpretation
    );
  },

  insertMany: (
    formulaInterpretations: Prisma.formula_interpretationsCreateManyInput[]
  ): Promise<void> => {
    return ipcRenderer.invoke(
      'database:formula_interpretations:insertMany',
      formulaInterpretations
    );
  },

  deleteUniqueByUuid: (uuid: string): Promise<void> => {
    return ipcRenderer.invoke(
      'database:formula_interpretations:deleteUniqueByUuid',
      uuid
    );
  },
});

contextBridge.exposeInMainWorld('formulaTagsTableApi', {
  getAll: (): Promise<formula_tags[]> => {
    return ipcRenderer.invoke('database:formula_tags:getAll');
  },

  getFormulaIdsByTagId: (tagId: string): Promise<string[]> => {
    return ipcRenderer.invoke(
      'database:formula_tags:getFormulaIdsByTagId',
      tagId
    );
  },

  getTagIdsByFormulaId: (formulaId: string): Promise<string[]> => {
    return ipcRenderer.invoke(
      'database:formula_tags:getTagIdsByFormulaId',
      formulaId
    );
  },

  addTagToFormula: (formulaId: string, tagId: string): Promise<void> => {
    return ipcRenderer.invoke(
      'database:formula_tags:addTagToFormula',
      formulaId,
      tagId
    );
  },

  deleteTagFromFormula: (formulaId: string, tagId: string): Promise<void> => {
    return ipcRenderer.invoke(
      'database:formula_tags:deleteTagFromFormula',
      formulaId,
      tagId
    );
  },
});

contextBridge.exposeInMainWorld('formulasTableApi', {
  getAll: (): Promise<formulas[]> => {
    return ipcRenderer.invoke('database:formulas:getAll');
  },

  getUniqueByUuid: (uuid: string): Promise<formulas | null> => {
    return ipcRenderer.invoke('database:formulas:getUniqueByUuid', uuid);
  },

  getManyByName: (name: string): Promise<formulas[]> => {
    return ipcRenderer.invoke('database:formulas:getManyByName', name);
  },

  insertOne: (formula: Prisma.formulasCreateManyInput): Promise<string> => {
    return ipcRenderer.invoke('database:formulas:insertOne', formula);
  },

  insertMany: (formulas: Prisma.formulasCreateManyInput[]): Promise<void> => {
    return ipcRenderer.invoke('database:formulas:insertMany', formulas);
  },

  deleteUniqueByUuid: (uuid: string): Promise<void> => {
    return ipcRenderer.invoke('database:formulas:deleteUniqueByUuid', uuid);
  },

  updateUniqueByUuid: (
    uuid: string,
    data: Prisma.formulasUpdateInput
  ): Promise<formulas> => {
    return ipcRenderer.invoke(
      'database:formulas:updateUniqueByUuid',
      uuid,
      data
    );
  },
});

contextBridge.exposeInMainWorld('messagesTableApi', {
  getAll: (): Promise<messages[]> => {
    return ipcRenderer.invoke('database:messages:getAll');
  },

  getManyByConversationId: (conversationId: string): Promise<messages[]> => {
    return ipcRenderer.invoke(
      'database:messages:getManyByConversationId',
      conversationId
    );
  },

  insertOne: (message: Prisma.messagesCreateManyInput): Promise<string> => {
    return ipcRenderer.invoke('database:messages:insertOne', message);
  },

  deleteManyByConversationId: (conversationId: string): Promise<void> => {
    return ipcRenderer.invoke(
      'database:messages:deleteManyByConversationId',
      conversationId
    );
  },
});

contextBridge.exposeInMainWorld('tagsTableApi', {
  getAll: (): Promise<tags[]> => {
    return ipcRenderer.invoke('database:tags:getAll');
  },

  getUniqueByUuid: (uuid: string): Promise<tags | null> => {
    return ipcRenderer.invoke('database:tags:getUniqueByUuid', uuid);
  },

  getManyByName: (name: string): Promise<tags[]> => {
    return ipcRenderer.invoke('database:tags:getManyByName', name);
  },

  insertOne: (tag: Prisma.tagsCreateManyInput): Promise<string> => {
    return ipcRenderer.invoke('database:tags:insertOne', tag);
  },

  insertMany: (tags: Prisma.tagsCreateManyInput[]): Promise<void> => {
    return ipcRenderer.invoke('database:tags:insertMany', tags);
  },

  deleteUniqueByUuid: (uuid: string): Promise<void> => {
    return ipcRenderer.invoke('database:tags:deleteUniqueByUuid', uuid);
  },

  setColorByUuid: (uuid: string, color: string): Promise<void> => {
    return ipcRenderer.invoke('database:tags:setColorByUuid', uuid, color);
  },
});

contextBridge.exposeInMainWorld('servicesApi', {
  getJsonConfig: (configName: string): Promise<object> => {
    return ipcRenderer.invoke('services:getJsonConfig', configName);
  },

  saveJsonConfig: (configName: string, config: object): Promise<void> => {
    return ipcRenderer.invoke('services:saveJsonConfig', configName, config);
  },

  isConfigExist: (configName: string): Promise<boolean> => {
    return ipcRenderer.invoke('services:isConfigExist', configName);
  },
});

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string | undefined) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text!;
  };

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});
