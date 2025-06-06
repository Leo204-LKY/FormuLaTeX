import { BrowserWindow, ipcMain, IpcMainInvokeEvent } from 'electron';
import {
  AppSettingsConfig,
  ChatMessage,
  convertImageToLatex,
  FavouritesTable,
  FormulaConversationsTable,
  FormulaInterpretationsTable,
  FormulasTable,
  FormulaTagsTable,
  getAppSetting,
  getEncryptedJsonConfig,
  isConfigExist,
  MessagesTable,
  openUrlInBrowser,
  saveAppSetting,
  saveEncryptedJsonConfig,
  saveLog,
  showFileInFolder,
  SimpleTexResponse,
  TagsTable,
} from '../server';
import { DeepSeekChatClient, DeepSeekModel } from '../server/api/chat-client';
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

type UnknownFunction<T extends unknown[], R> = (
  event: IpcMainInvokeEvent,
  ...args: T
) => Promise<R> | R;

function safeIpcHandler<T extends unknown[], R>(
  handler: UnknownFunction<T, R>
): UnknownFunction<T, R> {
  return async (event: IpcMainInvokeEvent, ...args: T): Promise<R> => {
    try {
      return await handler(event, ...args);
    } catch (error) {
      const e = error instanceof Error ? error : new Error('Unknown error');

      console.error('[IPC Error]', e);

      const win = BrowserWindow.getAllWindows()[0];
      let message: string;
      let stack: string | undefined;

      if (error instanceof Error) {
        message = error.message;
        stack = error.stack;
      } else {
        message = String(error);
        stack = undefined;
      }

      const logFilePath = saveLog(`${message}\n${stack}`);

      win?.webContents.send(
        'backend:error',
        {
          type: 'backendError',
          message,
          stack,
        },
        logFilePath
      );

      throw {
        message: e.message,
        stack: e.stack,
        code: (e as { code?: string }).code ?? 'UNKNOWN_ERROR',
      };
    }
  };
}

// *******************************************
// DeepSeek Chat Client APIs
// *******************************************

const deepseekClient = new DeepSeekChatClient();

ipcMain.handle(
  'deepseek:ask',
  safeIpcHandler<
    [string, ChatMessage[], DeepSeekModel?],
    { success: boolean; error?: string }
  >(async (event, question, history, model) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    try {
      for await (const chunk of deepseekClient.ask(question, history, model)) {
        win?.webContents.send('deepseek:ask:chunk', chunk);
      }
      win?.webContents.send('deepseek:ask:end');
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      win?.webContents.send('deepseek:ask:error', errorMessage);
      return { success: false, error: errorMessage };
    }
  })
);

ipcMain.handle(
  'deepseek:updateApiKey',
  safeIpcHandler<[string], void>(async (event, apiKey: string) => {
    deepseekClient.updateApiKey(apiKey);
  })
);

// *******************************************
// SimpleTex APIs
// *******************************************

ipcMain.handle(
  'simpletex:convert:path',
  safeIpcHandler<
    [string, string?, string?, number?],
    Promise<SimpleTexResponse>
  >(
    async (
      event,
      filePath: string,
      appId?: string,
      appSecret?: string,
      timeout?: number
    ) => {
      return await convertImageToLatex(filePath, appId, appSecret, timeout);
    }
  )
);

ipcMain.handle(
  'simpletex:convert:imageBuffer',
  safeIpcHandler<
    [Buffer, string?, string?, number?],
    Promise<SimpleTexResponse>
  >(
    async (
      event,
      imageBuffer: Buffer,
      appId?: string,
      appSecret?: string,
      timeout?: number
    ) => {
      // Ensure imageBuffer is a Node.js Buffer
      const buf = Buffer.isBuffer(imageBuffer)
        ? imageBuffer
        : Buffer.from(imageBuffer);
      return await convertImageToLatex(buf, appId, appSecret, timeout);
    }
  )
);

