import path from 'path';
// import fs from 'fs';
import { convertImageToLatex } from '../../../server/api';

describe('SimpleTex API Tests', () => {
  const imagePath = path.resolve(__dirname, 'images', 'E=mc^2.jpg');

  describe('formula recognition', () => {
    it('should correctly recognite the formula as E=mc^{2}', async () => {
      const result = await convertImageToLatex(imagePath);

      expect(result).toEqual('E=mc^{2}');
    });
  });
});
