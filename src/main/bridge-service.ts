import { BrowserWindow, ipcMain } from 'electron';
import {
  ChatMessage,
  FavouritesTable,
  FormulaConversationsTable,
  FormulaInterpretationsTable,
  FormulasTable,
  FormulaTagsTable,
  getEncryptedJsonConfig,
  MessagesTable,
  saveEncryptedJsonConfig,
  TagsTable,
} from '../server';
import { DeepSeekChatClient, DeepSeekModel } from '../server/api/chat-client';
import { Prisma } from '../server/database/generated';

// *******************************************
// DeepSeek Chat Client APIs
// *******************************************

const deepseekClient = new DeepSeekChatClient();

ipcMain.handle(
  'deepseek:ask',
  async (
    event,
    question: string,
    history: ChatMessage[],
    model?: DeepSeekModel
  ) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    try {
      for await (const chunk of deepseekClient.ask(question, history, model)) {
        win?.webContents.send('deepseek:ask:chunk', chunk);
      }
      win?.webContents.send('deepseek:ask:end');
      return { success: true };
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      win?.webContents.send('deepseek:ask:error', errorMessage);
      return { success: false, error: errorMessage };
    }
  }
);

// *******************************************
// Database APIs
// *******************************************

// favourites table

ipcMain.handle('database:favourites:getAll', async () => {
  return await FavouritesTable.getAll();
});

ipcMain.handle(
  'database:favourites:insertOneByFormulaUuid',
  async (event, formulaUuid: string) => {
    return await FavouritesTable.insertOneByFormulaUuid(formulaUuid);
  }
);

ipcMain.handle(
  'database:favourites:deleteUniqueByFormulaUuid',
  async (event, formulaUuid: string) => {
    return await FavouritesTable.deleteUniqueByFormulaUuid(formulaUuid);
  }
);

ipcMain.handle(
  'database:favourites:deleteUniqueByFavouriteUuid',
  async (event, favouriteUuid: string) => {
    return await FavouritesTable.deleteUniqueByFavouriteUuid(favouriteUuid);
  }
);

// formula_conversations table

ipcMain.handle('database:formula_conversations:getAll', async () => {
  return await FormulaConversationsTable.getAll();
});

ipcMain.handle(
  'database:formula_conversations:insertOne',
  async (
    event,
    formulaConversation: Prisma.formula_conversationsCreateManyInput
  ) => {
    return await FormulaConversationsTable.insertOne(formulaConversation);
  }
);

ipcMain.handle(
  'database:formula_conversations:deleteUniqueByUuid',
  async (event, uuid: string) => {
    return await FormulaConversationsTable.deleteUniqueByUuid(uuid);
  }
);

// formula_interpretations table

ipcMain.handle('database:formula_interpretations:getAll', async () => {
  return await FormulaInterpretationsTable.getAll();
});

ipcMain.handle(
  'database:formula_interpretations:getUniqueByUuid',
  (event, uuid: string) => {
    return FormulaInterpretationsTable.getUniqueByUuid(uuid);
  }
);

ipcMain.handle(
  'database:formula_interpretations:insertOne',
  async (
    event,
    formulaInterpretation: Prisma.formula_interpretationsCreateManyInput
  ) => {
    return await FormulaInterpretationsTable.insertOne(formulaInterpretation);
  }
);

ipcMain.handle(
  'database:formula_interpretations:insertMany',
  async (
    event,
    formulaInterpretations: Prisma.formula_interpretationsCreateManyInput[]
  ) => {
    return await FormulaInterpretationsTable.insertMany(formulaInterpretations);
  }
);

ipcMain.handle(
  'database:formula_interpretations:deleteOne',
  async (event, uuid: string) => {
    return await FormulaInterpretationsTable.deleteOne(uuid);
  }
);

// formula_tags table

ipcMain.handle('database:formula_tags:getAll', async () => {
  return await FormulaTagsTable.getAll();
});

