import { getCurrentFormatTime } from '../../utils';
import { getAppDataDirectory } from './data-file';
import * as fs from 'fs';

/**
 * Save log file to app data directory
 * @param logContent Content to save in the log file
 * @param logFileName Name of the log file (default:')
 */
export function saveLog(
  logContent: string,
  logFileName: string = `${getCurrentFormatTime('yyyy-MM-dd-HH-mm-ss')}-log`
) {
  const appDataDir = getAppDataDirectory();
  const logFilePath = `${appDataDir}/logs/${logFileName}.txt`;

  // Ensure the logs directory exists
  if (!fs.existsSync(`${appDataDir}/logs`)) {
    fs.mkdirSync(`${appDataDir}/logs`, { recursive: true });
  }

  fs.writeFileSync(logFilePath, logContent, { encoding: 'utf-8' });
}
