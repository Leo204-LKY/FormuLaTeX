/**
 * Get crypto key from device ID
 */
import * as crypto from 'crypto';

const ALGORITHM = 'sha256';

export function generateKeyFromDeviceId(deviceId: string) {
  return crypto.createHash(ALGORITHM).update(deviceId).digest();
}
