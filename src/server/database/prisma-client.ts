import path from 'path';
import fs from 'fs';
import { PrismaClient } from './generated';
import { getAppDataDirectory, getSafeTempDir } from '../services';
import { createTempDecryptedDB, saveEncryptedDB } from './temp-db-manager';
import { getRandomStr } from '../utils';

const encryptedDbPath = path.join(getAppDataDirectory(), 'encrypted-data.db');
let tempDbPath: string | undefined;

let prisma: PrismaClient | undefined;

/**
 * Get prisma client instance, if not created yet, create a new one
 * @returns Prisma client instance
 */
export function getPrismaClient(): PrismaClient {
  if (!prisma) {
    const tempDir = getSafeTempDir();
    const tempDbName = `decrypted-${getRandomStr(12)}.sqlite`;
    tempDbPath = path.join(tempDir, tempDbName);

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // Check if the encrypted database file exists
    if (!fs.existsSync(encryptedDbPath)) {
      // If the encrypted database file does not exist, create a new one

      prisma = new PrismaClient({
        datasources: { db: { url: `file:${tempDbPath}` } },
      });

      // Trigger a connection to ensure that the database file is created
      prisma.$connect().then(() => {
        saveData();
      });
    } else {
      createTempDecryptedDB(encryptedDbPath, tempDbPath);
      prisma = new PrismaClient({
        datasources: { db: { url: `file:${tempDbPath}` } },
      });
    }
  }

  return prisma;
}

/**
 * Save encrypted database file from temp dir
 * @param tempPath Decrypted database file path
 * @param savePath Encrypt database file path
 */
export function saveData(
  tempPath = tempDbPath,
  savePath = encryptedDbPath
): void {
  if (tempPath) {
    saveEncryptedDB(savePath, tempPath);
  } else {
    console.warn('No temp database path found. Cannot save data.');
  }
}
