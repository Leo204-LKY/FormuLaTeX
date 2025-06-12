import { getCurrentFormatTime } from '../../utils';
import { getAppDataDirectory } from './data-file';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Save log file to app data directory
 * @param logContent Content to save in the log file
 * @param logFileName Name of the log file (default: yyyy-MM-dd-HH-mm-ss-log)
 * @returns The path to the saved log file
 */
export function saveLog(
  logContent: string,
  logFileName: string = `${getCurrentFormatTime('yyyy-MM-dd-HH-mm-ss')}-log`
) {
  const appDataDir = getAppDataDirectory();
  const logFilePath = path.join(appDataDir, 'logs', `${logFileName}.txt`);

  // Ensure the logs directory exists
  if (!fs.existsSync(path.join(appDataDir, 'logs'))) {
    fs.mkdirSync(path.join(appDataDir, 'logs'), { recursive: true });
  }

  fs.writeFileSync(logFilePath, logContent, { encoding: 'utf-8' });

  return logFilePath;
}
