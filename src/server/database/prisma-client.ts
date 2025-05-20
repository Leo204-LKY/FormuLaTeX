import path from 'path';
import { PrismaClient } from './generated';
import { getAppDataDirectory } from '../services';
import { createTempDecryptedDB, saveEncryptedDB } from './temp-db-manager';

const encryptedDbPath = path.join(getAppDataDirectory(), 'encrypted-data.db');
let tempDbPath: string | undefined;

let prisma: PrismaClient | undefined;

/**
 * Get prisma client instance, if not created yet, create a new one
 * @returns Prisma client instance
 */
export function getPrismaClient(): PrismaClient {
  if (!prisma) {
    tempDbPath = createTempDecryptedDB(encryptedDbPath);
    prisma = new PrismaClient({
      datasources: { db: { url: `file:${tempDbPath}` } },
    });
  }

  return prisma;
}

/**
 * Save encrypted database file from temp dir
 */
export function saveData(): void {
  if (tempDbPath) {
    saveEncryptedDB(encryptedDbPath, tempDbPath);
  } else {
    console.warn('No temp database path found. Cannot save data.');
  }
}
