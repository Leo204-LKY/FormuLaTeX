import os from 'os';
import path from 'path';

/**
 * Get app data directory path base on platform
 * @param appName App name to get the data directory for. Default is 'FormuLaTeX'.
 * @returns App data directory path as a string.
 */
export function getAppDataDirectory(appName: string = 'FormuLaTeX'): string {
  const platform = os.platform();
  let baseDir: string;

  if (platform === 'darwin') {
    // macOS
    baseDir = path.join(os.homedir(), 'Library', 'Application Support');
  } else if (platform === 'win32') {
    // Windows
    baseDir =
      process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming');
  } else {
    // Other platforms (Linux, etc.)
    baseDir = process.env.XDG_CONFIG_HOME || path.join(os.homedir(), '.config');
  }

  return path.join(baseDir, appName);
}
