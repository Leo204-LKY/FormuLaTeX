import * as path from 'path';
import * as fs from 'fs';
import { encryptFile } from '../src/server/utils/crypto/cipher';
import { getAppDataDirectory } from '../src/server/services/file-service';

const projectRoot = path.resolve(__dirname, '..');
const generatedPath = path.join(projectRoot, 'scripts', 'dev.db');
const appDataDir = getAppDataDirectory();
const encryptedPath = path.join(appDataDir, 'encrypted-data.db');

if (!fs.existsSync(generatedPath)) {
  console.error('Database file not found at: ', generatedPath);
  process.exit(1);
}

if (!fs.existsSync(appDataDir)) {
  fs.mkdirSync(appDataDir, { recursive: true });
}

console.log('Encrypting database...');
encryptFile(generatedPath, encryptedPath, undefined, undefined, 0o600);
console.log('Database encrypted successfully at ', encryptedPath);