// *******************************************
// Database APIs
// *******************************************

// favourites table

ipcMain.handle(
  'database:favourites:getAll',
  safeIpcHandler<[], Promise<favourites[]>>(async () => {
    return await FavouritesTable.getAll();
  })
);

ipcMain.handle(
  'database:favourites:insertOneByFormulaUuid',
  safeIpcHandler<[string], Promise<string>>(
    async (event, formulaUuid: string) => {
      return await FavouritesTable.insertOneByFormulaUuid(formulaUuid);
    }
  )
);

ipcMain.handle(
  'database:favourites:deleteUniqueByFormulaUuid',
  safeIpcHandler<[string], Promise<string | null>>(
    async (event, formulaUuid: string) => {
      return await FavouritesTable.deleteUniqueByFormulaUuid(formulaUuid);
    }
  )
);

ipcMain.handle(
  'database:favourites:deleteUniqueByFavouriteUuid',
  safeIpcHandler<[string], Promise<string | null>>(
    async (event, favouriteUuid: string) => {
      return await FavouritesTable.deleteUniqueByFavouriteUuid(favouriteUuid);
    }
  )
);

// formula_conversations table

ipcMain.handle(
  'database:formula_conversations:getAll',
  safeIpcHandler<[], Promise<formula_conversations[]>>(async () => {
    return await FormulaConversationsTable.getAll();
  })
);

ipcMain.handle(
  'database:formula_conversations:insertOne',
  safeIpcHandler<
    [Prisma.formula_conversationsCreateManyInput],
    Promise<string>
  >(
    async (
      event,
      formulaConversation: Prisma.formula_conversationsCreateManyInput
    ) => {
      return await FormulaConversationsTable.insertOne(formulaConversation);
    }
  )
);

ipcMain.handle(
  'database:formula_conversations:deleteUniqueByUuid',
  safeIpcHandler<[string], Promise<void>>(async (event, uuid: string) => {
    return await FormulaConversationsTable.deleteUniqueByUuid(uuid);
  })
);

ipcMain.handle(
  'database:formula_conversations:updateUniqueByUuid',
  safeIpcHandler<
    [string, Prisma.formula_conversationsUpdateInput],
    Promise<formula_conversations>
  >(
    async (
      event,
      uuid: string,
      data: Prisma.formula_conversationsUpdateInput
    ) => {
      return await FormulaConversationsTable.updateUniqueByUuid(uuid, data);
    }
  )
);

// formula_interpretations table

ipcMain.handle(
  'database:formula_interpretations:getAll',
  safeIpcHandler<[], Promise<formula_interpretations[]>>(async () => {
    return await FormulaInterpretationsTable.getAll();
  })
);

ipcMain.handle(
  'database:formula_interpretations:getUniqueByUuid',
  safeIpcHandler<[string], Promise<formula_interpretations | null>>(
    (event, uuid: string) => {
      return FormulaInterpretationsTable.getUniqueByUuid(uuid);
    }
  )
);

ipcMain.handle(
  'database:formula_interpretations:insertOne',
  safeIpcHandler<
    [Prisma.formula_interpretationsCreateManyInput],
    Promise<string>
  >(
    async (
      event,
      formulaInterpretation: Prisma.formula_interpretationsCreateManyInput
    ) => {
      return await FormulaInterpretationsTable.insertOne(formulaInterpretation);
    }
  )
);

ipcMain.handle(
  'database:formula_interpretations:insertMany',
  safeIpcHandler<
    [Prisma.formula_interpretationsCreateManyInput[]],
    Promise<void>
  >(
    async (
      event,
      formulaInterpretations: Prisma.formula_interpretationsCreateManyInput[]
    ) => {
      return await FormulaInterpretationsTable.insertMany(
        formulaInterpretations
      );
    }
  )
);

ipcMain.handle(
  'database:formula_interpretations:deleteUniqueByUuid',
  safeIpcHandler<[string], Promise<void>>(async (event, uuid: string) => {
    return await FormulaInterpretationsTable.deleteUniqueByUuid(uuid);
  })
);

