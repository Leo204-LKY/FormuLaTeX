import { app, BrowserWindow,ipcMain } from 'electron';
import path from 'path';
import { convertImageToLatex } from './api/simpletex';
import fs from 'fs/promises';

import os from 'os';
let mainWindow: BrowserWindow | null;

ipcMain.handle('recognize-formula', async (_, { name, type, data }) => {
  const tempDir = os.tmpdir();
  const tempPath = path.join(tempDir, `upload_${Date.now()}_${name}`);
  
  try {
    // 写入临时文件
    await fs.writeFile(tempPath, Buffer.from(data));

    
    // 调用识别函数
    const result = await convertImageToLatex(tempPath);
    return { success: true, res: result };
    
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error occurred' };
  } finally {
    // 清理临时文件
    try { await fs.unlink(tempPath); } 
    catch (e) { console.warn(e); }
  }
});
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.whenReady().then(() => {
  createWindow();

  // Open a new window when activating & there is no window (macOS)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
