import {
  encryptJson,
  decryptJson,
  encryptFile,
  decryptFile,
} from '../../../../server/utils/crypto/cipher';
import * as fs from 'fs';
import * as crypto from 'crypto';

describe('Cipher Utility Tests', () => {
  const testData = { key: 'value', number: 123 };
  const testKey = crypto.randomBytes(32); // AES-256 requires a 32-byte key
  const testIv = crypto.randomBytes(16); // IV length for AES-256-CBC is 16 bytes

  describe('encryptJson and decryptJson', () => {
    it('should encrypt and decrypt JSON data correctly', () => {
      const encrypted = encryptJson(testData, testKey, testIv);
      const decrypted = decryptJson(encrypted, testKey);

      expect(decrypted).toEqual(testData);
    });

    it('should return null for invalid decryption', () => {
      const invalidEncryptedData = 'invalid:data';
      const decrypted = decryptJson(invalidEncryptedData, testKey);

      expect(decrypted).toBeNull();
    });
  });

  describe('encryptFile and decryptFile', () => {
    const testFilePath = './test.txt';
    const encryptedFilePath = './test.enc';
    const decryptedFilePath = './test.dec';

    beforeAll(() => {
      const randomContent = `Random content: ${crypto.randomBytes(16).toString('hex')}`;
      fs.writeFileSync(testFilePath, randomContent);
    });

    afterAll(() => {
      [testFilePath, encryptedFilePath, decryptedFilePath].forEach((file) => {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file);
        }
      });
    });

    it('should encrypt and decrypt a file correctly', (done) => {
      const iv = encryptFile(testFilePath, encryptedFilePath, testKey, testIv);

      expect(iv).toBeDefined();
      expect(fs.existsSync(encryptedFilePath)).toBe(true);

      decryptFile(
        encryptedFilePath,
        decryptedFilePath,
        testKey,
        testIv.toString('hex')
      );

      const originalContent = fs.readFileSync(testFilePath, 'utf-8');
      const decryptedContent = fs.readFileSync(decryptedFilePath, 'utf-8');

      expect(decryptedContent).toEqual(originalContent);
      done();
    });

    it('should handle decryption failure gracefully', () => {
      const invalidIv = crypto.randomBytes(16).toString('hex');
      expect(() => {
        decryptFile(encryptedFilePath, decryptedFilePath, testKey, invalidIv);
      }).not.toThrow();
    });
  });
});
