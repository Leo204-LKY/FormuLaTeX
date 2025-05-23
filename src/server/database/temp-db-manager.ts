/**
 * Decrypt SQLite3 file to system temp dir for access
 */
import { addTempFile } from '../services';
import { encryptFile, decryptFile } from '../utils';

/**
 * Decrypt SQLite3 file to system temp dir for Prisma access
 * @param encryptedDbPath Encrypt database file path
 */
export function createTempDecryptedDB(
  encryptedDbPath: string,
  tempDbPath: string
): void {
  // Decrypt database
  decryptFile(encryptedDbPath, tempDbPath, undefined, 0o600);
  addTempFile(tempDbPath);
}

/**
 * Encrypt and save SQLite3 file from system temp dir to app data dir
 * @param tempDbPath Decrypted database file path
 * @param encryptedDbPath Encrypt database file path
 */
export function saveEncryptedDB(
  encryptedDbPath: string,
  tempDbPath: string
): void {
  // Encrypt database
  encryptFile(tempDbPath, encryptedDbPath, undefined, undefined, 0o600);
}
