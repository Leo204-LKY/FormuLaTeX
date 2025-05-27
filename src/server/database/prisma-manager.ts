import path from 'path';
import fs from 'fs';
import { PrismaClient } from '@prisma/client';
import { getSafeTempDir } from '../services';
import { getAppDataDirectory } from '../services/file-service';
import { createTempDecryptedDB, saveEncryptedDB } from './temp-db-manager';
import { getRandomStr } from '../utils';
import { app } from 'electron';

const encryptedDbPath = path.join(getAppDataDirectory(), 'encrypted-data.db');
const rootDir = path.resolve(__dirname, '..', '..', '..');
const isDev = !app.isPackaged; // Check if the app is in development mode
let tempDbPath: string | undefined;

let prisma: PrismaClient | undefined;

/**
 * Get prisma client instance, if not created yet, create a new one
 * @returns Prisma client instance
 */
export async function getPrismaClient(): Promise<PrismaClient> {
  console.log('Getting Prisma client...');

  if (!prisma) {
    const tempDir = path.resolve(getSafeTempDir(), 'formulatex');
    const tempDbName = `decrypted-${getRandomStr(12)}.sqlite`;
    tempDbPath = path.join(tempDir, tempDbName);

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // Check if the encrypted database file exists
    if (!fs.existsSync(encryptedDbPath)) {
      console.log('Encrypted database file not found. Creating a new one...');

      // Ensure the temp directory exists
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      let templateDbPath: string;

      if (isDev) {
        templateDbPath = path.join(rootDir, 'dist', 'template.db');
      } else {
        templateDbPath = path.join(
          (process as NodeJS.Process & { resourcesPath?: string })
            .resourcesPath!,
          'template.db'
        );
      }

      if (!fs.existsSync(templateDbPath)) {
        console.error('Template database file not found at:', templateDbPath);
        throw new Error(
          'Template database file not found at: ' + templateDbPath
        );
      }

      fs.copyFileSync(templateDbPath, tempDbPath);
      console.log('Database initialized successfully at: ', tempDbPath);

      // Instantiate PrismaClient
      prisma = new PrismaClient({
        datasources: { db: { url: `file:${tempDbPath}` } },
      });
      await prisma.$connect();

      // Default tags
      await prisma.tags.createMany({
        data: [
          { tag_id: 'History', name: 'History' },
          { tag_id: 'Common', name: 'Common' },
          { tag_id: 'Math', name: 'Math' },
          { tag_id: 'Physics', name: 'Physics' },
        ],
      });

      saveData();
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
 * Close the Prisma client connection
 */
export async function closePrismaClient(): Promise<void> {
  if (prisma) {
    await prisma.$disconnect();
    saveData();
    console.log('Prisma client disconnected.');
    prisma = undefined;
  }
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
    console.warn('No temporary database path found. Cannot save data.');
  }
}
