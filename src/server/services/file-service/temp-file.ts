/**
 * Get system temp dir path
 */
import os from 'os';
import fs from 'fs';

const TEMP_FILES: string[] = [];

/**
 * @description Get system temp dir path
 * @returns Dir path in string
 */
export function getSafeTempDir(): string {
  const platform = os.platform();

  if (platform === 'linux') {
    // Linux
    if (fs.existsSync('/dev/shm')) {
      // Returns the memory virtual path
      return '/dev/shm';
    }
    return os.tmpdir();
  } else if (platform === 'darwin') {
    // macOS
    return '/tmp';
  } else if (platform === 'win32') {
    // Windows
    return os.tmpdir();
  } else {
    // Others
    return os.tmpdir();
  }
}

/**
 * @description Add temp file to TEMP_FILE
 * @param filePath Temp file path
 */
export function addTempFile(filePath: string): void {
  TEMP_FILES.push(filePath);
}

/**
 * @description Delete temp files
 * @param filePaths Temp files array
 */
export function cleanUpTempFiles(filePaths: string[] = TEMP_FILES): void {
  for (const filePath of filePaths) {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      const index = TEMP_FILES.indexOf(filePath);
      if (index !== -1) {
        TEMP_FILES.splice(index, 1);
      }
    } catch (e) {
      console.error('Failed to delete temp file: ', filePath, e);
    }
  }
}

// Auto cleanup when program closes
[
  'exit',
  'SIGINT',
  'SIGTERM',
  'SIGUSR1',
  'SIGUSR2',
  'uncaughtException',
].forEach((eventType) => {
  process.on(eventType, () => {
    cleanUpTempFiles();
    process.exit();
  });
});
