import { shell } from 'electron';

/**
 * Open file directory in system file explorer
 * @param filePath Path to the file or directory to open
 */
export function showFileInFolder(filePath: string): void {
  if (!filePath) {
    throw new Error('File path is required');
  }

  shell.showItemInFolder(filePath);
}

/**
 * Open URL in default browser
 * @param url URL to open
 */
export function openUrlInBrowser(url: string): void {
  if (!url || !/^https?:\/\//.test(url)) {
    throw new Error('Valid URL is required');
  }

  shell.openExternal(url);
}
