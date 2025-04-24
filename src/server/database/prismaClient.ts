import path from 'path';
import { PrismaClient } from '../generated/prisma';
import { getAppDataDirectory } from '../services';
import { createTempDecryptedDB } from './temp-db-manager';

const encryptedDbPath = path.join(getAppDataDirectory(), 'encrypted-data.db');

let prisma: PrismaClient | undefined;

/**
 * Get prisma client instance, if not created yet, create a new one
 * @returns Prisma client instance
 */
export function getPrismaClient(): PrismaClient {
  if (!prisma) {
    const tempDbPath = createTempDecryptedDB(encryptedDbPath);
    prisma = new PrismaClient({
      datasources: { db: { url: `file:${tempDbPath}` } },
    });
  }

  return prisma;
}
