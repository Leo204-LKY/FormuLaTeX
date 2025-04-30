import axios from 'axios';
import * as crypto from 'crypto';
import FormData from 'form-data';
import * as fs from 'fs/promises'; // 使用 Promise API
import { getCurrentTimestamp, getRandomStr } from '../utils';

const BASE_URL = 'https://server.simpletex.cn/api/latex_ocr_turbo'; // Lightweight Model
// const BASE_URL = 'https://server.simpletex.cn/api/latex_ocr'; // Standard Model
const APP_ID = '';
const APP_SECRET = '';
const TIMEOUT = 10000;

/**
 * SimpleTex API response interface
 * Contains necessary data of a SimpleTex response
 */
export interface SimpleTexResponse {
  /**
   * LaTeX code of a recognized image
   * @example "E=mc^{2}"
   */
  latex: string;

  /**
   * The confidence of the formula
   * @example 0.9272882342338562
   */
  confidence?: number;

  /**
   * ID of this request
   * @example "tr_xxxxxxxxxx"
   */
  requestId?: string;
}

// Generate headers with signature
function getRequestHeaders(
  data: Record<string, string | number | boolean>,
  appId: string,
  appSecret: string
): Record<string, string> {
  const headers: Record<string, string> = {
    timestamp: getCurrentTimestamp().toString(),
    'random-str': getRandomStr(16),
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

/**
 * Recognize formula using SimpleTex API
 * @param filePath Image file path
 * @param app_id SimpleTex APP ID
 * @param app_secret SimpleTex App Secret
 * @param timeout Request timeout (ms)
 */
export async function convertImageToLatex(
  filePath: string,
  app_id?: string,
  app_secret?: string,
  timeout?: number
): Promise<SimpleTexResponse>;
/**
 * Recognize formula using SimpleTex API
 * @param imageBuffer Image buffer
 * @param app_id SimpleTex APP ID
 * @param app_secret SimpleTex App Secret
 * @param timeout Request timeout (ms)
 */
export async function convertImageToLatex(
  imageBuffer: Buffer,
  app_id?: string,
  app_secret?: string,
  timeout?: number
): Promise<SimpleTexResponse>;

// Main function to run the request
export async function convertImageToLatex(
  input: string | Buffer,
  app_id: string = APP_ID,
  app_secret: string = APP_SECRET,
  timeout: number = TIMEOUT
): Promise<SimpleTexResponse> {
  try {
    let imageBuffer: Buffer;

    if (typeof input === 'string') {
      // Case 1: File path input
      const stats = await fs.stat(input);
      console.log('success:', {
        path: input,
        size: stats.size,
        lastModified: stats.mtime,
      });

      // Read file
      imageBuffer = await fs.readFile(input);
    } else {
      // Case 2: Image buffer input
      imageBuffer = input;
    }

    // Prepare FormData
    const form = new FormData();
    form.append('file', imageBuffer, 'image.jpg');

    // Generate headers
    const data: Record<string, string | number | boolean> = {};
    const headers = getRequestHeaders(data, app_id, app_secret);

    // Send request
    const response = await axios.post(BASE_URL, form, {
      headers: {
        ...headers,
        ...form.getHeaders(),
      },
      timeout: timeout,
    });

    if (!response.data.res) {
      throw new Error('API error');
    }

    return {
      latex: response.data.res.latex,
      confidence: response.data.res.conf,
      requestId: response.data.request_id,
    } as SimpleTexResponse;
  } catch (e) {
    console.error('error:', e);
    throw new Error(`error: ${e}`);
  }
}
