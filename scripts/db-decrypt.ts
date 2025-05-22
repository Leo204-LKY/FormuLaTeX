import * as path from 'path';
import * as fs from 'fs';
import { decryptFile } from '../src/server/utils/crypto/cipher';
import { getAppDataDirectory } from '../src/server/services/file-service';

const projectRoot = path.resolve(__dirname, '..');
const decryptedPath = path.join(projectRoot, 'scripts', 'dev.db');
const appDataDir = getAppDataDirectory();
const encryptedPath = path.join(appDataDir, 'encrypted-data.db');

if (!fs.existsSync(encryptedPath)) {
  console.error('Encrypted database file not found at:', encryptedPath);
  process.exit(1);
}

console.log('Decrypting database...');
decryptFile(encryptedPath, decryptedPath, undefined, 0o600);
console.log('Database decrypted successfully at', decryptedPath);