ipcMain.handle(
  'database:formula_tags:getFormulaIdsByTagId',
  async (event, tagId: string) => {
    return await FormulaTagsTable.getFormulaIdsByTagId(tagId);
  }
);

ipcMain.handle(
  'database:formula_tags:getTagIdsByFormulaId',
  async (event, formulaId: string) => {
    return await FormulaTagsTable.getTagIdsByFormulaId(formulaId);
  }
);

ipcMain.handle(
  'database:formula_tags:addTagToFormula',
  async (event, formulaId: string, tagId: string) => {
    return await FormulaTagsTable.addTagToFormula(formulaId, tagId);
  }
);

ipcMain.handle(
  'database:formula_tags:deleteTagFromFormula',
  async (event, formulaId: string, tagId: string) => {
    return await FormulaTagsTable.deleteTagFromFormula(formulaId, tagId);
  }
);

// formulas table

ipcMain.handle('database:formulas:getAll', async () => {
  return await FormulasTable.getAll();
});

ipcMain.handle(
  'database:formulas:getUniqueByUuid',
  async (event, uuid: string) => {
    return await FormulasTable.getUniqueByUuid(uuid);
  }
);

ipcMain.handle(
  'database:formulas:getManyByName',
  async (event, name: string) => {
    return await FormulasTable.getManyByName(name);
  }
);

ipcMain.handle(
  'database:formulas:insertOne',
  async (event, formula: Prisma.formulasCreateManyInput) => {
    return await FormulasTable.insertOne(formula);
  }
);

ipcMain.handle(
  'database:formulas:insertMany',
  async (event, formulas: Prisma.formulasCreateManyInput[]) => {
    return await FormulasTable.insertMany(formulas);
  }
);

ipcMain.handle(
  'database:formulas:deleteUniqueByUuid',
  async (event, uuid: string) => {
    return await FormulasTable.deleteUniqueByUuid(uuid);
  }
);

// message table

ipcMain.handle('database:messages:getAll', async () => {
  return await MessagesTable.getAll();
});

ipcMain.handle(
  'database:messages:getManyByConversationId',
  async (event, conversationId: string) => {
    return await MessagesTable.getManyByConversationId(conversationId);
  }
);

ipcMain.handle(
  'database:messages:insertOne',
  async (event, message: Prisma.messagesCreateManyInput) => {
    return await MessagesTable.insertOne(message);
  }
);

ipcMain.handle(
  'database:messages:deleteManyByConversationId',
  async (event, conversationId: string) => {
    return await MessagesTable.deleteManyByConversationId(conversationId);
  }
);

// tags table

ipcMain.handle('database:tags:getAll', async () => {
  return await TagsTable.getAll();
});

ipcMain.handle('database:tags:getUniqueByUuid', async (event, uuid: string) => {
  return await TagsTable.getUniqueByUuid(uuid);
});

ipcMain.handle('database:tags:getManyByName', async (event, name: string) => {
  return await TagsTable.getManyByName(name);
});

ipcMain.handle(
  'database:tags:insertOne',
  async (event, tag: Prisma.tagsCreateManyInput) => {
    return await TagsTable.insertOne(tag);
  }
);

ipcMain.handle(
  'database:tags:insertMany',
  async (event, tags: Prisma.tagsCreateManyInput[]) => {
    return await TagsTable.insertMany(tags);
  }
);

ipcMain.handle('database:tags:deleteOne', async (event, uuid: string) => {
  return await TagsTable.deleteOne(uuid);
});

ipcMain.handle(
  'database:tags:setColorByUuid',
  async (event, uuid: string, color: string) => {
    return await TagsTable.setColorByUuid(uuid, color);
  }
);

// *****************************************
// Services APIs
// *****************************************

ipcMain.handle('services:getJsonConfig', async (event, configName: string) => {
  return getEncryptedJsonConfig(configName);
});

ipcMain.handle(
  'services:saveJsonConfig',
  async (event, configName: string, config: object) => {
    return saveEncryptedJsonConfig(configName, config);
  }
);
