import { app, BrowserWindow } from 'electron';
import path from 'path';

let mainWindow: BrowserWindow | null;

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
  })
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
