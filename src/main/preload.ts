import { contextBridge, ipcRenderer } from 'electron';

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
});

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message: string) => ipcRenderer.send('message', message),
});

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string | undefined) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text!;
  };

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});
