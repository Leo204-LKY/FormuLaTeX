/**
 * Decrypt SQLite3 file to system temp dir for access
 */
import path from 'path';
import { addTempFile, getSafeTempDir } from '../services';
import { decryptFile, getRandomStr } from '../utils';

/**
 * Decrypt SQLite3 file to system temp dir for Prisma access
 * @param encryptedDbPath Encrypt database file path
 * @returns Decrypted database file path
 */
export function createTempDecryptedDB(encryptedDbPath: string): string {
  const tempDir = getSafeTempDir();
  const tempDbName = `decrypted-${getRandomStr(12)}.sqlite`;
  const tempDbPath = path.join(tempDir, tempDbName);

  // Decrypt database
  decryptFile(encryptedDbPath, tempDbPath, undefined, 0o600);
  addTempFile(tempDbPath);

  return tempDbPath; // For Prisma conncetion
}