// formula_tags table

ipcMain.handle(
  'database:formula_tags:getAll',
  safeIpcHandler<[], Promise<formula_tags[]>>(async () => {
    return await FormulaTagsTable.getAll();
  })
);

ipcMain.handle(
  'database:formula_tags:getFormulaIdsByTagId',
  safeIpcHandler<[string], Promise<string[]>>(async (event, tagId: string) => {
    return await FormulaTagsTable.getFormulaIdsByTagId(tagId);
  })
);

ipcMain.handle(
  'database:formula_tags:getTagIdsByFormulaId',
  safeIpcHandler<[string], Promise<string[]>>(
    async (event, formulaId: string) => {
      return await FormulaTagsTable.getTagIdsByFormulaId(formulaId);
    }
  )
);

ipcMain.handle(
  'database:formula_tags:addTagToFormula',
  safeIpcHandler<[string, string], Promise<void>>(
    async (event, formulaId: string, tagId: string) => {
      return await FormulaTagsTable.addTagToFormula(formulaId, tagId);
    }
  )
);

ipcMain.handle(
  'database:formula_tags:deleteTagFromFormula',
  safeIpcHandler<[string, string], Promise<void>>(
    async (event, formulaId: string, tagId: string) => {
      return await FormulaTagsTable.deleteTagFromFormula(formulaId, tagId);
    }
  )
);

// formulas table

ipcMain.handle(
  'database:formulas:getAll',
  safeIpcHandler<[], Promise<formulas[]>>(async () => {
    return await FormulasTable.getAll();
  })
);

ipcMain.handle(
  'database:formulas:getUniqueByUuid',
  safeIpcHandler<[string], Promise<formulas | null>>(
    async (event, uuid: string) => {
      return await FormulasTable.getUniqueByUuid(uuid);
    }
  )
);

ipcMain.handle(
  'database:formulas:getManyByName',
  safeIpcHandler<[string], Promise<formulas[]>>(async (event, name: string) => {
    return await FormulasTable.getManyByName(name);
  })
);

ipcMain.handle(
  'database:formulas:insertOne',
  safeIpcHandler<[Prisma.formulasCreateManyInput], Promise<string>>(
    async (event, formula: Prisma.formulasCreateManyInput) => {
      return await FormulasTable.insertOne(formula);
    }
  )
);

ipcMain.handle(
  'database:formulas:insertMany',
  safeIpcHandler<[Prisma.formulasCreateManyInput[]], Promise<void>>(
    async (event, formulas: Prisma.formulasCreateManyInput[]) => {
      return await FormulasTable.insertMany(formulas);
    }
  )
);

ipcMain.handle(
  'database:formulas:deleteUniqueByUuid',
  safeIpcHandler<[string], Promise<void>>(async (event, uuid: string) => {
    return await FormulasTable.deleteUniqueByUuid(uuid);
  })
);

ipcMain.handle(
  'database:formulas:updateUniqueByUuid',
  safeIpcHandler<[string, Prisma.formulasUpdateInput], Promise<formulas>>(
    async (event, uuid: string, data: Prisma.formulasUpdateInput) => {
      return await FormulasTable.updateUniqueByUuid(uuid, data);
    }
  )
);

// message table

ipcMain.handle(
  'database:messages:getAll',
  safeIpcHandler<[], Promise<messages[]>>(async () => {
    return await MessagesTable.getAll();
  })
);

ipcMain.handle(
  'database:messages:getManyByConversationId',
  safeIpcHandler<[string], Promise<messages[]>>(
    async (event, conversationId: string) => {
      return await MessagesTable.getManyByConversationId(conversationId);
    }
  )
);

ipcMain.handle(
  'database:messages:insertOne',
  safeIpcHandler<[Prisma.messagesCreateManyInput], Promise<string>>(
    async (event, message: Prisma.messagesCreateManyInput) => {
      return await MessagesTable.insertOne(message);
    }
  )
);

