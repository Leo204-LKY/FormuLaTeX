import path from 'path';
import fs from 'fs';
import { convertImageToLatex } from '../../../server/api';
import {
  getAppDataDirectory,
  saveEncryptedJsonConfig,
} from '../../../server/services';

describe('SimpleTex API Tests', () => {
  const imagePath = path.resolve(__dirname, 'images', 'E=mc^2.jpg');
  const testConfigPath = path.resolve(__dirname, 'secrets.json');
  const encryptedConfigPath = path.join(getAppDataDirectory(), 'config.json');

  beforeAll(() => {
    if (!fs.existsSync(testConfigPath)) {
      throw new Error(
        'Test secret file secrets.json not found, copy and rename secret.json.template to secret.json and set secret for testing'
      );
    }

    const configJson = fs.readFileSync(testConfigPath, { encoding: 'utf-8' });
    const configObject = JSON.parse(configJson);
    saveEncryptedJsonConfig('simpletex', configObject);
  });

  afterAll(() => {
    if (fs.existsSync(encryptedConfigPath)) {
      fs.unlinkSync(encryptedConfigPath);
    }
  });

  describe('formula recognition', () => {
    it('should correctly recognite the formula as E=mc^{2}', async () => {
      const result = await convertImageToLatex(imagePath);

      expect(result.latex).toEqual('E=mc^{2}');
    }, 15000);
  });
});
