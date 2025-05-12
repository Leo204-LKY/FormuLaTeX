/**
 * Convert key string into buffer
 */
import * as crypto from 'crypto';

const ALGORITHM = 'sha256';

/**
 * Convert key string into buffer
 * @param key Key string
 * @returns Key buffer
 */
export function generateKey(key: string): Buffer {
  return crypto.createHash(ALGORITHM).update(key).digest();
}