ipcMain.handle(
  'database:messages:deleteManyByConversationId',
  safeIpcHandler<[string], Promise<void>>(
    async (event, conversationId: string) => {
      return await MessagesTable.deleteManyByConversationId(conversationId);
    }
  )
);

// tags table

ipcMain.handle(
  'database:tags:getAll',
  safeIpcHandler<[], Promise<tags[]>>(async () => {
    return await TagsTable.getAll();
  })
);

ipcMain.handle(
  'database:tags:getUniqueByUuid',
  safeIpcHandler<[string], Promise<tags | null>>(
    async (event, uuid: string) => {
      return await TagsTable.getUniqueByUuid(uuid);
    }
  )
);

ipcMain.handle(
  'database:tags:getManyByName',
  safeIpcHandler<[string], Promise<tags[]>>(async (event, name: string) => {
    return await TagsTable.getManyByName(name);
  })
);

ipcMain.handle(
  'database:tags:insertOne',
  safeIpcHandler<[Prisma.tagsCreateManyInput], Promise<string>>(
    async (event, tag: Prisma.tagsCreateManyInput) => {
      return await TagsTable.insertOne(tag);
    }
  )
);

ipcMain.handle(
  'database:tags:insertMany',
  safeIpcHandler<[Prisma.tagsCreateManyInput[]], Promise<void>>(
    async (event, tags: Prisma.tagsCreateManyInput[]) => {
      return await TagsTable.insertMany(tags);
    }
  )
);

ipcMain.handle(
  'database:tags:deleteUniqueByUuid',
  safeIpcHandler<[string], Promise<void>>(async (event, uuid: string) => {
    return await TagsTable.deleteUniqueByUuid(uuid);
  })
);

ipcMain.handle(
  'database:tags:setColorByUuid',
  safeIpcHandler<[string, string], Promise<void>>(
    async (event, uuid: string, color: string) => {
      return await TagsTable.setColorByUuid(uuid, color);
    }
  )
);

// *****************************************
// Services APIs
// *****************************************

ipcMain.handle(
  'services:getJsonConfig',
  safeIpcHandler<[string], Promise<object>>(
    async (event, configName: string) => {
      return getEncryptedJsonConfig(configName);
    }
  )
);

ipcMain.handle(
  'services:saveJsonConfig',
  safeIpcHandler<[string, object], Promise<void>>(
    async (event, configName: string, config: object) => {
      return saveEncryptedJsonConfig(configName, config);
    }
  )
);

ipcMain.handle(
  'services:isConfigExist',
  safeIpcHandler<[string], boolean>((event, configName: string) => {
    return isConfigExist(configName);
  })
);

ipcMain.handle(
  'services:getAppSetting',
  safeIpcHandler<[keyof AppSettingsConfig], Promise<string | null>>(
    async (event, settingName: keyof AppSettingsConfig) => {
      return getAppSetting(settingName);
    }
  )
);

ipcMain.handle(
  'services:saveAppSetting',
  safeIpcHandler<[keyof AppSettingsConfig, string], Promise<void>>(
    async (event, settingName: keyof AppSettingsConfig, value: string) => {
      return saveAppSetting(settingName, value);
    }
  )
);

ipcMain.handle(
  'services:saveLog',
  safeIpcHandler<[string, string?], Promise<void>>(
    async (event, logContent: string, logFileName?: string) => {
      return saveLog(logContent, logFileName);
    }
  )
);

ipcMain.handle(
  'services:showFileInFolder',
  safeIpcHandler<[string], Promise<void>>(async (event, filePath: string) => {
    return showFileInFolder(filePath);
  })
);

ipcMain.handle(
  'services:openUrlInBrowser',
  safeIpcHandler<[string], Promise<void>>(async (event, url: string) => {
    return openUrlInBrowser(url);
  })
);
