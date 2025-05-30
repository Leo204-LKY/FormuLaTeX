import path from 'path';
import fs, { writeFileSync } from 'fs';
import { getAppDataDirectory } from './file-service';
import { decryptJson, encryptJson } from '../utils';

const APP_DATA_DIR = getAppDataDirectory();

/**
 * Decrypt and get JSON config from config path
 * @param configName Config file name
 * @example `scrert` means `secret.json`
 */
export function getEncryptedJsonConfig(configName: string): object {
  const configPath = path.join(APP_DATA_DIR, `${configName}.json`);

  if (fs.existsSync(configPath)) {
    const encryptedConfig = fs.readFileSync(configPath, {
      encoding: 'utf-8',
      flag: 'r',
    });

    const decrypted = decryptJson(encryptedConfig);

    return decrypted ? decrypted : {};
  } else {
    return {};
  }
}

/**
 * Decrypt and save config object to JSON
 * @param configName Config file name
 * @param config Config object
 * @example `scrert` means `secret.json`
 */
export function saveEncryptedJsonConfig(configName: string, config: object) {
  const configPath = path.join(APP_DATA_DIR, `${configName}.json`);
  const encrypted = encryptJson(config);

  writeFileSync(configPath, encrypted, { encoding: 'utf-8' });
}

/**
 * Get whether the config file exists
 * @param configName Config file name
 * @example `scrert` means `secret.json`
 * @return {boolean} Whether the config file exists
 */
export function isConfigExist(configName: string): boolean {
  const configPath = path.join(APP_DATA_DIR, `${configName}.json`);
  return fs.existsSync(configPath);
}
