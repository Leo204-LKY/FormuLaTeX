import axios from 'axios';
import * as crypto from 'crypto';
import FormData from 'form-data';
import * as fs from 'fs/promises'; // 使用 Promise API
import * as path from 'path';
const BASE_URL = 'https://server.simpletex.cn/api/latex_ocr_turbo'; // Lightweight Model
// const BASE_URL = 'https://server.simpletex.cn/api/latex_ocr'; // Standard Model
const APP_ID = '';
const APP_SECRET = '';

// Get a random 16-character string (upper/lowercase letters + digits)
function getRandomStr(): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from(
    { length: 16 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}

// Get current timestamp (in seconds)
function getCurrentTimestamp(): number {
  return Math.floor(Date.now() / 1000);
}

// Generate headers with signature
function getRequestHeaders(
  data: Record<string, string | number | boolean>,
  appId: string,
  appSecret: string
): Record<string, string> {
  const headers: Record<string, string> = {
    timestamp: getCurrentTimestamp().toString(),
    'random-str': getRandomStr(),
    'app-id': appId,
  };

  const merged = { ...headers, ...data };
  const sortedKeys = Object.keys(merged).sort();

  const preSignString =
    sortedKeys.map((key) => `${key}=${merged[key]}`).join('&') +
    `&secret=${appSecret}`;
  const md5sum = crypto.createHash('md5').update(preSignString).digest('hex');

  headers['sign'] = md5sum;
  return headers;
}

// Main function to run the request
export async function convertImageToLatex(filePath: string): Promise<string> {
  try {
    // 1. Check if file exists
    const stats = await fs.stat(filePath);
    console.log('success:', {
      path: filePath,
      size: stats.size,
      lastModified: stats.mtime,
    });

    // 2. Read file
    const imageBuffer = await fs.readFile(filePath);

    // 3. Prepare FormData
    const form = new FormData();
    form.append('file', imageBuffer, path.basename(filePath));

    // 4. Generate headers
    const data: Record<string, string | number | boolean> = {};
    const headers = getRequestHeaders(data, APP_ID, APP_SECRET);

    // 5. Send request
    const response = await axios.post(BASE_URL, form, {
      headers: {
        ...headers,
        ...form.getHeaders(),
      },
    });

    if (!response.data.res) {
      throw new Error('API error');
    }

    return response.data.res.latex;
  } catch (error) {
    console.error('error:', {
      path: filePath,
      error: error instanceof Error ? error.message : String(error),
    });
    throw new Error(`error: ${filePath}`);
  }
}
